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
import { DetailService } from '../services/detail.service';
import { Province } from '../Interface/Province';

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
  dataSource: any;
  province: Array<Province> = [];

  constructor(
    private matDialog: MatDialog,
    private detailService: DetailService
  ) {}

  ngOnInit(): void {
    this.detailService.getProvince().subscribe((response: Province[]) => {
      this.province = response;

      this.dataSource = new MatTableDataSource<Province>(this.province);
      this.dataSource.paginator = this.paginator;
    });
  }

  findDataTable(inputData: string) {}

  changePage(data: boolean) {
    this.dataChangePage = data;
    if (this.dataChangePage) {
      this.dataChangePage = false;
      return this.changePageEvent.emit(this.dataChangePage);
    }
  }

  edit(id: number) {
    this.matDialog.open(EditComponent, {
      data: {
        id: id,
      },
    });
  }

  delete(id: number) {
    this.matDialog.open(DeleteComponent, {
      data: {
        id: id,
      },
    });
  }

  displayedColumns: string[] = [
    'dateIn',
    'roomNo',
    'firstname',
    'lastname',
    'nationality',
    'idCard',
    'address',
    'occupation',
    'comeFrom',
    'goTo',
    'checkOut',
    'note',
    'action',
  ];

  // dataSource = new MatTableDataSource<Province>([...this.province]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {}

  //input amount parameter

  createHeaders(keys: string[]) {
    return keys;
  }

  dowloadPDF() {
    var headers = this.createHeaders([
      'วันเวลาที่เข้ามาพัก',
      'ห้องพักเลขที่',
      'ชื่อ-นามสกุล',
      'ห้องพักเลขที่',
      'สัญชาติ',
      'เลขประจำตัวประชาชน หรือ ใบสำคัญประจำตัวคนต่างด้าว หรือหนังสือเดินทาง เลขที่... ออกให้โดย...',
      'ที่อยู่ปัจจุบันอยู่ที่ ตำบล อำเภอ จังหวัด หรือประเทศใด',
      'อาชีพ',
      'มาจากตำบล อำเภอ จังหวัดหรือประเทศใด',
      'จะไปที่ ตำบล อำเภอ จังหวัด หรือประเทศใด',
      'วันเวลาที่ออกไป',
      'หมายเหตุ',
    ]);
    var doc = new jsPDF({
      putOnlyUsedFonts: true,
      orientation: 'landscape',
      unit: 'mm',
      format: [297, 210],
    });

    doc.addFileToVFS('THSarabun-normal.ttf', font);
    doc.addFont('/assets/fonts/THSarabun-normal.ttf', 'THSarabun', 'normal');
    doc.setFont('THSarabun', 'normal');

    const info: any[] = [];

    this.province.forEach((element, index, array) => {
      info.push([
        element.dateIn,
        element.roomNo,
        `${element.firstname} ${element.lastname}`,
        element.nationality,
        element.idCard,
        element.address,
        element.occupation,
        element.comeFrom,
        element.goTo,
        element.checkOut,
        element.note,
      ]);
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
        fillColor: [255, 255, 255],
      },
      styles: {
        fillColor: [255, 255, 255],
        lineWidth: 0.1,
        lineColor: [0, 0, 0],
        fontSize: 14,
        font: 'THSarabun',
        fontStyle: 'normal',
        valign: 'middle',
      },
    });

    doc.save('hotel_pongphan_district.pdf');
  }
}
