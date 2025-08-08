import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyInstallments } from './monthly-installments';

describe('MonthlyInstallments', () => {
  let component: MonthlyInstallments;
  let fixture: ComponentFixture<MonthlyInstallments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyInstallments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyInstallments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
