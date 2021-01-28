import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherDetailsComponent implements OnInit {

  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
