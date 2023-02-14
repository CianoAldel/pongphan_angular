import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetailDistrictComponent } from './table-detail-district.component';

describe('DatatableComponent', () => {
  let component: TableDetailDistrictComponent;
  let fixture: ComponentFixture<TableDetailDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDetailDistrictComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableDetailDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
