import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownList } from './town-list';

describe('TownList', () => {
  let component: TownList;
  let fixture: ComponentFixture<TownList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TownList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TownList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
