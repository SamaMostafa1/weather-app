import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-toggle-button',
  imports: [FormsModule,MatButtonToggleModule],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css'
})
export class ToggleButtonComponent {
  protected selectedTemperatureUnit: string ;
  constructor(){
    this.selectedTemperatureUnit='';
  }
  @Output() temperatureChange: EventEmitter<string> = new EventEmitter<string>();
  onTemperatureChange(){
  this.temperatureChange.emit(this.selectedTemperatureUnit);
  }
}
