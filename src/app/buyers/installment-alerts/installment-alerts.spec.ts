import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentAlerts } from './installment-alerts';

describe('InstallmentAlerts', () => {
  let component: InstallmentAlerts;
  let fixture: ComponentFixture<InstallmentAlerts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallmentAlerts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallmentAlerts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
