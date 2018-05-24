import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauHinhHangHoaComponent } from './cau-hinh-hang-hoa.component';

describe('CauHinhHangHoaComponent', () => {
  let component: CauHinhHangHoaComponent;
  let fixture: ComponentFixture<CauHinhHangHoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauHinhHangHoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauHinhHangHoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
