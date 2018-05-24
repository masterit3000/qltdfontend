import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckThongTinKhachHangComponent } from './check-thong-tin-khach-hang.component';

describe('CheckThongTinKhachHangComponent', () => {
  let component: CheckThongTinKhachHangComponent;
  let fixture: ComponentFixture<CheckThongTinKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckThongTinKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckThongTinKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
