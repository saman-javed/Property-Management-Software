import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTown } from './add-town';

describe('AddTown', () => {
  let component: AddTown;
  let fixture: ComponentFixture<AddTown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
