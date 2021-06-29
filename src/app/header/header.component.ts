import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  isAdmin = false;
  login: String;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.getIsAuth();
    this.isAdmin = this.authService.getIsAdmin();
    this.login = this.authService.getLogin();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
        this.isAdmin = this.authService.getIsAdmin();
        this.login = this.authService.getLogin();
      });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
