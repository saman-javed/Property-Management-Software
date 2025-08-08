import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveInstallment } from './receive-installment';

describe('ReceiveInstallment', () => {
  let component: ReceiveInstallment;
  let fixture: ComponentFixture<ReceiveInstallment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveInstallment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveInstallment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
