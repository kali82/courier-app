import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ToastService } from '../shared/toast.service';
import { User } from '../settings/model/user';
import { environment } from 'src/environments/environment';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public searchContact: string;
  public users: Array<User>;
  selectedUser?: User;
  isLoading = true;
  private authStatusSub: Subscription;
  imgUrl = environment.apiURL+"user/files/"
  dimgUrl = environment.apiURL+"user/files/defaultUser.png"
  result: string = '';
  constructor(
    public route: ActivatedRoute,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.authService.getUsersList().then(data => {
      this.toastService.showToast(data.message)
      console.log(data.data)
      this.users = data.data;
    });
    this.authStatusSub = this.authService
    .getAuthStatusListener()
    .subscribe(() => {
      this.isLoading = false;
    });
  }
  onSelect(user: User): void {
    this.selectedUser = user;
    console.log(user)
  }
  onImgError(event){
    event.target.src = this.dimgUrl
   //Do other stuff with the event.target
  }
  deleteUser(user: User): void{
     console.log(user.login)
     this.authService.removeUser(user.login).then(data => {
      this.toastService.showToast(data.message)
      this.authService.getUsersList().then(data => {
        this.toastService.showToast(data.message)
        this.users = data.data;
      });
     })
  }
   confirmDialog(user: User): void {
    const message = 'Jestes pewien?';
    const title = 'Usuwasz '+ user.login
    const login =  user.login
    const dialogData = new ConfirmDialogModel(title, message, login);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "800px",
      minWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
    });
  }


}

