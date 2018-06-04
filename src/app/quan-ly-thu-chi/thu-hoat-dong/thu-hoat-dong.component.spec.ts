import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuHoatDongComponent } from './thu-hoat-dong.component';

describe('ThuHoatDongComponent', () => {
  let component: ThuHoatDongComponent;
  let fixture: ComponentFixture<ThuHoatDongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuHoatDongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuHoatDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
