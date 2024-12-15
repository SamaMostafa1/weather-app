import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cityWeather } from '../interfaces/city-weather';
import { forecast } from '../interfaces/forecast';
@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  private url: string = 'http://localhost:4454/';
  constructor(private http: HttpClient) {}

  getAllCities(): Observable<Array<cityWeather>> {
    return this.http.get<Array<cityWeather>>(this.url+'forecast');
  }
  getNewestData(forecastData:forecast[]):forecast{
    const newestData = forecastData.reduce((latest, current) => {
      return new Date(current.date) > new Date(latest.date) ? current : latest;
    });
    return newestData;
  }
   getCityWeather(cityId:Number) {
    return this.http.get<cityWeather>(`${this.url}cityForecast/${cityId}`);
  }
  
}
