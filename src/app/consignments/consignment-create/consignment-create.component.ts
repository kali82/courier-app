import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';
import { ToastService } from '../../shared/toast.service';
import { ConsignmentsService } from '../consignments.service';
import { Consignment } from '../model/consignment.model';
import { Service } from '../model/service.model';
import { ShipperAddress } from '../model/shipper-address.model';
import { ReceiverAddress } from '../model/receiver-address.model';
import { Piece } from '../model/piece.model';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ConsignmentsModule } from '../consignments.module';
import { DateAdapter } from '@angular/material/core';
import { ConsignmentListComponent } from '../consignment-list/consignment-list.component';

const SERVER_URL = environment.serverUrl;


@Component({
  templateUrl: './consignment-create.component.html',
  styleUrls: ['./consignment-create.component.css'],
})
export class ConsignmentCreateComponent implements OnInit, OnDestroy {
  @ViewChild(ConsignmentListComponent) listComponent;
  similarData;
  isPallette = false;
  ivState = false;
  cvState = false;
  cmState = false;
  cnState = false;
  qState = false;
  hState = false;
  lState = false;
  wiState = false;
  weState = false;
  tState = false;
  rceState = false;
  rcState = false;
  rcpState = false;
  rcphState = false;
  rpchState = false;
  rpcState = false;
  raState = false;
  rhState = false;
  rsState = false;
  rnState = false;
  cState = false;
  sceState = false;
  scphState = false;
  scpState = false;
  scState = false;
  spcState = false;
  saState = false;
  ssState = false;
  shState = false;
  snState = false;
  sdState = false;
  tt = false;

  isLoading = false;
  form: FormGroup;
  today = new Date();
  tomorrow = new Date(this.today.setDate(this.today.getDate() + 1));
  in3days = new Date(this.today.setDate(this.today.getDate() + 2));
  in2days = new Date(this.today.setDate(this.today.getDate() + 1));
  minDate = new Date(
    this.tomorrow.getFullYear(),
    this.tomorrow.getMonth(),
    this.tomorrow.getDate()
  );
  fitDate = new Date(
    this.tomorrow.getFullYear(),
    this.tomorrow.getMonth(),
    this.tomorrow.getDate()
  );
  maxDate = new Date(
    this.in3days.getFullYear(),
    this.in3days.getMonth(),
    this.in3days.getDate()
  );
  
  private authStatusSub: Subscription;
  weightControl;
  widthControl;
  lengthControl;
  heightControl;
  weight;
  width;
  length;
  height;
  wMax: number ;
  lMax: number ;
  hMax: number ;
  size;
  MAX_WEIGHT = 31;
  LONG = 120;
  SHORT = 60;
  LARGE = 76;
  SMALL = 36;
  HEAVY = 10.1;
  LIGHT = 1.1;
  showForm;
  globalSimilarId;

  constructor(
    public consignmentsService: ConsignmentsService,
    private authService: AuthService,
    private router: Router,
    public route: ActivatedRoute,
    private toastService: ToastService,
    private snackBar: MatSnackBar,
    private dateAdapter: DateAdapter<Date>
  ) { this.dateAdapter.setLocale('pl-PL');} //dd/MM/yyyy
  isFriday(date = new Date()) {
    return date.getDay() === 5;
  }
  isSaturday(date = new Date()) {

    return date.getDay() === 6;
  }

