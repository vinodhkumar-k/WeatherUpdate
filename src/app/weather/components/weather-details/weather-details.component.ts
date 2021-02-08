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

  constructor(private weatherDetailsService: WeatherDetailsService) { }

  getCityWeather() {
    this.weatherDetailsService.getWeatherByCity(this.name.value).subscribe(res => {
      this.weatherData.push({
        name: res.name,
        country: res.sys.country,
        date: this.getLocalTime(res.timezone),
        temperature: Number((res.main.temp - 273.15).toFixed(1)),
        minTemperature: Number((res.main.temp_min - 273.15).toFixed(1)),
        maxTemperature: Number((res.main.temp_max - 273.15).toFixed(1)),
        weatherDiscription: res.weather[0].description,
        weatherIcon: res.weather[0].icon
      });
    });
  }

  getLocalTime(data) {
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000); // local offset
    const localTime = utc + 1000 * data;
    return new Date(localTime).toLocaleString();
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
