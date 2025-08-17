import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerLedger } from './dealer-ledger';

describe('DealerLedger', () => {
  let component: DealerLedger;
  let fixture: ComponentFixture<DealerLedger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealerLedger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerLedger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
