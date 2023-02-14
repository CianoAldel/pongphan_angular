import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { jsPDF } from 'jspdf';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditComponent } from '../components/edit/edit.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../components/delete/delete.component';
import autoTable from 'jspdf-autotable';
import { font } from './util';

@Component({
  selector: 'app-table-detail-province',
  templateUrl: './table-detail-province.component.html',
  styleUrls: ['./table-detail-province.component.scss'],
})
export class TableDetailProvinceComponent implements AfterViewInit, OnInit {
  inputData!: string;

  @Input() formShowRoom!: boolean;
  @Output() changePageEvent = new EventEmitter<boolean>();
  dataChangePage!: boolean;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  findDataTable(inputData: string) {}

  changePage(data: boolean) {
    this.dataChangePage = data;
    if (this.dataChangePage) {
      this.dataChangePage = false;
      return this.changePageEvent.emit(this.dataChangePage);
    }
  }

  edit() {
    this.matDialog.open(EditComponent);
  }

  delete() {
    this.matDialog.open(DeleteComponent);
  }

  displayedColumns: string[] = ['no', 'idnumber', 'name', 'tel', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //input amount parameter

  createHeaders(keys: string[]) {
    return keys;
  }

  //y = horizontal
  //x = vertical

  dowloadPDF() {
    var headers = this.createHeaders(['no', 'name', 'idnumber', 'tel']);
    var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: 'landscape' });
    doc.addFileToVFS('THSarabun-normal.ttf', font);
    doc.addFont('/assets/fonts/THSarabun-normal.ttf', 'THSarabun', 'normal');
    doc.setFont('THSarabun', 'normal');

    const info: any[] = [];

    ELEMENT_DATA.forEach((element, index, array) => {
      info.push([element.no, element.name, element.idnumber, element.tel]);
    });
    doc.text('ทะเบียนผู้พักในโรงแรม ผ่องพรรณรีสอร์ท', 115, 10);
    doc.text(
      '301 หมู่ 3 ตำบลดงมะดะ อำเภอแม่ลาว จังหวัดเชียงราย 57250',
      100,
      15
    );
    doc.text(
      '301 Moo 3 Tombon Dong Mada,Mae Lao Distric,Chiang Rai Province 57250, Thailand',
      80,
      20
    );
    doc.text('Tel. 086 192 6139', 130, 26);

    autoTable(doc, {
      head: [headers],
      body: info,
      margin: { top: 30 },
      headStyles: {
        fontStyle: 'bold',
        textColor: [0, 0, 0],
        fillColor: [204, 204, 204],
      },
      styles: {
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        fontSize: 18,
        font: 'THSarabun',
        fontStyle: 'normal',
        valign: 'middle',
      },
    });

    doc.save('hotel_pongphan_district.pdf');
  }
}

export interface PeriodicElement {
  no: string;
  idnumber: string;
  name: string;
  tel: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    no: '1',
    name: 'อินพัฒน์ วงค์อุประ',
    idnumber: '1460300204277',
    tel: '0812891346',
  },
  { no: '2', name: 'Helium', idnumber: '1460300204277', tel: 'He' },
  { no: '3', name: 'Lithium', idnumber: '6.941', tel: 'Li' },
  { no: '4', name: 'Beryllium', idnumber: '9.0122', tel: 'Be' },
  { no: '5', name: 'Boron', idnumber: '10.811', tel: 'B' },
  { no: '6', name: 'Carbon', idnumber: '12.0107', tel: 'C' },
  { no: '7', name: 'Nitrogen', idnumber: '14.0067', tel: 'N' },
  { no: '8', name: 'Oxygen', idnumber: '15.9994', tel: 'O' },
  { no: '9', name: 'Fluorine', idnumber: '18.9984', tel: 'F' },
  { no: '10', name: 'Neon', idnumber: '20.1797', tel: 'Ne' },
  { no: '11', name: 'Sodium', idnumber: '22.9897', tel: 'Na' },
  { no: '12', name: 'Magnesium', idnumber: '24.305', tel: 'Mg' },
  { no: '13', name: 'Aluminum', idnumber: '26.9815', tel: 'Al' },
  { no: '14', name: 'Silicon', idnumber: '28.0855', tel: 'Si' },
  { no: '15', name: 'Phosphorus', idnumber: '30.9738', tel: 'P' },
  { no: '16', name: 'Sulfur', idnumber: '32.065', tel: 'S' },
  { no: '17', name: 'Chlorine', idnumber: '35.453', tel: 'Cl' },
  { no: '18', name: 'Argon', idnumber: '39.948', tel: 'Ar' },
  { no: '19', name: 'Potassium', idnumber: '39.0983', tel: 'K' },
  { no: '20', name: 'Calcium', idnumber: '40.078', tel: 'Ca' },
];
