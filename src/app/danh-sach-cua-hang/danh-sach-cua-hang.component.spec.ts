import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachCuaHangComponent } from './danh-sach-cua-hang.component';

describe('DanhSachCuaHangComponent', () => {
  let component: DanhSachCuaHangComponent;
  let fixture: ComponentFixture<DanhSachCuaHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachCuaHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachCuaHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
