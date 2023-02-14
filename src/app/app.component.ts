import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AddComponent } from './components/add/add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'pongphan';
  active!: boolean;

  @ViewChild(AddComponent) childActive: any;

  constructor() {}

  ngOnInit(): void {
    // Promise.resolve().then(() => (this.active = this.childActive.childMessage));
  }

  ngAfterViewInit(): void {
    // Promise.resolve().then(() => (this.active = this.childActive.childMessage));
  }
}
