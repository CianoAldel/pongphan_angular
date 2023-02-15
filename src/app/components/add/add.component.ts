import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/services/detail.service';
import { formatDate } from '@angular/common';
import { FormBuilder } from '@angular/forms';

import * as moment from 'moment';
import { Detail } from '../../Interface/Detail';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  dataChangePage!: boolean;
  @Output() changePageEvent = new EventEmitter<boolean>();
  @Input() modalId: number;

  dateIn: Date;
  charge: number;
  firstname: string;
  lastname: string;
  nationality: string;
  idCard: string;
  address: string;
  occupation: string;
  comefrom: string;
  goto: string;
  checkout: Date;
  note: string;
  quantityStay: number;
  priceroom: string;
  sumprice: number;
  roomNo: string;

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService
  ) {}

  ngOnInit(): void {}

  changePage(event: boolean) {
    this.dataChangePage = event;
    if (!this.dataChangePage) {
      this.dataChangePage = true;
      return this.changePageEvent.emit(this.dataChangePage);
    }
  }

  receiveDateInEvent(event: Date) {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    event.setHours(hour);
    event.setMinutes(minute);
    this.dateIn = new Date(moment(event).format('YYYY-MM-DD HH:mm'));
  }

  receiveCheckOutEvent(event: Date) {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    event.setHours(hour);
    event.setMinutes(minute);
    this.checkout = new Date(moment(event).format('YYYY-MM-DD HH:mm'));

    console.log('dateCheckOut', this.checkout);
  }

  onSubmit() {
    var detail: Detail = {
      DateIn: this.dateIn,
      Charge: this.charge,
      Firstname: this.firstname,
      Lastname: this.lastname,
      Nationality: this.nationality,
      IdCard: this.idCard,
      Address: this.address,
      Occupation: this.occupation,
      Comefrom: this.comefrom,
      Goto: this.goto,
      Checkout: this.checkout,
      Note: this.note,
      QuantityStay: this.quantityStay,
      PriceRoom: this.priceroom,
      SumPrice: this.sumprice,
      Fee: this.charge,
      RoomNo: this.roomNo,
    };

    console.log('detail form', detail);

    this.detailService.saveDetail(detail);
  }

  receiveValue(event: number) {
    this.charge = event / 100;
  }

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

    this.roomNo = [...event.data].toString();
  };
}
