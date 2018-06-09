import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoNoComponent } from './cam-do-no.component';

describe('CamDoNoComponent', () => {
  let component: CamDoNoComponent;
  let fixture: ComponentFixture<CamDoNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
