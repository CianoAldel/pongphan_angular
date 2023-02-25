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
import { DetailService } from '../../services/detail.service';
import * as moment from 'moment';
import { Province } from 'src/Interface/Province';

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
  newDate: string;

  constructor(
    private matDialog: MatDialog,
    private detailService: DetailService
  ) {}

  ngOnInit(): void {
    this.detailService.getProvince().subscribe((response: Province[]) => {
      this.province = response;

      this.province.map((array, index) => {
        array.no = index + 1;
        array.dateIn = moment(array.dateIn).format('YYYY-MM-DD HH:mm');
      });

      this.dataSource = new MatTableDataSource<Province>(this.province);
      this.dataSource.paginator = this.paginator;
    });
  }

  findDataTable(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

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
    'no',
    'firstname',
    'lastname',
    'dateIn',
    'quantityStay',
    'priceRoom',
    'sumPrice',
    'fee',
    'note',
    'action',
  ];

  // dataSource = new MatTableDataSource<District>([...this.province]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {}

  //input amount parameter

  createHeaders(keys: string[]) {
    return keys;
  }

  dowloadPDF() {
    var headers = this.createHeaders([
      '  ๑   ที่',
      '                          ๒                                                ชื่อ-สกุล                                                           ',
      '        ๓        วันเวลาที่ เข้ามาพัก',
      '        ๔        รวมจำนวน วันที่เข้าพัก',
      '        ๕        ห้องพักราคา บาท',
      '        ๖        รวมเป็นเงิน ค่าเช่าห้องพัก บาท',
      '        ๗        รวมเป็นเงิน ค่าธรรมเนียม',
      '                                       หมายเหตุ                                  ',
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

    doc.setFontSize(15);
    doc.text('แบบ อบจ.รร.๖', 255, 26);

    const info: any[] = [];

    this.province.forEach((element, index, array) => {
      info.push([
        index + 1,
        `${element.firstname} ${element.lastname}`,
        element.dateIn,
        element.quantityStay,
        element.priceRoom,
        element.sumPrice,
        element.fee,
      ]);
    });

    doc.setFontSize(16);
    doc.text(
      'บัญชีผู้พักและรายละเอียดในการเรียกค่าธรรมเนียมบำรุงองค์การบริหารส่วนจังหวัด',
      90,
      36
    );
    doc.text(
      'วันที่......................เดือน............................................พ.ศ.......................................',
      160,
      43
    );
    doc.text(
      'เจ้าของ/เจ้าสำนักโรงแรม.............................................................................ได้จัดทำรายการของผู้พักในโรงแรมประจำเดือน.............................................พ.ศ.........................',
      30,
      50
    );
    doc.text('ยื่นต่อองค์การบริหารส่วนจังหวัด ดังมีข้อความต่อไปนี้', 30, 57);

    var str1 =
      'ลงชื่อ ......................................................ผู้แจ้ง/ตรวจ';
    var str2 = '(..........................................................)';

    doc.text(str1, 216, 190);
    doc.text(str2, 222, 195);
    doc.setTextColor(40);

    let pageWidth = doc.internal.pageSize.width;
    let wantedTableWidth = 240;
    let margin = (pageWidth - wantedTableWidth) / 2;

    autoTable(doc, {
      head: [headers],
      showHead: 'everyPage',
      body: info,
      bodyStyles: { halign: 'center' },
      columnStyles: {
        0: { cellWidth: 10 },
        1: { cellWidth: 60 },
        2: { cellWidth: 25 },
        3: { cellWidth: 25 },
        4: { cellWidth: 25 },
        5: { cellWidth: 30 },
        6: { cellWidth: 35 },
        7: { cellWidth: 35 },
        8: { cellWidth: 60 },
      },
      margin: { left: margin, right: margin, top: 60, bottom: 25 },
      didParseCell: function (data) {
        data.cell.styles.fillColor = '#ffffff';
      },
      didDrawPage: function (data) {
        if (data.pageNumber > 1) {
          var str = 'ขอรับรองว่าเป็นความจริงทุกประการ';
          var str1 = 'ลงชื่อ .......................................ผู้จัดการ';
          var str2 = '(                                              )';

          doc.setFontSize(16);
          doc.text(str, 240, 180);
          doc.text(str1, 240, 188);
          doc.text(str2, 240, 194);
        }
      },
      headStyles: {
        halign: 'center',
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

    doc.save('hotel_pongphan_province.pdf');
  }
}
