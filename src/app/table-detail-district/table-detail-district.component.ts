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
import { DetailService } from 'src/services/detail.service';
import { District } from 'src/Interface/District';
import * as moment from 'moment';

@Component({
  selector: 'app-table-detail-district',
  templateUrl: './table-detail-district.component.html',
  styleUrls: ['./table-detail-district.component.scss'],
  providers: [EditComponent],
})
export class TableDetailDistrictComponent implements AfterViewInit, OnInit {
  inputData!: string;
  district: Array<District> = [];
  dataSource: any;
  @Input() formShowRoom!: boolean;
  @Output() changePageEvent = new EventEmitter<boolean>();
  dataChangePage!: boolean;

  constructor(
    private matDialog: MatDialog,
    private detailService: DetailService
  ) {}

  ngOnInit(): void {
    this.detailService.getDistrict().subscribe((response: District[]) => {
      this.district = response;

      this.district.map((array, index) => {
        array.no = index + 1;
        array.dateIn = moment(array.dateIn).format('YYYY-MM-DD HH:mm');
        array.checkOut = moment(array.checkOut).format('YYYY-MM-DD HH:mm');
      });

      this.dataSource = new MatTableDataSource<District>(this.district);
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
    this.matDialog.open(EditComponent);
  }

  delete(id: number) {
    this.matDialog.open(DeleteComponent);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {}

  //input amount parameter

  createHeaders(keys: string[]) {
    return keys;
  }

  displayedColumns: string[] = [
    'no',
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

  //y = horizontal
  //x = vertical

  dowloadPDF() {
    var headers = this.createHeaders([
      'ลำดับ No.',
      'วันเวลาที่เข้ามาพัก Date and Time of Arrival',
      'ห้องพักเลขที่ Room No.',
      '            ชื่อตัวและชื่อสกุล              Guest Name',
      'สัญชาติ Nationality',
      'เลขประจำตัวประชาชนหรือ เลขที่ใบสำคัญประจำตัว คนต่างด้าว หรือเลขที่ หนังสือเดินทาง Identification Card No. or Alien Registration Book No. or Passport No. ',
      '         ที่อยู่ปัจจุบัน          Current Address',
      '   อาชีพ     Occupation',
      '   มาจากตำบล   อำเภอ จังหวัด หรือประเทศใด Place of Departure',
      'จะไปที่ ตำบล อำเภอ จังหวัด หรือประเทศใด Next Destination',
      '  วันที่    ออกไป Exprected Departure',
      'หมายเหตุ Remarks',
    ]);
    var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: 'landscape' });
    doc.addFileToVFS('THSarabun-normal.ttf', font);
    doc.addFont('/assets/fonts/THSarabun-normal.ttf', 'THSarabun', 'normal');
    doc.setFont('THSarabun', 'normal');

    doc.setFontSize(13);
    doc.text('ร.ร.๔', 265, 10);

    const info: any[] = [];

    this.district.forEach((element, index, array) => {
      info.push([
        index + 1,
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

    doc.setFontSize(20);
    doc.setTextColor(40);

    // doc.text('ทะเบียนผู้พักในโรงแรม ผ่องพรรณรีสอร์ท', 112, 10);
    // doc.text(
    //   '301 หมู่ 3 ตำบลดงมะดะ อำเภอแม่ลาว จังหวัดเชียงราย 57250',
    //   100,
    //   17
    // );
    // doc.text(
    //   '301 Moo 3 Tombon Dong Mada, Mae Lao Distric, Chiang Rai Province 57250, Thailand',
    //   80,
    //   24
    // );
    // doc.text('Tel. 086 192 6139', 130, 31);

    doc.text('ทะเบียนผู้พักในโรงแรม ผ่องพรรณ รีสอร์ท', 110, 17);
    doc.text(
      'ประจำเดือน.................................................พ.ศ. ............................',
      93,
      33
    );

    var str1 = 'ขอรับรองว่าเป็นความจริงทุกประการ';
    var str2 =
      '(ลงชื่อ)............................................................ผู้จัดการ';

    doc.setFontSize(14);
    doc.text(str1, 230, 185);
    doc.text(str2, 222, 195);

    let finalY = (doc as any).lastAutoTable.finalY + 10;
    autoTable(doc, {
      head: [headers],
      showHead: 'everyPage',
      body: info,
      bodyStyles: { halign: 'center' },
      margin: { left: 22, top: 45, bottom: 25 },
      columnStyles: {
        0: { cellWidth: 10 },
        1: { cellWidth: 25 },
        2: { cellWidth: 15 },
        3: { cellWidth: 40 },
        4: { cellWidth: 15 },
        5: { cellWidth: 30 },
        6: { cellWidth: 35 },
        7: { cellWidth: 16 },
        8: { cellWidth: 22 },
        9: { cellWidth: 22 },
        10: { cellWidth: 15 },
        11: { cellWidth: 15 },
      },
      didParseCell: function (data) {
        data.cell.styles.fillColor = '#ffffff';
        //setting header align top
        if (data.section === 'head') {
          data.cell.styles.valign = 'top';
          data.cell.styles.fontSize = 10;
        }
      },
      didDrawPage: function (data) {
        if (data.pageNumber > 1) {
          var text = 'ใบต่อ';
          doc.text(text, 14, 20);

          var str1 = 'ขอรับรองว่าเป็นความจริงทุกประการ';
          var str2 =
            '(ลงชื่อ)..........................................................ผู้จัดการ';

          doc.setFontSize(14);
          doc.text(str1, 222, 190);
          doc.text(str2, 222, 195);
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

    doc.save('hotel_pongphan_district.pdf');
  }
}
