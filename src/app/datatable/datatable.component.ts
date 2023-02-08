import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditComponent } from '../stay/edit/edit.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../stay/delete/delete.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  providers: [EditComponent],
})
export class DatatableComponent implements AfterViewInit, OnInit {
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
}

export interface PeriodicElement {
  no: number;
  idnumber: number;
  name: string;
  tel: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, name: 'Hydrogen', idnumber: 1.0079, tel: 'H' },
  { no: 2, name: 'Helium', idnumber: 4.0026, tel: 'He' },
  { no: 3, name: 'Lithium', idnumber: 6.941, tel: 'Li' },
  { no: 4, name: 'Beryllium', idnumber: 9.0122, tel: 'Be' },
  { no: 5, name: 'Boron', idnumber: 10.811, tel: 'B' },
  { no: 6, name: 'Carbon', idnumber: 12.0107, tel: 'C' },
  { no: 7, name: 'Nitrogen', idnumber: 14.0067, tel: 'N' },
  { no: 8, name: 'Oxygen', idnumber: 15.9994, tel: 'O' },
  { no: 9, name: 'Fluorine', idnumber: 18.9984, tel: 'F' },
  { no: 10, name: 'Neon', idnumber: 20.1797, tel: 'Ne' },
  { no: 11, name: 'Sodium', idnumber: 22.9897, tel: 'Na' },
  { no: 12, name: 'Magnesium', idnumber: 24.305, tel: 'Mg' },
  { no: 13, name: 'Aluminum', idnumber: 26.9815, tel: 'Al' },
  { no: 14, name: 'Silicon', idnumber: 28.0855, tel: 'Si' },
  { no: 15, name: 'Phosphorus', idnumber: 30.9738, tel: 'P' },
  { no: 16, name: 'Sulfur', idnumber: 32.065, tel: 'S' },
  { no: 17, name: 'Chlorine', idnumber: 35.453, tel: 'Cl' },
  { no: 18, name: 'Argon', idnumber: 39.948, tel: 'Ar' },
  { no: 19, name: 'Potassium', idnumber: 39.0983, tel: 'K' },
  { no: 20, name: 'Calcium', idnumber: 40.078, tel: 'Ca' },
];
