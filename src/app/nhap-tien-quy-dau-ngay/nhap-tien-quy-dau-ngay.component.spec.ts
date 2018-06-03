import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapTienQuyDauNgayComponent } from './nhap-tien-quy-dau-ngay.component';

describe('NhapTienQuyDauNgayComponent', () => {
  let component: NhapTienQuyDauNgayComponent;
  let fixture: ComponentFixture<NhapTienQuyDauNgayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapTienQuyDauNgayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapTienQuyDauNgayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
