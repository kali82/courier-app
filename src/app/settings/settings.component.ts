import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { ConsignmentsService } from '../consignments/consignments.service';
import { ShipperAddress } from '../consignments/model/shipper-address.model';
import { ToastService } from '../shared/toast.service';

const SERVER_URL = environment.serverUrl;


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit, OnDestroy {
  @ViewChild('fileInput') fileInput: ElementRef;
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
  isLoading = false;
  form2: FormGroup;
  today = new Date();
  tomorrow = new Date(this.today.setDate(this.today.getDate() + 1));
  in3days = new Date(this.today.setDate(this.today.getDate() + 2));
  minDate = new Date(
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
  user = this.authService.getLogin();
  showForm;
  constructor(
    public consignmentsService: ConsignmentsService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private snackBar: MatSnackBar
  ) {}


  async ngOnInit() {
    let login = this.authService.getLogin();
    this.authService.getUser(login).then(data => {
      this.showForm = true;
      this.toastService.showToast(data.message)
      this.createForm(data);
    });
    
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
  }
  updatePersonalData(){
    this.authService.updateUser(
      this.user,
      this.form2.get('shipperName').value,
      this.form2.get('shipperStreet').value,
      this.form2.get('shipperHouseNumber').value,
      this.form2.get('shipperApartmentNumber').value,
      this.form2.get('shipperCity').value,
      this.form2.get('shipperContactPerson').value,
      this.form2.get('shipperContactPhone').value,
      this.form2.get('shipperContactEmail').value,
      this.form2.get('shipperPostalCode').value
       );
  }
  updateImage(){
    this.authService.updateImage(
      this.user,
    );
  }
  // getUserPersonalData(){
  //   const login = this.authService.getLogin();
  //   this.authService.getUser(login).then(data => {
  //     return data});

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
      this.form2 = new FormGroup({
        shipperName: new FormControl(data.user.firstName, {
          validators: [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(60),
          ],
        }),
        shipperPostalCode: new FormControl(data.user.postalCode, {
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
      });
  }

 
  onCreate() {
    if (this.form2.invalid) {
      return;
    }
    this.isLoading = true;

    const userId = this.authService.getUserId();
    const login = this.authService.getLogin();
    const form = this.form2.value;
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
  }
  open(filePath) {
    window.open(filePath, '_blank');
  }
  file:any;
  // fileChanged(e) {
  //   let reader = new FileReader();
  //   this.file = e.target.files[0];
  //   reader.
  //   reader.readAsDataURL(e.target.files[0]);
  //   let value = <String>reader.result;
  //   console.log(value)

  //   console.log(this.file)
  // }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
