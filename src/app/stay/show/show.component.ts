import { Component } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent {
  switchComponent: boolean = true;

  receiveChangeEvent(event: boolean) {
    console.log(event);

    this.switchComponent = event;
  }
}
