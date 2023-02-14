import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatisticUserComponent } from './card-statistic-user.component';

describe('CardStatisticUserComponent', () => {
  let component: CardStatisticUserComponent;
  let fixture: ComponentFixture<CardStatisticUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStatisticUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStatisticUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
