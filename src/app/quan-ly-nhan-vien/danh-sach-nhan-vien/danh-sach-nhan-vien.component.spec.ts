import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachNhanVienComponent } from './danh-sach-nhan-vien.component';

describe('DanhSachNhanVienComponent', () => {
  let component: DanhSachNhanVienComponent;
  let fixture: ComponentFixture<DanhSachNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
