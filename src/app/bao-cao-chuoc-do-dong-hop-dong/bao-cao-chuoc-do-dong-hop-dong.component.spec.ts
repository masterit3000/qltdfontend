import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoChuocDoDongHopDongComponent } from './bao-cao-chuoc-do-dong-hop-dong.component';

describe('BaoCaoChuocDoDongHopDongComponent', () => {
  let component: BaoCaoChuocDoDongHopDongComponent;
  let fixture: ComponentFixture<BaoCaoChuocDoDongHopDongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoChuocDoDongHopDongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoChuocDoDongHopDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
