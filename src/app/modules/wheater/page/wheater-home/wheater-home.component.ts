import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';

import { WeatherData } from 'src/app/models/interfaces/Weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
})
export class WheaterHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();

  initialCity = 'São Paulo';
  weatherData!: WeatherData;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCity);
  }

  getWeatherData(city: string): void {
    this.weatherService
      .getWeatherData(city)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          response && (this.weatherData = response);

          console.log(this.weatherData);
        },
        error: (error) => console.log(error),
      });
  }

  onSubmit(): void {
    this.getWeatherData(this.initialCity);

    console.log('func called');

    this.initialCity = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
