import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AirQualityIconComponent } from './components/air-quality-icon/air-quality-icon.component';
import { SnackbarService } from './services/snackbar.service';



@NgModule({
  declarations: [AirQualityIconComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [SnackbarService]
})
export class SharedModule { }
