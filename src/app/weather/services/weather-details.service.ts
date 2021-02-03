import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class WeatherDetailsService {

  API_KEY = '495bc3c3676daf23d8e3b7c37bf380c5';
  // weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=495bc3c3676daf23d8e3b7c37bf380c5';
  weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeatherByCity(cityName: string): Observable<any> {
    const params = new HttpParams().set('q', cityName).set('APPID', this.API_KEY);
    return this.http.get(this.weatherUrl, {params});
  }
}
