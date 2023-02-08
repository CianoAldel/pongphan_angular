import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  dataChangePage!: boolean;
  @Output() changePageEvent = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  changePage(event: boolean) {
    this.dataChangePage = event;
    if (!this.dataChangePage) {
      this.dataChangePage = true;

      return this.changePageEvent.emit(this.dataChangePage);
    }
  }

  cardValue: any = {
    options: [],
  };

  selectOptions: Array<string> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
  ];

  selectChange = (event: any) => {
    const key: string = event.key;
    this.cardValue[key] = [...event.data];

    console.log(this.cardValue);
  };
}
