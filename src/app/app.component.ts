import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AddComponent } from './components/add/add.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'pongphan';
  active!: boolean;
  textNavChild: string;

  @ViewChild(AddComponent) childActive: any;

  constructor() {}

  ngOnInit(): void {
    // Promise.resolve().then(() => (this.active = this.childActive.childMessage));
  }

  ngAfterViewInit(): void {
    // Promise.resolve().then(() => (this.active = this.childActive.childMessage));
  }

  receiveChangePageEvent(event: string) {
    this.textNavChild = event;
  }
}
