import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  screenHeight: number;
  screenWidth: number;
  isAuthenticated = false;
  isAdmin = false;
  login: String;
  isMobile = false;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService) {
    this.onResize();
  }

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

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth < 600 ){
       this.isMobile = true;
    } else this.isMobile = false
    console.log(this.screenHeight, this.screenWidth, this.isMobile);
  }
  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
