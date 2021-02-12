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
      this.name.setValue('');
      this.weatherData.push({
        name: res.name,
        country: res.sys.country,
        date: this.getLocalTime(res.timezone),
        temperature: Number((res.main.temp - 273.15).toFixed(1)),
        minTemperature: Number((res.main.temp_min - 273.15).toFixed(1)),
        maxTemperature: Number((res.main.temp_max - 273.15).toFixed(1)),
        weatherDiscription: res.weather[0].description,
        weatherIcon: res.weather[0].icon,
        backgroundImage: this.getBackgroundImage(res.weather[0].main)
      });
    },
    err => console.log(err));
  }

  getBackgroundImage(data: string) {
    switch (data) {
      case 'Clear':
        return 'clear.jpg';
      case 'Clouds':
        return 'cloudy.jpg';
      case 'Rain':
      case 'Drizzle':
      case 'Mist':
        return 'rain.jpg';
      case 'Thunderstorm':
        return 'thunderstorm.jpg';
      case 'Snow':
        return 'snow.jpg';
      default:
        return;
    }
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

  changeTemperatureUnits(group, weather) {
    const temp = weather.temperature;
    weather.temperature = group.value === 'C' ? Math.round((temp - 32) * (5 / 9)) : Math.round((temp * 1.8) + 32);
  }

  ngOnInit(): void {
  }

}
