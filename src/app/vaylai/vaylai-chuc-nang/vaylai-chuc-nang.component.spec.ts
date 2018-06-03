import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiChucNangComponent } from './vaylai-chuc-nang.component';

describe('VaylaiChucNangComponent', () => {
  let component: VaylaiChucNangComponent;
  let fixture: ComponentFixture<VaylaiChucNangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiChucNangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiChucNangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
