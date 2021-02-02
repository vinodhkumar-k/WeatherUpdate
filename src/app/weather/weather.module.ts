import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherDetailsService } from './services/weather-details.service';


@NgModule({
  declarations: [WeatherDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    WeatherRoutingModule
  ],
  providers: [WeatherDetailsService]
})

export class WeatherModule { }
