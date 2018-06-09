import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiLichSuComponent } from './vaylai-lich-su.component';

describe('VaylaiLichSuComponent', () => {
  let component: VaylaiLichSuComponent;
  let fixture: ComponentFixture<VaylaiLichSuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiLichSuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiLichSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
