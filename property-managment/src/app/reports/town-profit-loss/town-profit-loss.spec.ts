import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownProfitLoss } from './town-profit-loss';

describe('TownProfitLoss', () => {
  let component: TownProfitLoss;
  let fixture: ComponentFixture<TownProfitLoss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TownProfitLoss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TownProfitLoss);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
