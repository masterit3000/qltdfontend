import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaThongTinCuaHangComponent } from './sua-thong-tin-cua-hang.component';

describe('SuaThongTinCuaHangComponent', () => {
  let component: SuaThongTinCuaHangComponent;
  let fixture: ComponentFixture<SuaThongTinCuaHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaThongTinCuaHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaThongTinCuaHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
