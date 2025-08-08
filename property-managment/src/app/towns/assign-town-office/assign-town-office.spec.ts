import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTownOffice } from './assign-town-office';

describe('AssignTownOffice', () => {
  let component: AssignTownOffice;
  let fixture: ComponentFixture<AssignTownOffice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignTownOffice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignTownOffice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
