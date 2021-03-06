import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Sort } from '@angular/material/sort';


import { AuthService } from '../../auth/auth.service';
import { ConsignmentsService } from '../consignments.service';
import { Consignment } from '../model/consignment.model';
import { environment } from '../../../environments/environment';
import { ConsignmentCreateComponent } from '../consignment-create/consignment-create.component';

const SERVER_URL = environment.serverUrl;

@Component({
  selector: 'app-consignment-list',
  templateUrl: './consignment-list.component.html',
  styleUrls: ['./consignment-list.component.css'],
})
export class ConsignmentListComponent implements OnInit, OnDestroy {
  // @ViewChild(ConsignmentCreateComponent) createComponent;
  private authStatusSub: Subscription;
  isAuthenticated = false;
  isAdmin = false;
  isLoading: boolean;
  pageEvent;
  displayedColumns: string[] = [
    'select',
    'consignmentId',
    'login',
    'shipperName',
    'receiverName',
    'status',
    'rozliczone',
    'shipmentDateTime',
    'action',
  ];
  detailColumns = this.displayedColumns.length - 1;
  consignments;
  similarData;
  dataSource: any;
  selection = new SelectionModel<Consignment>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public consignmentsService: ConsignmentsService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.isAdmin = this.authService.getIsAdmin();
    this.isAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
    this.listConsignments();
  }
  // ngAfterViewInit() {
  //   this.createComp = this.createComponent;
  // }
  listConsignments() {
    this.consignmentsService.listConsignments().then(response => {
      this.isLoading = false;
      this.consignments = response.consignments;
      console.log(response.consignments)
      this.dataSource = new MatTableDataSource<any>(this.consignments);
      this.dataSource.paginator = this.paginator;
      const sortState: Sort = {
        active: 'consignmentId',
        direction: 'desc',
      };
      this.sort.active = sortState.active;
      this.sort.direction = sortState.direction;
      this.sort.sortChange.emit(sortState);
      this.dataSource.sort = this.sort;
    });
  }

  isExpansionDetailRow = row => row.hasOwnProperty('detailRow');

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  showDetails(shipmentId: string) {
    this.router.navigate(['./consignments/' + shipmentId]);
  }
  showSimilarForm(shipmentId: string) {
    this.router.navigate(['/createConsignments/'+ shipmentId]);
  }
  deleteSelected() {
    let selectedConsignments = [];
    let userNames = [];
    this.selection.selected.forEach(el => {
      selectedConsignments.push({userName: el.login,consignmentId: el.consignmentId});
      userNames.push(el.login);
    });
    this.consignmentsService.deleteConsignments(userNames, selectedConsignments).then(
      () => {
        this.listConsignments();
        this.selection.clear();
      },
      error => {}
    );
  }
  settleSelected() {
    let selectedConsignments = [];
    let userNames = [];
    this.selection.selected.forEach(el => {
      selectedConsignments.push({userName: el.login,consignmentId: el.consignmentId});
      userNames.push(el.login);
    });
    this.consignmentsService.settleConsignments(userNames, selectedConsignments).then(
      () => {
        this.listConsignments();
        this.selection.clear();
      },
      error => {}
    );
  }

  handlePage(event: any) {
    if (this.selection.selected.length > event.pageSize) {
      this.selection.clear();
      this.selectRows();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.paginator.length;
    const pageSize = this.dataSource.paginator.pageSize;

    return numSelected === numRows || numSelected === pageSize ? true : false;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.selectRows();
  }

  selectRows() {
    this.dataSource
      ._pageData(this.dataSource._orderData(this.dataSource.filteredData))
      .forEach(row => this.selection.select(row));
  }

  onLabelPrint(consignmentId) {
    this.isLoading = true;
    // teraz, aby pobra?? etykiet??, backend pobiera z dhl ca???? przesy??k?? i generuje pdfa (za ka??dym razem!)
    // a m??g??by sprawdzi??, czy plik jest ju?? w /files i stamt??d pobra??
    // a w sumie etykieta pobierana b??dzie dla ka??dej utworzonej przesy??ki wi??c mo??e generowa?? j?? przy tworzeniu przesy??ki i adres do etykiety zapisywa?? w db?
    // a mo??e pdf'a zapisywa?? w db?
    this.consignmentsService.getConsignment(consignmentId).then(
      data => {
        let labelPath = SERVER_URL + data.labelPath;
        this.isLoading = false;
        window.open(labelPath, '_blank');
      },
      error => {}
    );
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
