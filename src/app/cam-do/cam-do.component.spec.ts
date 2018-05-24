import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoComponent } from './cam-do.component';

describe('CamDoComponent', () => {
  let component: CamDoComponent;
  let fixture: ComponentFixture<CamDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
