import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoLichSuComponent } from './cam-do-lich-su.component';

describe('CamDoLichSuComponent', () => {
  let component: CamDoLichSuComponent;
  let fixture: ComponentFixture<CamDoLichSuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoLichSuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoLichSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
