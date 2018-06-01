import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatHoChucNangComponent } from './bat-ho-chuc-nang.component';

describe('BatHoChucNangComponent', () => {
  let component: BatHoChucNangComponent;
  let fixture: ComponentFixture<BatHoChucNangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatHoChucNangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatHoChucNangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
