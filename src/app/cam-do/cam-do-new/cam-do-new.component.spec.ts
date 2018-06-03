import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoNewComponent } from './cam-do-new.component';

describe('CamDoNewComponent', () => {
  let component: CamDoNewComponent;
  let fixture: ComponentFixture<CamDoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
