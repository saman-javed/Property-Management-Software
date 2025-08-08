import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCommission } from './pay-commission';

describe('PayCommission', () => {
  let component: PayCommission;
  let fixture: ComponentFixture<PayCommission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayCommission]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayCommission);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
