import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealersHome } from './dealers-home';

describe('DealersHome', () => {
  let component: DealersHome;
  let fixture: ComponentFixture<DealersHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealersHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealersHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
