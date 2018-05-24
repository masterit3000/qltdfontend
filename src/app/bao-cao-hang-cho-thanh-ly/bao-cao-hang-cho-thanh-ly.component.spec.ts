import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoHangChoThanhLyComponent } from './bao-cao-hang-cho-thanh-ly.component';

describe('BaoCaoHangChoThanhLyComponent', () => {
  let component: BaoCaoHangChoThanhLyComponent;
  let fixture: ComponentFixture<BaoCaoHangChoThanhLyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoHangChoThanhLyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoHangChoThanhLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
