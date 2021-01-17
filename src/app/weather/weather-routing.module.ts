import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherDetailsComponent
  },
  {
    path: '**',
    component: WeatherDetailsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WeatherRoutingModule { }
