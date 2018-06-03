import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongKetLoiNhuanComponent } from './tong-ket-loi-nhuan.component';

describe('TongKetLoiNhuanComponent', () => {
  let component: TongKetLoiNhuanComponent;
  let fixture: ComponentFixture<TongKetLoiNhuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongKetLoiNhuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongKetLoiNhuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
