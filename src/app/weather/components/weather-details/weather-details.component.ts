import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { WeatherDetailsService } from '../../services/weather-details.service';
import { WeatherData } from '../../models/weather-data.model';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherDetailsComponent implements OnInit {

  name = new FormControl('');
  weatherData: WeatherData[] = [];
  minimizedCities = [];
  // maximizedCities = [];

  constructor(private weatherDetailsService: WeatherDetailsService) { }

  getCityWeather() {
    this.weatherDetailsService.getWeatherByCity(this.name.value).subscribe(res => {
      this.weatherData.push({
        name: res.name,
        country: res.sys.country,
        date: new Date(res.dt * 1000),
        temperature: res.main.temp,
        minTemperature: res.main.temp_min,
        maxTemperature: res.main.temp_max,
        weatherDiscription: res.weather.description,
        weatherIcon: res.weather.icon
      });
    });
  }

  onExpandCity(city, index): void {
    this.weatherData.splice(index, 0, city);
    this.minimizedCities.splice(index, 1);
  }

  onMinimizeCity(index): void {
    this.minimizedCities.splice(index, 0, this.weatherData[index]);
    this.weatherData.splice(index, 1);
  }

  onCloseCity(index): void {
    this.weatherData.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
