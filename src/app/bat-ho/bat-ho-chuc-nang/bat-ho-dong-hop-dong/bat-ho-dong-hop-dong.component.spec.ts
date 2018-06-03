import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatHoDongHopDongComponent } from './bat-ho-dong-hop-dong.component';

describe('BatHoDongHopDongComponent', () => {
  let component: BatHoDongHopDongComponent;
  let fixture: ComponentFixture<BatHoDongHopDongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatHoDongHopDongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatHoDongHopDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
