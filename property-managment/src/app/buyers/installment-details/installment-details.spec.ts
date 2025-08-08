import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentDetails } from './installment-details';

describe('InstallmentDetails', () => {
  let component: InstallmentDetails;
  let fixture: ComponentFixture<InstallmentDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallmentDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallmentDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
