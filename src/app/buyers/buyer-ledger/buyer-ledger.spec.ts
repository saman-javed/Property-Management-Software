import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerLedger } from './buyer-ledger';

describe('BuyerLedger', () => {
  let component: BuyerLedger;
  let fixture: ComponentFixture<BuyerLedger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerLedger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerLedger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
