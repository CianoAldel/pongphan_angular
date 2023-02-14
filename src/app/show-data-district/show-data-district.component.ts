import { Component } from '@angular/core';

@Component({
  selector: 'app-show-data-district',
  templateUrl: './show-data-district.component.html',
  styleUrls: ['./show-data-district.component.scss'],
})
export class ShowDataDistrictComponent {
  switchComponent: boolean = true;

  receiveChangeEvent(event: boolean) {
    this.switchComponent = event;
  }
}
