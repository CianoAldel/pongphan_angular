import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataProvinceComponent } from './show-data-province.component';

describe('ShowDataProvinceComponent', () => {
  let component: ShowDataProvinceComponent;
  let fixture: ComponentFixture<ShowDataProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDataProvinceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDataProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
