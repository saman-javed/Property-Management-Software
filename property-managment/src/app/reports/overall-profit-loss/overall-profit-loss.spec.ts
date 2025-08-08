import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallProfitLoss } from './overall-profit-loss';

describe('OverallProfitLoss', () => {
  let component: OverallProfitLoss;
  let fixture: ComponentFixture<OverallProfitLoss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallProfitLoss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallProfitLoss);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
