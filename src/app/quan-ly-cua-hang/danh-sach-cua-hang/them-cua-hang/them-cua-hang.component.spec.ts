import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemCuaHangComponent } from './them-cua-hang.component';

describe('ThemCuaHangComponent', () => {
  let component: ThemCuaHangComponent;
  let fixture: ComponentFixture<ThemCuaHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemCuaHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemCuaHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
