import { Component, OnInit, OnDestroy, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import * as XLSX from 'xlsx';
import { ConsignmentsService } from '../consignments/consignments.service';
import { ConsignmentsModule } from '../consignments/consignments.module';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTable} from '@angular/material/table';
import { MatTableDataSource} from '@angular/material/table';
import { Sort} from '@angular/material/sort';
import { Consignment } from '../consignments/model/consignment.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FlexStyleBuilder } from '@angular/flex-layout';

type AOA = any[][];
const SERVER_URL = environment.serverUrl;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'login',
    'cena_dhl',
    'cena_faktura',
    'cena_brutto',
    'kwota_pobrania',
    'suma',
    'settled',
    'action'
  ];
  //selection = new SelectionModel<Consignment>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  @ViewChild(MatSort) sort2: MatSort;
  @ViewChild(MatTable) table2: MatTable<any>;
  @ViewChildren(MatTable) matTables : QueryList<MatTable<any>>;
  generated = 0;
  pageEvent;
  selection = new SelectionModel<Consignment>(true, []);
  detailColumns = this.displayedColumns.length - 1;
  isLoading: boolean;
  dataSource: any;
  dataSource2: any;
  pdfPath = '';
  xlsPath = '';
  userIsAuthenticated = false;
  fileImported = false;
  pdfFileImported = false;
  isSettled = false;
  setlledConsignmentsList = [];
  staticSetlledConsignmentsList = [];
  notSettledConsignmentsList = [];
  consignments
  consignmentList;
  isAdmin = false;
  sumOfCoD: Number = 0;
  data: AOA = [];
  pdfData: AOA = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  private authListenerSubs: Subscription;
  EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  EXCEL_EXTENSION = '.xlsx';

  constructor(
    private authService: AuthService,
    private router: Router,
    public consignmentsService: ConsignmentsService,) {}

  ngOnInit() {
     let xd = new Date("23.05.2022, 13:39:26");
    // console.log(xd);
    let xd2 = new Date("23-05-2022");
    let xd3 = new Date("11/21/1999, 16:00:00"); 
    let text = "23.05.2022, 13:39:26";
    let xd31  = text.replace(/\./g,'/');
    console.log(new Date(xd31));
    console.log(xd31);
    console.log(xd3);
  
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.isAdmin = this.authService.getIsAdmin();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
     this.listConsignments().then((res)=>{
      console.log(this.consignments);
      console.log("CONSIGNMENT LISTxs")
     });
   

    this.dataSource = new MatTableDataSource<any>(this.setlledConsignmentsList);
    this.dataSource.paginator = this.paginator;
    const sortState: Sort = {
      active: 'id',
      direction: 'desc',
    };
    //this.sort.active = sortState.active;
    //this.sort.direction = sortState.direction;
    //this.sort.sortChange.emit(sortState);
    //this.dataSource.sort = this.sort;
  
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }


  public exportAsExcelFile(excelFileName: string): void {
    
    const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource);
    const myworkbook: XLSX.WorkBook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const savedFileName = fileName + '_exported.xlsx';
    const data: Blob = new Blob([buffer], {
      type: this.EXCEL_TYPE
    });
    XLSX.writeFileAsync(savedFileName,buffer,{})
   // FileSaver.saveAs(data, fileName + '_exported'+ EXCEL_EXTENSION);
  }
  onPdfFileChange(evt: any) {
    this.pdfFileImported = true;
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.pdfPath = target.files[0].name;
      /* save data */
      this.pdfData = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      //console.log(this.data);
      
      //this.isSettled = this.settleConsignments(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  onFileChange(evt: any) {
    // this.setlledConsignmentsList = [];
    // this.notSettledConsignmentsList = [];
    this.isSettled = false;
    this.sumOfCoD = 0;
    this.fileImported = true;
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.xlsPath = target.files[0].name;
      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      //console.log(this.data);
      
     // this.isSettled = this.settleConsignments(this.data, this.pdfData);
     this.isSettled = true;
    };
    reader.readAsBinaryString(target.files[0]);
  }
  refreshTable(filterValue){
    this.dataSource = new MatTableDataSource<any>(this.setlledConsignmentsList);
    //this.dataSource = [...this.setlledConsignmentsList];
    //this.dataSource2 = [...this.notSettledConsignmentsList];
   
    this.dataSource.filter = filterValue
    this.table.renderRows();
    //this.matTables.toArray().forEach(each => each.renderRows());
  }

  async settleConsignments(){
    let conignmentsForReport = this.listConsignments();
    console.log(this.consignments)
    this.setlledConsignmentsList = [];
    this.notSettledConsignmentsList = []
    let pdfPrice = 0;
    let isSettle = 0;
    let indexRazemNetto = this.data[0].indexOf("Razem netto");
    let indexConsignmentId = this.data[0].indexOf("Numer przesyłki");
    let consignmentsIds = this.consignments.map(consignment => consignment.consignmentId);
    this.data.forEach((element) => { 
      
    let settledConsignments = consignmentsIds.filter((el: any) => el == element[indexConsignmentId]);
      if(settledConsignments.length>0){
        this.consignmentsService.getConsignment(element[indexConsignmentId]).then(response => {
          console.log(response);
          if(element[indexRazemNetto] === response.service.CoDValue){
            let pdfPrice2 = 0;
            this.sumOfCoD += response.service.CoDValue;
            this.pdfData.forEach((pdfElement) => { 
              if(pdfElement[2] == response.consignmentId){
                  isSettle = 1;
                  pdfPrice2 = pdfElement[4];
              } else {
                pdfPrice = 0;
              }
            });
            if(isSettle){
              let cmt = this.consignmentList.filter(el => el.consignmentId == element[indexConsignmentId]); 
              this.setlledConsignmentsList.push(
                {
                'id' : element[indexConsignmentId],
                'kwota_pobrania' : pdfPrice2,
                'cena_excel': element[indexRazemNetto],
                'cena_brutto': element[indexRazemNetto]*1.23*1.15,
                'cena_dhl' : response.service.CoDValue,
                'suma' : element[indexRazemNetto] < response.service.CoDValue ? pdfPrice2 - element[indexRazemNetto] : pdfPrice2 - response.service.CoDValue ,
                'user' : response.login,
                'settled' : cmt[0].settled == true ? 1 : 0
                }
              );
            }
          } else {
            let pdfPrice3 = 0;
            this.pdfData.forEach(pdfElement => { 
              if(pdfElement[2] == response.consignmentId){
                isSettle = 1;
                pdfPrice3 = pdfElement[4];

              } else {
              pdfPrice = 0;
              }
            });
            let cmt = this.consignmentList.filter(el => el.consignmentId == element[indexConsignmentId]);
            this.setlledConsignmentsList.push(
                {'id' : element[indexConsignmentId],
                'kwota_pobrania' : pdfPrice3,
                'cena_excel': element[indexRazemNetto], 
                'cena_brutto': (element[indexRazemNetto]*1.23*1.15).toFixed(2),
                'cena_dhl' : response.service.CoDValue,
                'suma' : element[indexRazemNetto] < response.service.CoDValue ? pdfPrice3 - element[indexRazemNetto] : pdfPrice3 - response.service.CoDValue ,
                'user' : response.login,
                'settled' : cmt[0].settled == true ? 1 : 0
              }
            );
            //console.log("KWOTA POBRANIA NIE ZGADZA SIE : "+ element[indexConsignmentId])
          }
          this.staticSetlledConsignmentsList = this.setlledConsignmentsList;
          this.refreshTable("");
          this.generated = 1;
        });
      }
    });
    return true;
  }

  isExpansionDetailRow = row => row.hasOwnProperty('detailRow');

  applyFilter(filterValue: string) {
    let lista = this.staticSetlledConsignmentsList;
    let dupa = lista.filter(function (el) {
        return el.user.includes(filterValue) || 
               String(el.id).includes(filterValue)||
               String(el.cena_excel).includes(filterValue) ||
               String(el.cena_dhl).includes(filterValue) ||
               String(el.kwota_pobrania).includes(filterValue) ||
               String(el.cena_brutto).includes(filterValue) ||
               String(el.suma).includes(filterValue);
      });
      this.setlledConsignmentsList = dupa;
     console.log(dupa);
    // console.log(this.setlledConsignmentsList);
    this.refreshTable(filterValue);
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    console.log(this.dataSource)
    this.refreshTable(filterValue);
    this.table.renderRows();
    //console.log(...this.dataSource);
  }

  listConsignments():Promise<any>{
    return this.consignmentsService.listConsignments().then(response => {
      this.consignments = response.consignments;
      this.consignmentList = response.consignments;
      //this.settleConsignments();
      console.log(response.consignments);
      return response.consignments;
    });
  }
  showDetails(shipmentId: string) {
    this.router.navigate(['./consignments/' + shipmentId]);
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
        this.settleConsignments();
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
    //this.isLoading = true;
    // teraz, aby pobrać etykietę, backend pobiera z dhl całą przesyłkę i generuje pdfa (za każdym razem!)
    // a mógłby sprawdzić, czy plik jest już w /files i stamtąd pobrać
    // a w sumie etykieta pobierana będzie dla każdej utworzonej przesyłki więc może generować ją przy tworzeniu przesyłki i adres do etykiety zapisywać w db?
    // a może pdf'a zapisywać w db?
    this.consignmentsService.getConsignment(consignmentId).then(
      data => {
        let labelPath = SERVER_URL + data.labelPath;
        //this.isLoading = false;
        window.open(labelPath, '_blank');
      },
      error => {}
    );
  }
  settleConsignment(user, consignmentId) {
    let selectedConsignments = [];
    let userNames = [];

    selectedConsignments.push({userName: user,consignmentId: consignmentId});
    userNames.push(user);

    this.consignmentsService.settleConsignments(userNames, selectedConsignments).then(
      () => {
        //  this.listConsignments();
        // this.settleConsignments();
      },
      error => {}
    );
  }
  

}
