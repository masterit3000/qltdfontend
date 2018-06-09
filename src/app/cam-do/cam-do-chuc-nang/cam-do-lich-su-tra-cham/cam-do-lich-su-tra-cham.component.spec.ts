import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoLichSuTraChamComponent } from './cam-do-lich-su-tra-cham.component';

describe('CamDoLichSuTraChamComponent', () => {
  let component: CamDoLichSuTraChamComponent;
  let fixture: ComponentFixture<CamDoLichSuTraChamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoLichSuTraChamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoLichSuTraChamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
