import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class WeatherDetailsService {

  constructor(private http: HttpClient) { }

  getCity(cityName: string): Observable<any> {
    return this.http.get('../../../assets/data/citylist.json');
    // .subscribe((res: any) =>
    // res.filter(city => city.name.toLowerCase() === cityName.toLowerCase()));
  }
}
