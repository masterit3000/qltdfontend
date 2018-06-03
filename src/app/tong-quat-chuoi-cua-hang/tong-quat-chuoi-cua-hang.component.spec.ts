import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongQuatChuoiCuaHangComponent } from './tong-quat-chuoi-cua-hang.component';

describe('TongQuatChuoiCuaHangComponent', () => {
  let component: TongQuatChuoiCuaHangComponent;
  let fixture: ComponentFixture<TongQuatChuoiCuaHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongQuatChuoiCuaHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongQuatChuoiCuaHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
