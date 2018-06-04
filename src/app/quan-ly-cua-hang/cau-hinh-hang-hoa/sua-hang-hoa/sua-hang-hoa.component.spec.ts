import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaHangHoaComponent } from './sua-hang-hoa.component';

describe('SuaHangHoaComponent', () => {
  let component: SuaHangHoaComponent;
  let fixture: ComponentFixture<SuaHangHoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaHangHoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaHangHoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
