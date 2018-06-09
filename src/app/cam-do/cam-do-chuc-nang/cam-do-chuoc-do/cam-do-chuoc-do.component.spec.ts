import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoChuocDoComponent } from './cam-do-chuoc-do.component';

describe('CamDoChuocDoComponent', () => {
  let component: CamDoChuocDoComponent;
  let fixture: ComponentFixture<CamDoChuocDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoChuocDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoChuocDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
