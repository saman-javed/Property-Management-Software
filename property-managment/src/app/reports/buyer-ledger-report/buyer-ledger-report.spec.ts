import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerLedgerReport } from './buyer-ledger-report';

describe('BuyerLedgerReport', () => {
  let component: BuyerLedgerReport;
  let fixture: ComponentFixture<BuyerLedgerReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerLedgerReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerLedgerReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
