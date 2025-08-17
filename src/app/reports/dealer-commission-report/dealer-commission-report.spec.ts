import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerCommissionReport } from './dealer-commission-report';

describe('DealerCommissionReport', () => {
  let component: DealerCommissionReport;
  let fixture: ComponentFixture<DealerCommissionReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealerCommissionReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerCommissionReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
