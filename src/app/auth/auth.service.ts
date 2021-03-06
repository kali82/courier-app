import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { AuthData } from './auth-data.model';
import { ToastService } from '../shared/toast.service';
import { environment } from '../../environments/environment';
import { User } from '../settings/model/user';

const BACKEND_URL = environment.apiURL + 'user/';
const ADMIN_ID = environment.adminId;
const baseUrl = environment.serverUrl;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private isAdmin = false;
  private accessToken: string;
  private accessTokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  private baseUrl = environment.apiURL + 'user';

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastService: ToastService
  ) {}

  getToken() {
    return this.accessToken;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getIsAdmin() {
    return this.isAdmin;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(login: string, password: string) {
    const authData: AuthData = { login: login, password: password };
    this.http
      .post<{ message: string }>(BACKEND_URL + 'create', authData)
      .subscribe(
        response => {
          this.toastService.showToast(response.message);
          this.router.navigate(['/']);
        },
        () => {
          this.authStatusListener.next(false);
          location.reload();
        }
      );
  }
  
  removeUser(login: string) {
    const authData: AuthData = { login: login, password: '' };
    console.log(login)
    return this.http
      .patch<{ message: string }>(BACKEND_URL + 'delete', {login})
      .toPromise()
      .then(
        response => {
          location.reload();
          this.toastService.showToast(response.message);

          return response;
        },
        error => {
          console.log("delete user error ")
          return error;
        }
      );
  }
  
  upload(file: File): Observable<HttpEvent<any>> {
    let login = this.getLogin();
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('login', login);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    let avatars = this.http.get(`${this.baseUrl}/files`);
    console.log(avatars)
    return avatars;

  }
  getAvatar(): Observable<any> {
    let login = this.getLogin()
    return this.http.get(`${this.baseUrl}/files/${login}.png`);
  }

  updateUser(
    login: string, 
    shipperName: string, 
    street: string,
    house: string,
    apartment: string,
    city: string, 
    contactPerson: string,
    phone: string,
    email: string,
    postalCode: string){
    this.http
      .post<{ message: string }>(BACKEND_URL + 'update', {login, shipperName,street,house,apartment,city,contactPerson,phone,email,postalCode})
      .subscribe(
        response => {
          console.log(response);
          this.toastService.showToast(response.message);
          // this.router.navigate(['/']);
          // this.router.navigate(['/settings']);
          this.refresh()
        },
        () => {
           this.authStatusListener.next(false);
           location.reload();
        }
      );
  }
  getUser(login:string) {
    return this.http
      .post<{
        message: string;
        login: string, 
        shipperName: string, 
        street: string,
        house: string,
        apartment: string,
        city: string, 
        contactPerson: string,
        phone: string,
        email: string,
        postalCode: string
      }>(BACKEND_URL + 'getUser', {login: login})
      .toPromise()
      .then(
        response => {
          console.log("USER AUTH RESPONSE")
          console.log(response)
          return response;
        },
        error => {         
           console.log("USER ERROR AUTH RESPONSE")
           console.log(error)
          //this.router.navigate(['/consignments']);

          return error;
        }
      );
  }
  getUsersList() {
    return this.http
      .get<{
        message: string;
        data: [User], 
      }>(BACKEND_URL + 'listUsers')
      .toPromise()
      .then(
        response => {
          console.log("USER AUTH RESPONSE")
          console.log(response)
          return response;
        },
        error => {         
           console.log("USER ERROR AUTH RESPONSE")
           console.log(error)
          //this.router.navigate(['/consignments']);

          return error;
        }
      );
  }

  login(login: string, password: string) {
    const authData: AuthData = { login: login, password: password };
    this.http
      .post<{
        message: string;
        userId: string;
        accessToken: string;
        expiresIn: number;
        login: string;
        refreshToken: string;
      }>(BACKEND_URL + 'login', authData)
      .subscribe(
        response => {
          const accessToken = response.accessToken;
          this.accessToken = accessToken;
          if (accessToken) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;

            const userId = response.userId;
            this.isAdmin = this.checkIfAdmin(userId);

            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            const login = response.login;
            const refreshToken = response.refreshToken;
            this.saveAuthData(
              userId,
              accessToken,
              expirationDate,
              login,
              refreshToken
            );
            this.authStatusListener.next(true);
            this.toastService.showToast(response.message);
            this.router.navigate(['/']);
          } else {
            this.toastService.showToast('Co?? posz??o nie tak!');
          }
        },
        () => {
          this.authStatusListener.next(false);
        }
      );
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.accessToken = authInformation.accessToken;
      this.isAuthenticated = true;
      const userId = authInformation.userId;
      this.isAdmin = this.checkIfAdmin(userId);
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.accessToken = null;
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.authStatusListener.next(false);
    clearTimeout(this.accessTokenTimer);
    this.clearAuthData();
    this.toastService.showToast('U??ytkownik zosta?? wylogowany.');
    this.router.navigate(['/auth/login']);
  }

  private setAuthTimer(duration: number) {
    this.accessTokenTimer = setTimeout(() => {
      this.refresh();
    }, duration * 1000);
  }

  refresh() {
    const authData = this.getAuthData();
    const refreshData = {
      userId: authData.userId,
      refreshToken: authData.refreshToken,
    };
    this.http
      .post<{
        message: string;
        userId: string;
        accessToken: string;
        expiresIn: number;
      }>(BACKEND_URL + 'accessToken', refreshData)
      .subscribe(
        response => {
          const accessToken = response.accessToken;
          this.accessToken = accessToken;
          if (accessToken) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;

            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            this.saveRefreshData(accessToken, expirationDate);
            this.authStatusListener.next(true);
            //this.toastService.showToast(response.message);
          } else {
            this.toastService.showToast(
              'Przed??u??enie sesji u??ytkownika nieudane.'
            );
            this.logout();
          }
        },
        () => {
          this.logout();
        }
      );
  }

  private saveRefreshData(accessToken: string, expirationDate: Date) {
    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('expiration', expirationDate.toISOString());
  }

  private saveAuthData(
    userId: string,
    accessToken: string,
    expirationDate: Date,
    login: string,
    refreshToken: string
  ) {
    sessionStorage.setItem('userId', userId);
    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('expiration', expirationDate.toISOString());
    sessionStorage.setItem('login', login);
    sessionStorage.setItem('refreshToken', refreshToken);
  }

  private clearAuthData() {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('expiration');
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('refreshToken');
  }

  private getAuthData() {
    const userId = sessionStorage.getItem('userId');
    const accessToken = sessionStorage.getItem('accessToken');
    const expirationDate = sessionStorage.getItem('expiration');
    const login = sessionStorage.getItem('login');
    const refreshToken = sessionStorage.getItem('refreshToken');
    if (!userId || !accessToken || !expirationDate || !login || !refreshToken) {
      return;
    }
    return {
      userId: userId,
      accessToken: accessToken,
      expirationDate: new Date(expirationDate),
      login: login,
      refreshToken: refreshToken,
    };
  }

  getUserId() {
    return sessionStorage.getItem('userId');
  }

  getLogin() {
    return sessionStorage.getItem('login');
  }

  checkIfAdmin(userId: String) {
    // zapytanie do backendu o to czy jest adminem
    return userId === ADMIN_ID ? true : false;
  }
}
