import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTinNhanComponent } from './bao-cao-tin-nhan.component';

describe('BaoCaoTinNhanComponent', () => {
  let component: BaoCaoTinNhanComponent;
  let fixture: ComponentFixture<BaoCaoTinNhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTinNhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTinNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
