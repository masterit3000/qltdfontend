import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoHopDongDaXoaComponent } from './bao-cao-hop-dong-da-xoa.component';

describe('BaoCaoHopDongDaXoaComponent', () => {
  let component: BaoCaoHopDongDaXoaComponent;
  let fixture: ComponentFixture<BaoCaoHopDongDaXoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoHopDongDaXoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoHopDongDaXoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
