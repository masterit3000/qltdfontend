import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaThongTinKhachHangComponent } from './sua-thong-tin-khach-hang.component';

describe('SuaThongTinKhachHangComponent', () => {
  let component: SuaThongTinKhachHangComponent;
  let fixture: ComponentFixture<SuaThongTinKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaThongTinKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaThongTinKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
