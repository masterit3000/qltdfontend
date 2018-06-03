import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanQuyenNhanVienComponent } from './phan-quyen-nhan-vien.component';

describe('PhanQuyenNhanVienComponent', () => {
  let component: PhanQuyenNhanVienComponent;
  let fixture: ComponentFixture<PhanQuyenNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhanQuyenNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhanQuyenNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
