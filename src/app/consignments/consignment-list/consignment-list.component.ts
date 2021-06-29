import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import {
  MatPaginator,
  MatTableDataSource,
  MatSort,
  Sort,
} from '@angular/material';

import { AuthService } from '../../auth/auth.service';
import { ConsignmentsService } from '../consignments.service';
import { Consignment } from '../model/consignment.model';
import { environment } from '../../../environments/environment';

const SERVER_URL = environment.serverUrl;

@Component({
  selector: 'app-consignment-list',
  templateUrl: './consignment-list.component.html',
  styleUrls: ['./consignment-list.component.css'],
})
export class ConsignmentListComponent implements OnInit, OnDestroy {
  private authStatusSub: Subscription;
  isAuthenticated = false;
  isLoading: boolean;
  pageEvent;
  displayedColumns: string[] = [
    'select',
    'consignmentId',
    'login',
    'shipperName',
    'receiverName',
    'status',
    'shipmentDateTime',
    'action',
  ];
  detailColumns = this.displayedColumns.length - 1;
  consignments;
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
    this.isAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
    this.listConsignments();
  }

  listConsignments() {
    this.consignmentsService.listConsignments().then(response => {
      this.isLoading = false;
      this.consignments = response.consignments;
      this.dataSource = new MatTableDataSource<any>(this.consignments);
      this.dataSource.paginator = this.paginator;
      const sortState: Sort = {
        active: 'shipmentDateTime',
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

  deleteSelected() {
    let selectedConsignments = [];
    this.selection.selected.forEach(el => {
      selectedConsignments.push(el.consignmentId);
    });
    this.consignmentsService.deleteConsignments(selectedConsignments).then(
      () => {
        this.listConsignments();
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
    // teraz, aby pobrać etykietę, backend pobiera z dhl całą przesyłkę i generuje pdfa (za każdym razem!)
    // a mógłby sprawdzić, czy plik jest już w /files i stamtąd pobrać
    // a w sumie etykieta pobierana będzie dla każdej utworzonej przesyłki więc może generować ją przy tworzeniu przesyłki i adres do etykiety zapisywać w db?
    // a może pdf'a zapisywać w db?
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
