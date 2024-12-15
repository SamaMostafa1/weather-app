import { Component, Input } from '@angular/core';
import { cityWeather } from '../../interfaces/city-weather';
import { CommonModule } from '@angular/common';
import { forecast } from '../../interfaces/forecast';
import { WeatherService } from '../../services/weather.service';
import { DatePickerComponent } from "../date-picker/date-picker.component";


@Component({
  selector: 'app-dashboard-sidebar',
  imports: [CommonModule,DatePickerComponent],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.css'
})
export class DashboardSidebarComponent {
 @Input() data: cityWeather;
 protected errorMessage:string;
 protected latestData:forecast;
 protected selecteDate:string; 
protected errorCheck:boolean;
 constructor(private weatherServiceDi:WeatherService){
  this.errorCheck=false;
  this.errorMessage='';
  this.data={id: 0, city: '',forecast: [] };
  this.latestData={date:'',temperatureCelsius:0,temperatureFahrenheit:0,humidity:0};
  this.selecteDate='';
 }
 ngOnInit(){
  this.latestData= this.weatherServiceDi.getNewestData(this.data.forecast);
 }

 handleDateSelected(date: string) {
   this.selecteDate = date; 
   const forecastData = this.data.forecast.find((forecast) => forecast.date === this.selecteDate);
   if (forecastData) {
    this.latestData=forecastData;
    this.errorCheck=false;
  } else {
    this.errorCheck=true;
    this.errorMessage="no forecast data found";
    
  }
  }
}
