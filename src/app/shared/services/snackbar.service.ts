import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()

export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  success(message: string) {
    this.showSnackbar(message, 'success-snackbar');
  }

  error(message: string) {
    this.showSnackbar(message, 'error-snackbar');
  }

  warn(message: string) {
    this.showSnackbar(message, 'warn-snackbar');
  }

  showSnackbar(message, cssClass) {
    this.snackBar.open(message, '', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: [ cssClass ]
    });
  }

}
