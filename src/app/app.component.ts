import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AddComponent } from './stay/add/add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'pongphan';
  active!: boolean;

  @ViewChild(AddComponent) childActive: any;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.childActive);

    // Promise.resolve().then(() => (this.active = this.childActive.childMessage));
  }
}
