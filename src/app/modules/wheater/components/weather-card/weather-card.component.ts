import { WeatherData } from 'src/app/models/interfaces/Weather';
import { Component, Input, OnInit } from '@angular/core';
import {
  faTemperatureLow,
  faTemperatureHigh,
  faDroplet,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent {
  @Input() weatherDataInput!: WeatherData;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
