import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../shared/services/weather.service';
import { cityWeather } from '../shared/interfaces/city-weather';
import { Observable, of } from 'rxjs';
import { CityCardComponent } from '../shared/components/city-card/city-card.component';
import { DashboardSidebarComponent } from '../shared/components/dashboard-sidebar/dashboard-sidebar.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-city-dashboard',
  imports: [CommonModule, CityCardComponent, DashboardSidebarComponent],
  providers: [DatePipe],
  templateUrl: './city-dashboard.component.html',
  styleUrl: './city-dashboard.component.css',
})
export class CityDashboardComponent implements OnInit {
  private cityId: number;
  protected city$: Observable<cityWeather> = of();
  protected errorMessage: string;
  protected errorCheck:boolean;

  constructor(
    private route: ActivatedRoute,
    private cityService: WeatherService
  ) {
    this.errorMessage = '';
    this.cityId = 0;
    this.errorCheck=false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.cityId = +id;
        this.city$ = this.cityService.getCityWeather(this.cityId);
        this.errorCheck=false;
      } else {
        this.errorMessage = 'City ID not found';
        this.errorCheck=true;
      }
    });
  }
}
