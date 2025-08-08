import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownsHome } from './towns-home';

describe('TownsHome', () => {
  let component: TownsHome;
  let fixture: ComponentFixture<TownsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TownsHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TownsHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
