import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataDistrictComponent } from './show-data-district.component';

describe('ShowDataDistrictComponent', () => {
  let component: ShowDataDistrictComponent;
  let fixture: ComponentFixture<ShowDataDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDataDistrictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDataDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
