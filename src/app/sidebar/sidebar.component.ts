import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  collapseShow = 'hidden';

  textNavBar: string;

  @Output() changePageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }

  pageChange(text: string) {
    return this.changePageEvent.emit(text);
  }
}
