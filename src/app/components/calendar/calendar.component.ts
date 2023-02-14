import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  dateStay!: string;
  @Output() dateEvent = new EventEmitter<any>();
  @Output() checkOutDateEvent = new EventEmitter<any>();

  changeDate(event: any) {
    return this.dateEvent.emit(event);
  }

  checkOutDateChange(event: any) {
    return this.checkOutDateEvent.emit(event);
  }
}
