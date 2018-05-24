import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachKhComponent } from './danhsach-kh.component';

describe('DanhsachKhComponent', () => {
  let component: DanhsachKhComponent;
  let fixture: ComponentFixture<DanhsachKhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachKhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachKhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
