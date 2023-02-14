import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetailProvinceComponent } from './table-detail-province.component';

describe('TableDetailProvinceComponent', () => {
  let component: TableDetailProvinceComponent;
  let fixture: ComponentFixture<TableDetailProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDetailProvinceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDetailProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
