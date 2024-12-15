import { Component, EventEmitter, Output } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-date-picker',
  imports: [FormsModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatInputModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {
  protected selectedDate: Date|null;

  @Output() formattedDateChange = new EventEmitter<string>(); 
  constructor(private datePipe: DatePipe) {
    this.selectedDate=null;
  }
  onDateChange() {
    if (this.selectedDate) {
      const formattedDate = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
      if (formattedDate) {
        this.formattedDateChange.emit(formattedDate); 
      }
    }
  }
}
