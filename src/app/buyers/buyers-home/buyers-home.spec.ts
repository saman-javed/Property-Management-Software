import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersHome } from './buyers-home';

describe('BuyersHome', () => {
  let component: BuyersHome;
  let fixture: ComponentFixture<BuyersHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyersHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyersHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
