import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DongTienTheoNgayComponent } from './dong-tien-theo-ngay.component';

describe('DongTienTheoNgayComponent', () => {
  let component: DongTienTheoNgayComponent;
  let fixture: ComponentFixture<DongTienTheoNgayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DongTienTheoNgayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DongTienTheoNgayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
