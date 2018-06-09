import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoThanhLyComponent } from './cam-do-thanh-ly.component';

describe('CamDoThanhLyComponent', () => {
  let component: CamDoThanhLyComponent;
  let fixture: ComponentFixture<CamDoThanhLyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoThanhLyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoThanhLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
