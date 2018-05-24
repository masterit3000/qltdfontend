import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongKetGiaoDichComponent } from './tong-ket-giao-dich.component';

describe('TongKetGiaoDichComponent', () => {
  let component: TongKetGiaoDichComponent;
  let fixture: ComponentFixture<TongKetGiaoDichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongKetGiaoDichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongKetGiaoDichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
