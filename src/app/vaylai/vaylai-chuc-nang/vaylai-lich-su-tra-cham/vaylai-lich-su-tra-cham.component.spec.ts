import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiLichSuTraChamComponent } from './vaylai-lich-su-tra-cham.component';

describe('VaylaiLichSuTraChamComponent', () => {
  let component: VaylaiLichSuTraChamComponent;
  let fixture: ComponentFixture<VaylaiLichSuTraChamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiLichSuTraChamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiLichSuTraChamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
