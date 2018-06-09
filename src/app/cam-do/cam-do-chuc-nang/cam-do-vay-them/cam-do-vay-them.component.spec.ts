import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoVayThemComponent } from './cam-do-vay-them.component';

describe('CamDoVayThemComponent', () => {
  let component: CamDoVayThemComponent;
  let fixture: ComponentFixture<CamDoVayThemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoVayThemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoVayThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
