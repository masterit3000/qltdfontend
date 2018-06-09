import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiDongLaiComponent } from './vaylai-dong-lai.component';

describe('VaylaiDongLaiComponent', () => {
  let component: VaylaiDongLaiComponent;
  let fixture: ComponentFixture<VaylaiDongLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiDongLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiDongLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
