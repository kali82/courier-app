import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  showToast(message: string, action?: string, duration?: number) {
    if (!duration) {
      duration = 5000;
    }

    let snackBarRef = this.snackBar.open(message, action, {
      duration: duration,
    });

    snackBarRef.onAction().subscribe(() => {
      // wciśnięcie przycisku tosta
    });

    snackBarRef.afterDismissed().subscribe(() => {
      // po zamknięciu tosta
    });
  }
}
