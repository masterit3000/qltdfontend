import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinChiTietCuaHangComponent } from './thong-tin-chi-tiet-cua-hang.component';

describe('ThongTinChiTietCuaHangComponent', () => {
  let component: ThongTinChiTietCuaHangComponent;
  let fixture: ComponentFixture<ThongTinChiTietCuaHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinChiTietCuaHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinChiTietCuaHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
