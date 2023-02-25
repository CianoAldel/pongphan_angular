import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { Detail } from 'src/Interface/Detail';
import { DetailService } from 'src/services/detail.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  showModal: boolean = true;
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
    private matDialogRef: MatDialogRef<EditComponent>,
    private detailService: DetailService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  ngOnInit(): void {
    console.log('id', this.data.id);
  }

  toggleModal() {
    this.showModal = true;
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

  closeToggleModal() {
    this.matDialogRef.close();
  }

  receiveValue(event: number) {
    this.charge = event / 100;
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

    this.detailService.saveDetail(detail);
    this.closeToggleModal();
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

    console.log(this.roomNo);
  };
}
