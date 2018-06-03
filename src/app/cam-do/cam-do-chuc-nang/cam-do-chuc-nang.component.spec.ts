import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoChucNangComponent } from './cam-do-chuc-nang.component';

describe('CamDoChucNangComponent', () => {
  let component: CamDoChucNangComponent;
  let fixture: ComponentFixture<CamDoChucNangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoChucNangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoChucNangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
