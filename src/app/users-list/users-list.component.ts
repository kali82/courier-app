import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ToastService } from '../shared/toast.service';
import { User } from '../settings/model/user';
import { environment } from 'src/environments/environment';

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
  public density = 'comfortable';
  imgUrl = environment.apiURL+"user/files/"
  constructor(
    public route: ActivatedRoute,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
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
  }



}

