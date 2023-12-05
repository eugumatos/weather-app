import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '2380aae5cb33e837924a0447f12cbd5b';

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    );
  }
}
