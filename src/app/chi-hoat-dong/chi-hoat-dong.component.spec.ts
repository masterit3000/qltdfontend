import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiHoatDongComponent } from './chi-hoat-dong.component';

describe('ChiHoatDongComponent', () => {
  let component: ChiHoatDongComponent;
  let fixture: ComponentFixture<ChiHoatDongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiHoatDongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiHoatDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
