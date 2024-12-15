import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { cityWeather } from '../../interfaces/city-weather';
@Component({
  selector: 'app-nav-bar',
  imports: [FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  protected searchQuery: string = '';
  allCities!: Array<cityWeather>;

  constructor(
    private weatherServiceDi: WeatherService,
    private router: Router
  ) {}
  ngOnInit() {
    this.weatherServiceDi.getAllCities().subscribe((data) => {
      this.allCities = data;
    });
  }
  onSearch(): void {
    const filteredCities = this.allCities.filter((city) =>
      city.city.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    if (filteredCities.length > 0) {
      filteredCities.forEach((city) => {
        if (city && city.city) {
          this.router.navigate(['/cityForecast', city.id]);
        }
      });
    }
  }
}