  ngOnInit() {
    let similar;
    if(this.isSaturday()){
      this.fitDate = new Date(
        this.fitDate.getFullYear(),
        this.fitDate.getMonth(),
        this.fitDate.getDate() +1
      );
    }
    if(this.isFriday()){
      this.fitDate = new Date(
        this.fitDate.getFullYear(),
        this.fitDate.getMonth(),
        this.fitDate.getDate() +2
      );
    }
    let login = this.authService.getLogin();
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      let similarId
      this.authService.getUser(login).then(data => {
        if (paramMap.has('similarId')) {
          similarId = paramMap.get('similarId');
          this.globalSimilarId = paramMap.get('similarId');
          this.consignmentsService.getConsignment(similarId).then(
            similarData => {
              this.showForm = true;
              this.createSimilarForm(data, similarData);
              this.setPieceValidators();
              this.setServiceValidators();
          
              this.authStatusSub = this.authService
                .getAuthStatusListener()
                .subscribe(authStatus => {
                  this.isLoading = false;
                });
            },
            error => {
            }  
          );
        } else {
          this.showForm = true;
          this.createForm(data);
          this.setPieceValidators();
          this.setServiceValidators();
    
           this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(authStatus => {
              this.isLoading = false;
            });
        }
      }); 
    });
  
  }
  // ngAfterViewInit() {
  //   this.similarData = this.listComponent.similarData;
  //   console.log(this.similarData)
  //   console.log('XD')

  // }

  showSnackbar(content, action, duration) {
    return this.snackBar.open(content, action, {
      duration: duration,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  
  }

  trimDoubleSpace(string) {
    return string.replace(/\s\s+/g, ' ');
  }

  trimDoubleSpaceAndNumber(string) {
    return this.trimDoubleSpace(string.replace(/\d+/g, ''));
  }

  trimDoubleSpaceAndNotNumber(number) {
    return this.trimDoubleSpace(number.replace(/\D+/g, ''));
  }

  trimComma(number) {
    return number.replace(/\D+/g, '');
  }

  formatPostalCode(postalCode) {
    if (postalCode.length < 4) postalCode = postalCode.replace(/\D+/g, '');
    if (postalCode.length == 2) postalCode = postalCode.concat('-');
    if (postalCode.length > 2) {
      postalCode = postalCode.replace(
        /\d\d-\d?\d?\D/g,
        postalCode.substring(0, postalCode.length - 1)
      );
    }

    return postalCode;
  }

  maxTenDigit(apartment) {
    if (apartment.length > 10) apartment = apartment.substring(0, 10);

    return apartment;
  }

  createForm(data) {
    this.form = new FormGroup({
      payerType: new FormControl('SHIPPER', {
        validators: [Validators.required],
      }),
      shipmentDate: new FormControl(this.fitDate, {
        validators: [Validators.required],
      }),
      shipperName: new FormControl(data.user.firstName, {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60),
        ],
      }),
      shipperPostalCode: new FormControl('66-001', {
        validators: [
          Validators.required,
          Validators.pattern('[0-9]{2}-[0-9]{3}'),
        ],
      }),
      shipperCity: new FormControl(data.user.city, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(17),
        ],
      }),
      shipperStreet: new FormControl(data.user.street, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(35),
        ],
      }),
      shipperHouseNumber: new FormControl(data.user.house, {
        validators: [Validators.required, Validators.maxLength(10)],
      }),
      shipperApartmentNumber: new FormControl(data.user.apartment, {
        validators: [Validators.maxLength(10)],
      }),
      shipperContactPerson: new FormControl(data.user.contactPerson, {
        validators: [Validators.maxLength(60)],
      }),
      shipperContactPhone: new FormControl(data.user.phone, {
        validators: [Validators.maxLength(20)],
      }),
      shipperContactEmail: new FormControl(data.user.email, {
        validators: [Validators.email, Validators.maxLength(60)],
      }),
      country: new FormControl('PL', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
        ],
      }),
      receiverName: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60),
        ],
      }),
      receiverPostalCode: new FormControl(null,{
        validators: [
          Validators.required,
          Validators.pattern('[0-9]{2}-[0-9]{3}'),
        ],
      }),
      receiverCity: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(17),
        ],
      }),
      receiverStreet: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(35),
        ],
      }),
      receiverHouseNumber: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(10)],
      }),
      receiverApartmentNumber: new FormControl(null, {
        validators: [Validators.maxLength(10)],
      }),
      receiverContactPerson: new FormControl(null, {
        validators: [Validators.maxLength(60)],
      }),
      receiverContactPhone: new FormControl(null, {
        validators: [Validators.maxLength(20)],
      }),
      receiverContactEmail: new FormControl(null, {
        validators: [Validators.email, Validators.maxLength(60)],
      }),
      
      type: new FormControl(`ENVELOPE`, { validators: [Validators.required] }),
      weight: new FormControl({ value: null, disabled: true }),
      width: new FormControl({ value: null, disabled: true }),
      length: new FormControl({ value: null, disabled: true }),
      height: new FormControl({ value: null, disabled: true }),
      quantity: new FormControl(1, {
        validators: [Validators.required, Validators.min(1)],
      }),
      nonStandard: new FormControl(null),
      content: new FormControl('XXX', {
        validators: [Validators.required, Validators.maxLength(30)],
      }),
      comment: new FormControl(null, {
        validators: [Validators.maxLength(100)],
      }),
      CoD: new FormControl(false),
      CoDValue: new FormControl({ value: null, disabled: true }),
      insurance: new FormControl(false),
      insuranceValue: new FormControl({ value: null, disabled: true }),
    });
  }
  createSimilarForm(data, similarData) {
    this.form = new FormGroup({
      payerType: new FormControl('SHIPPER', {
        validators: [Validators.required],
      }),
      shipmentDate: new FormControl(this.fitDate, {
        validators: [Validators.required],
      }),
      shipperName: new FormControl(data.user.firstName, {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60),
        ],
      }),
      shipperPostalCode: new FormControl('66-001', {
        validators: [
          Validators.required,
          Validators.pattern('[0-9]{2}-[0-9]{3}'),
        ],
      }),
      shipperCity: new FormControl(data.user.city, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(17),
        ],
      }),
      shipperStreet: new FormControl(data.user.street, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(35),
        ],
      }),
      shipperHouseNumber: new FormControl(data.user.house, {
        validators: [Validators.required, Validators.maxLength(10)],
      }),
      shipperApartmentNumber: new FormControl(data.user.apartment, {
        validators: [Validators.maxLength(10)],
      }),
      shipperContactPerson: new FormControl(data.user.contactPerson, {
        validators: [Validators.maxLength(60)],
      }),
      shipperContactPhone: new FormControl(data.user.phone, {
        validators: [Validators.maxLength(20)],
      }),
      shipperContactEmail: new FormControl(data.user.email, {
        validators: [Validators.email, Validators.maxLength(60)],
      }),
      country: new FormControl('PL', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
        ],
      }),
      receiverName: new FormControl(similarData.receiver.name, {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60),
        ],
      }),
      receiverPostalCode: new FormControl(similarData.receiver.postalCode,{
        validators: [
          Validators.required,
          Validators.pattern('[0-9]{2}-[0-9]{3}'),
        ],
      }),
      receiverCity: new FormControl(similarData.receiver.city, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(17),
        ],
      }),
      receiverStreet: new FormControl(similarData.receiver.street, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(35),
        ],
      }),
      receiverHouseNumber: new FormControl(similarData.receiver.houseNumber, {
        validators: [Validators.required, Validators.maxLength(10)],
      }),
      receiverApartmentNumber: new FormControl(similarData.receiver.apartmentNumber, {
        validators: [Validators.maxLength(10)],
      }),
      receiverContactPerson: new FormControl(similarData.receiver.contactPerson, {
        validators: [Validators.maxLength(60)],
      }),
      receiverContactPhone: new FormControl(similarData.receiver.contactPhone, {
        validators: [Validators.maxLength(20)],
      }),
      receiverContactEmail: new FormControl(similarData.receiver.contactEmail, {
        validators: [Validators.email, Validators.maxLength(60)],
      }),
      
      type: new FormControl(similarData.piece.type, { validators: [Validators.required] }),
      weight: new FormControl({ value: similarData.piece.weight, disabled: false }),
      width: new FormControl({ value: similarData.piece.width, disabled: false }),
      length: new FormControl({ value: similarData.piece.length, disabled: false }),
      height: new FormControl({ value: similarData.piece.height, disabled: false }),
      quantity: new FormControl(similarData.piece.quantity, {
        validators: [Validators.required, Validators.min(1)],
      }),
      nonStandard: new FormControl(similarData.piece.nonStandard),
      content: new FormControl(similarData.content, {
        validators: [Validators.required, Validators.maxLength(30)],
      }),
      comment: new FormControl(similarData.comment, {
        validators: [Validators.maxLength(100)],
      }),
      CoD: new FormControl(similarData.service.CoD),
      CoDValue: new FormControl({ value: similarData.service.CoDValue, disabled: false }),
      insurance: new FormControl(similarData.service.insurance),
      insuranceValue: new FormControl({ value: similarData.service.insuranceValue, disabled: false }),
    });
  }
  weekendFilter = (date: Date): boolean => {
    const day = date.getDay();
    const saturday = 6;
    const sunday = 0;

    return day !== saturday && day !== sunday;
  };

  formatDateForUser(date: Date): string {
    const day = date
      .getDate()
      .toString()
      .padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return day + '-' + month + '-' + year;
  }

  formatDateForDhlApi(date: Date): string {
    const day = date
      .getDate()
      .toString()
      .padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return year + '-' + month + '-' + day;
  }

  setPieceValidators() {
    const typeControl = this.form.get('type');
    this.weightControl = this.form.get('weight');
    this.widthControl = this.form.get('width');
    this.lengthControl = this.form.get('length');
    this.heightControl = this.form.get('height');
      if (typeControl.value === 'ENVELOPE') {
        this.weightControl.setValue(null);
        this.weightControl.disable();
        this.widthControl.setValue(null);
        this.widthControl.disable();
        this.lengthControl.setValue(null);
        this.lengthControl.disable();
        this.heightControl.setValue(null);
        this.heightControl.disable();
        this.isPallette = false;
      } else if (typeControl.value === 'PACKAGE') {
        this.setPackageDimensionsValidators()
        this.updateDimensionsValidators();

        this.wMax = 300;
        this.lMax = 300;
        this.hMax = 300;
        this.updateDimensionsValidators();
        this.weightControl.enable();
          this.weightControl.setValidators([
            Validators.required,
            Validators.max(this.MAX_WEIGHT),
          ]);
          this.setWeightListener();
        this.isPallette = false;
        this.widthControl.enable();
        this.lengthControl.enable();
        this.heightControl.enable();
        this.setPackageDimensionsValidators()
        //this.setDimensionsValidators();
      } else if(typeControl.value === 'PALLET') {
        this.isPallette = true;
        this.setPalletteDimensionsValidators();

         this.wMax = 10000;
         this.lMax = 10000;
         this.hMax = 10000;
         this.updateDimensionsValidators();

        this.weightControl.enable();
        this.weightControl.setValidators([
          Validators.required,
          Validators.max(1000),
        ]);
        this.setWeightListener();
        this.widthControl.enable();
        this.lengthControl.enable();
        this.heightControl.enable();
        this.setPalletteDimensionsValidators();
      }
    typeControl.valueChanges.subscribe((type: string) => {
      if (type === 'ENVELOPE') {
        this.weightControl.setValue(null);
        this.weightControl.disable();
        this.widthControl.setValue(null);
        this.widthControl.disable();
        this.lengthControl.setValue(null);
        this.lengthControl.disable();
        this.heightControl.setValue(null);
        this.heightControl.disable();
        this.isPallette = false;
      } else if (type === 'PACKAGE') {
        this.setPackageDimensionsValidators()
        this.updateDimensionsValidators();

        this.wMax = 300;
        this.lMax = 300;
        this.hMax = 300;
        this.updateDimensionsValidators();
        this.weightControl.enable();
          this.weightControl.setValidators([
            Validators.required,
            Validators.max(this.MAX_WEIGHT),
          ]);
          this.setWeightListener();
        this.isPallette = false;
        this.widthControl.enable();
        this.lengthControl.enable();
        this.heightControl.enable();
        this.setPackageDimensionsValidators()
        //this.setDimensionsValidators();
      } else if(type === 'PALLET') {
        this.isPallette = true;
        this.setPalletteDimensionsValidators();

         this.wMax = 10000;
         this.lMax = 10000;
         this.hMax = 10000;
         this.updateDimensionsValidators();

        this.weightControl.enable();
        this.weightControl.setValidators([
          Validators.required,
          Validators.max(1000),
        ]);
        this.setWeightListener();
        this.widthControl.enable();
        this.lengthControl.enable();
        this.heightControl.enable();
        this.setPalletteDimensionsValidators();
      }
    });
  }

  setPackageDimensionsValidators() {
    if(this.globalSimilarId){
      this.wMax = this.wMax = 300 - (this.heightControl.value + this.lengthControl.value);      ;
      this.lMax = 300 - (this.heightControl.value + this.widthControl.value);
      this.hMax = 300 - (this.lengthControl.value + this.widthControl.value);
    } else {
      this.wMax = 300;
      this.lMax = 300;
      this.hMax = 300;
    }
    this.updateDimensionsValidators();
    this.widthControl.valueChanges.subscribe((width: number) => {
        this.lMax = 300 - (width + this.heightControl.value);
        this.hMax = 300 - (width + this.lengthControl.value);
        this.wMax = 300 - (this.heightControl.value + this.lengthControl.value);

      this.updateDimensionsValidators();
    });
    this.lengthControl.valueChanges.subscribe((length: number) => {
        this.wMax = 300 - (length + this.heightControl.value);
        this.hMax = 300 - (length + this.widthControl.value);
        this.lMax = 300 - (this.heightControl.value + this.widthControl.value);

      this.updateDimensionsValidators();
    });
    this.heightControl.valueChanges.subscribe((height: number) => {
        this.wMax = 300 - (height + this.lengthControl.value);
        this.lMax = 300 - (height + this.widthControl.value);
        this.hMax = 300 - (this.lengthControl.value + this.widthControl.value);

      this.updateDimensionsValidators();
    });

  }
  setPalletteDimensionsValidators() {
    this.widthControl.valueChanges.subscribe((width: number) => {
        this.lMax = 999999999999;
        this.wMax = 999999999999;
        this.hMax = 999999999999;
      this.updateDimensionsValidators();
    });
    this.lengthControl.valueChanges.subscribe((length: number) => {
        this.wMax = 999999999999
        this.hMax = 999999999999
        this.lMax = 999999999999

      this.updateDimensionsValidators();
    });
    this.heightControl.valueChanges.subscribe((height: number) => {
        this.wMax = 999999999999
        this.lMax = 999999999999
        this.hMax = 999999999999

      this.updateDimensionsValidators();
    });

  }
  setDimensionsValidators() {
    this.widthControl.valueChanges.subscribe((width: number) => {
      if (width > this.SHORT) {
        if (
          this.lengthControl.value <= this.SHORT &&
          this.heightControl.value <= this.SHORT
        ) {
          this.wMax = this.LONG;
          this.lMax = this.SHORT;
          this.hMax = this.SHORT;
        } else {
          this.wMax = this.SHORT;
          if (this.lengthControl.value > this.SHORT) {
            this.lMax = this.LONG;
            this.hMax = this.SHORT;
          } else if (this.heightControl.value > this.SHORT) {
            this.lMax = this.SHORT;
            this.hMax = this.LONG;
          }
        }
      } else {
        if (this.lengthControl.value > this.SHORT) {
          this.wMax = this.SHORT;
          this.lMax = this.LONG;
          this.hMax = this.SHORT;
        } else if (this.heightControl.value > this.SHORT) {
          this.wMax = this.SHORT;
          this.lMax = this.SHORT;
          this.hMax = this.LONG;
        } else {
          this.wMax = this.LONG;
          this.lMax = this.LONG;
          this.hMax = this.LONG;
        }
      }
      this.updateDimensionsValidators();
    });

    this.lengthControl.valueChanges.subscribe((length: number) => {
      this.weightControl = this.form.get('weight');
      this.widthControl = this.form.get('width');
      this.lengthControl = this.form.get('length');
      this.heightControl = this.form.get('height');
      // let dupa = length*this.height*this.width;
      // if(dupa> 300) {
      //   // this.form.get('length').setErrors({ 'invalid': true });
      //   // //this.form.get('length').setErrors({ serverError: { message: 'Show server error :)' } });
      //   // console.log(this.form.get('length').invalid);
      //   // this.tt = true;
      //   // console.log('tt ' + this.tt);
      //   // //this.updateSummedDimensionsValidators()
      //   // console.log(dupa)
      // }else 
      if (length > this.SHORT) {
        if (
          this.widthControl.value <= this.SHORT &&
          this.heightControl.value <= this.SHORT
        ) {
          this.wMax = this.SHORT;
          this.lMax = this.LONG;
          this.hMax = this.SHORT;
        } else {
          this.lMax = this.SHORT;
          if (this.widthControl.value > this.SHORT) {
            this.wMax = this.LONG;
            this.hMax = this.SHORT;
          } else if (this.heightControl.value > this.SHORT) {
            this.wMax = this.SHORT;
            this.hMax = this.LONG;
          }
        }
      } else {
        if (this.widthControl.value > this.SHORT) {
          this.wMax = this.LONG;
          this.lMax = this.SHORT;
          this.hMax = this.SHORT;
        } else if (this.heightControl.value > this.SHORT) {
          this.wMax = this.SHORT;
          this.lMax = this.SHORT;
          this.hMax = this.LONG;
        } else {
          this.wMax = this.LONG;
          this.lMax = this.LONG;
          this.hMax = this.LONG;
        }
      }
      this.updateDimensionsValidators();
    });

    this.heightControl.valueChanges.subscribe((height: number) => {
      if (height > this.SHORT) {
        if (
          this.widthControl.value <= this.SHORT &&
          this.lengthControl.value <= this.SHORT
        ) {
          this.wMax = this.SHORT;
          this.lMax = this.SHORT;
          this.hMax = this.LONG;
        } else {
          this.hMax = this.SHORT;
          if (this.widthControl.value > this.SHORT) {
            this.wMax = this.LONG;
            this.lMax = this.SHORT;
          } else if (this.lengthControl.value > this.SHORT) {
            this.wMax = this.SHORT;
            this.lMax = this.LONG;
          }
        }
      } else {
        if (this.widthControl.value > this.SHORT) {
          this.wMax = this.LONG;
          this.lMax = this.SHORT;
          this.hMax = this.SHORT;
        } else if (this.lengthControl.value > this.SHORT) {
          this.wMax = this.SHORT;
          this.lMax = this.LONG;
          this.hMax = this.SHORT;
        } else {
          this.wMax = this.LONG;
          this.lMax = this.LONG;
          this.hMax = this.LONG;
        }
      }
      this.updateDimensionsValidators();
    });
  }

  updateDimensionsValidators() {
    this.updateDimensionValidators(this.widthControl, this.wMax);
    this.updateDimensionValidators(this.lengthControl, this.lMax);
    this.updateDimensionValidators(this.heightControl, this.hMax);
    this.determineSize();
  }
  updateSummedDimensionsValidators() {
    console.log()
    this.updateDimensionValidators(this.widthControl, this.wMax);
    this.updateDimensionValidators(this.lengthControl, this.lMax);
    this.updateDimensionValidators(this.heightControl, this.hMax);
    this.determineSize();
  }

  updateSummedDimensionValidators(dimensionControl, maxValue) {
    dimensionControl.setValidators([
      Validators.required,
      Validators.max(1),
    ]);
    dimensionControl.updateValueAndValidity({ emitEvent: false });
  }
  updateDimensionValidators(dimensionControl, maxValue) {
    dimensionControl.setValidators([
      Validators.required,
      Validators.max(maxValue),
    ]);
    dimensionControl.updateValueAndValidity({ emitEvent: false });
  }

  setWeightListener() {
    this.weightControl.valueChanges.subscribe((weight: number) => {
      this.weightControl.updateValueAndValidity({ emitEvent: false });
      this.determineSize();
    });
  }

  determineSize() {
    this.weight = this.weightControl.value;
    this.width = this.widthControl.value;
    this.length = this.lengthControl.value;
    this.height = this.heightControl.value;

    if (this.weight && this.width && this.length && this.height) {
      let min =
        this.width < this.length
          ? this.width < this.height
            ? this.width
            : this.height
          : this.length < this.height
          ? this.length
          : this.height;
      let max =
        this.width > this.length
          ? this.width > this.height
            ? this.width
            : this.height
          : this.length > this.height
          ? this.length
          : this.height;
      if (this.weight < this.LIGHT && min + max < this.SMALL) {
        this.size = 'super lekka';
      } else if (this.weight < this.HEAVY && min + max < this.LARGE) {
        this.size = 'lekka';
      } else {
        this.size = 'ci????ka';
      }
    } else {
      this.size = null;
    }
  }

  setServiceValidators() {
    const CoD = this.form.get('CoD');
    const CoDValue = this.form.get('CoDValue');

    CoD.valueChanges.subscribe((selected: boolean) => {
      if (selected) {
        CoDValue.enable();
        CoDValue.setValidators([
          Validators.required,
          Validators.min(1),
          Validators.max(insuranceValue.value),
        ]);
        insurance.setValue(true);
        insurance.setValidators(Validators.required);
        insuranceValue.updateValueAndValidity;
      } else if (!selected) {
        CoDValue.setValue(null);
        CoDValue.disable();
        insurance.clearValidators();
      }
      CoDValue.updateValueAndValidity;
      insurance.updateValueAndValidity;
    });

    CoDValue.valueChanges.subscribe((value: number) => {
      if (value > insuranceValue.value) {
        insuranceValue.setValue(value);
      }
      insuranceValue.setValidators([
        Validators.required,
        Validators.min(CoDValue.value),
        Validators.max(11000),
      ]);
      insuranceValue.updateValueAndValidity;
    });

    const insurance = this.form.get('insurance');
    const insuranceValue = this.form.get('insuranceValue');

    insurance.valueChanges.subscribe((selected: boolean) => {
      if (selected) {
        insuranceValue.enable();
        insuranceValue.setValidators([
          Validators.required,
          Validators.min(CoDValue.value),
          Validators.max(11000),
        ]);
      } else if (!selected) {
        if (!selected && CoD.value) {
          CoD.setValue(false);
        }
        insuranceValue.setValue(null);
        insuranceValue.disable();
        CoD.updateValueAndValidity;
      }
      insuranceValue.updateValueAndValidity;
    });
  }

  onCreate() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    const userId = this.authService.getUserId();
    const login = this.authService.getLogin();
    const form = this.form.value;
    const payerType: string = form.payerType;
    const pickedDate: Date = form.shipmentDate;
    const shipmentDateTime = new Date(
      pickedDate.getFullYear(),
      pickedDate.getMonth(),
      pickedDate.getDate(),
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds()
    ).toLocaleString('pl-PL');
    const shipmentDate: string = this.formatDateForDhlApi(pickedDate);
    const service: Service = {
      CoD: form.CoD ? form.CoD : '',
      CoDValue: form.CoDValue ? form.CoDValue : '',
      insurance: form.insurance ? form.insurance : '',
      insuranceValue: form.insuranceValue ? form.insuranceValue : '',
    };
    const shipper: ShipperAddress = {
      name: form.shipperName,
      postalCode: form.shipperPostalCode.replace('-', ''),
      city: form.shipperCity,
      street: form.shipperStreet,
      houseNumber: form.shipperHouseNumber,
      apartmentNumber: form.shipperApartmentNumber
        ? form.shipperApartmentNumber.toString()
        : '',
      contactPerson: form.shipperContactPerson ? form.shipperContactPerson : '',
      contactPhone: form.shipperContactPhone ? form.shipperContactPhone : '',
      contactEmail: form.shipperContactEmail ? form.shipperContactEmail : '',
    };
    const receiver: ReceiverAddress = {
      country: form.country,
      name: form.receiverName,
      postalCode: form.receiverPostalCode.replace('-', ''),
      city: form.receiverCity,
      street: form.receiverStreet,
      houseNumber: form.receiverHouseNumber,
      apartmentNumber: form.receiverApartmentNumber
        ? form.receiverApartmentNumber.toString()
        : '',
      contactPerson: form.receiverContactPerson
        ? form.receiverContactPerson
        : '',
      contactPhone: form.receiverContactPhone ? form.receiverContactPhone : '',
      contactEmail: form.receiverContactEmail ? form.receiverContactEmail : '',
    };
    const piece: Piece = {
      type: form.type,
      weight: form.weight ? form.weight : '',
      width: form.width ? form.width : '',
      length: form.length ? form.length : '',
      height: form.height ? form.height : '',
      quantity: form.quantity,
      nonStandard: form.nonStandard ? true : false,
    };
    const comment: string = form.comment ? form.comment : '';
    const content: string = form.content;
    const consignment: Consignment = {
      userId: userId,
      login: login,
      shipper: shipper,
      receiver: receiver,
      piece: piece,
      payerType: payerType,
      service: service,
      shipmentDate: shipmentDate,
      comment: comment,
      content: content,
      shipmentDateTime: shipmentDateTime,
    };
    this.consignmentsService.createConsignment(consignment).then(response => {
      this.isLoading = false;
      if (response.status === 400) {
        this.toastService.showToast(response.error.message);
      } else {
        this.form.reset();
        this.authService.getUser(login).then(data => {
          this.showForm = true;
          //this.toastService.showToast(data.message)
          this.createForm(data);
          this.setPieceValidators();
          this.setServiceValidators();
      
          this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(authStatus => {
              this.isLoading = false;
            });
        });
        //window.location.reload();
        let consignmentId = response.consignmentId;
        this.toastService.showToast(response.message);
        this.consignmentsService.getConsignment(consignmentId).then(response => {
          let snackBar = this.showSnackbar("Otw??rz list przewozowy", 'Zobacz', '50000');
          snackBar.onAction().subscribe(() => { 
            // let blankWindow = window.open(SERVER_URL + response.letterPath, '');
            // blankWindow.blur();
            //window.focus();
            var myWindow = window.open(SERVER_URL + response.letterPath, "_blank", "width=200, height=100");
            myWindow.blur();
            window.focus();
            self.focus(); 
          })     
        });
      }
    })
  }
  open(filePath) {
    window.open(filePath, '_blank');
  }
  ngOnDestroy() {
    // this.authStatusSub.unsubscribe();
  }
}
