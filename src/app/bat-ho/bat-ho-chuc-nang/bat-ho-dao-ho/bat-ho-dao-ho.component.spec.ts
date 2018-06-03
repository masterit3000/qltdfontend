import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatHoDaoHoComponent } from './bat-ho-dao-ho.component';

describe('BatHoDaoHoComponent', () => {
  let component: BatHoDaoHoComponent;
  let fixture: ComponentFixture<BatHoDaoHoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatHoDaoHoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatHoDaoHoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
