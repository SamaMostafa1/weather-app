import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { cityWeather } from '../../interfaces/city-weather';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { forecast } from '../../interfaces/forecast';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-city-card',
  imports: [CommonModule, MatCardModule, ToggleButtonComponent, RouterModule],
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css'],
})
export class CityCardComponent {
  protected Data: forecast;
  protected tempretureData: string;
  @Input() cityData: cityWeather;
  @Input() forecastData: forecast;

  protected currentRoute: string ;

  constructor(
    private weatherServiceDi: WeatherService,
    private router: Router
  ) {
    this.cityData = { id: 0, city: '', forecast: [] };
    this.currentRoute='';
    this.forecastData = {
      date: '',
      temperatureCelsius: 0,
      temperatureFahrenheit: 0,
      humidity: 0,
    };
    this.Data = {
      date: '',
      temperatureCelsius: 0,
      temperatureFahrenheit: 0,
      humidity: 0,
    };
    this.tempretureData = '';
  }
  ngOnInit() {
    this.currentRoute = this.router.url;
    if (this.currentRoute === '/forecast') {
      if (this.cityData.forecast && this.cityData.forecast.length > 0) {
        this.Data = this.weatherServiceDi.getNewestData(this.cityData.forecast);
      }
    } else {
      this.Data = this.forecastData;
    }
  }
  recievedTemp(recData: string) {
    this.tempretureData = recData;
  }
}
