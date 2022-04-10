import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../settings/model/user';
import { AuthService } from '../auth/auth.service';
import { ToastService } from '../shared/toast.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  title: string;
  message: string;
  login: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel,
    private authService: AuthService,
    private toastService: ToastService,
    ) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
    this.login = data.login;
    
  }

  ngOnInit() {
  }

  deleteUser(): void{
    this.authService.removeUser(this.login).then(data => {
     this.toastService.showToast(data.message)
    })
  }
  onConfirm(): void {
    // Close the dialog, return true
    this.deleteUser();
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class ConfirmDialogModel {

  constructor(public title: string, public message: string, public login: string) {
  }
}