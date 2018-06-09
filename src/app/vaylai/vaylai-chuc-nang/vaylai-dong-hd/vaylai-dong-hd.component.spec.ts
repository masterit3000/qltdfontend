import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiDongHdComponent } from './vaylai-dong-hd.component';

describe('VaylaiDongHdComponent', () => {
  let component: VaylaiDongHdComponent;
  let fixture: ComponentFixture<VaylaiDongHdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiDongHdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiDongHdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
