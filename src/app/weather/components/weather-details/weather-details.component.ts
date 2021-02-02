import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { WeatherDetailsService } from '../../services/weather-details.service';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherDetailsComponent implements OnInit {

  name = new FormControl('');

  constructor(private weatherDetailsService: WeatherDetailsService) { }

  getCityWeather() {
    // console.log(this.name.value);
    this.weatherDetailsService.getCity(this.name.value).subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

}
