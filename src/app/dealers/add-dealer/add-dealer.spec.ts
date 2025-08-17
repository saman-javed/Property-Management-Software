import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDealer } from './add-dealer';

describe('AddDealer', () => {
  let component: AddDealer;
  let fixture: ComponentFixture<AddDealer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDealer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDealer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
