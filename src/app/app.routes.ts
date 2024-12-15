import { Routes } from '@angular/router';
import { AllCitiesForecastComponent } from './all-cities-forecast/all-cities-forecast.component';
import { CityDashboardComponent } from './city-dashboard/city-dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/forecast', pathMatch: 'full' },
    { path: 'forecast', component:AllCitiesForecastComponent },  
    { path: 'cityForecast/:id', component: CityDashboardComponent},    
  ];