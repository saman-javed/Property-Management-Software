import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesHome } from './offices-home';

describe('OfficesHome', () => {
  let component: OfficesHome;
  let fixture: ComponentFixture<OfficesHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficesHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficesHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
