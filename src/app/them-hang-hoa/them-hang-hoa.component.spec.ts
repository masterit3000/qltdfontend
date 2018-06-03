import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemHangHoaComponent } from './them-hang-hoa.component';

describe('ThemHangHoaComponent', () => {
  let component: ThemHangHoaComponent;
  let fixture: ComponentFixture<ThemHangHoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemHangHoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemHangHoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
