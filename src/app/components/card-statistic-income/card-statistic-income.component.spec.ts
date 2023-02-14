import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatisticIncomeComponent } from './card-statistic-income.component';

describe('CardStatisticIncomeComponent', () => {
  let component: CardStatisticIncomeComponent;
  let fixture: ComponentFixture<CardStatisticIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStatisticIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStatisticIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
