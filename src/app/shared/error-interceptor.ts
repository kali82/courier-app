import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ToastService } from './toast.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.refresh();
        }
        console.log(error);
        const message = error.error.message;
        message ? message : 'Wystąpił nieznany błąd.';
        this.toastService.showToast(message);

        return throwError(error);
      })
    );
  }
}
