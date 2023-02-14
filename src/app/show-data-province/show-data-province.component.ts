import { Component } from '@angular/core';

@Component({
  selector: 'app-show-data-province',
  templateUrl: './show-data-province.component.html',
  styleUrls: ['./show-data-province.component.scss'],
})
export class ShowDataProvinceComponent {
  switchComponent: boolean = true;

  receiveChangeEvent(event: boolean) {
    this.switchComponent = event;
  }
}
