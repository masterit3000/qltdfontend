import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoHenGioComponent } from './cam-do-hen-gio.component';

describe('CamDoHenGioComponent', () => {
  let component: CamDoHenGioComponent;
  let fixture: ComponentFixture<CamDoHenGioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoHenGioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoHenGioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
