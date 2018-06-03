import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatHoLichSuComponent } from './bat-ho-lich-su.component';

describe('BatHoLichSuComponent', () => {
  let component: BatHoLichSuComponent;
  let fixture: ComponentFixture<BatHoLichSuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatHoLichSuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatHoLichSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
