import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';


@NgModule({
  declarations: [WeatherDetailsComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})

export class WeatherModule { }
