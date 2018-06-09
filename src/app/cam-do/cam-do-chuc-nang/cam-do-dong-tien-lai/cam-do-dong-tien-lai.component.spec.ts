import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoDongTienLaiComponent } from './cam-do-dong-tien-lai.component';

describe('CamDoDongTienLaiComponent', () => {
  let component: CamDoDongTienLaiComponent;
  let fixture: ComponentFixture<CamDoDongTienLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoDongTienLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoDongTienLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
