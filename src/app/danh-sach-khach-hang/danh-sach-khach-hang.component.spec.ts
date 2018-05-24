import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachKhachHangComponent } from './danh-sach-khach-hang.component';

describe('DanhSachKhachHangComponent', () => {
  let component: DanhSachKhachHangComponent;
  let fixture: ComponentFixture<DanhSachKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
