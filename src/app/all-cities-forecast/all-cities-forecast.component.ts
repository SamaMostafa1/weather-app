import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../shared/services/weather.service';
import { cityWeather } from '../shared/interfaces/city-weather';
import { Observable, of } from 'rxjs'; // rxjs is used to create observable to handle async http request
import { CityCardComponent } from '../shared/components/city-card/city-card.component';

@Component({
  selector: 'app-all-cities-forecast',
  imports: [CommonModule, CityCardComponent],
  templateUrl: './all-cities-forecast.component.html',
  styleUrl: './all-cities-forecast.component.css',
})
export class AllCitiesForecastComponent {
  protected cities$: Observable<Array<cityWeather>> = of([]);
  constructor(private weatherServiceDi: WeatherService) {}
  ngOnInit() {
    this.cities$ = this.weatherServiceDi.getAllCities();
  }
}
