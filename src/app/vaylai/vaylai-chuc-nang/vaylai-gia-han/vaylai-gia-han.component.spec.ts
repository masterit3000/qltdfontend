import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiGiaHanComponent } from './vaylai-gia-han.component';

describe('VaylaiGiaHanComponent', () => {
  let component: VaylaiGiaHanComponent;
  let fixture: ComponentFixture<VaylaiGiaHanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiGiaHanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiGiaHanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
