import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatHoComponent } from './bat-ho.component';

describe('BatHoComponent', () => {
  let component: BatHoComponent;
  let fixture: ComponentFixture<BatHoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatHoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatHoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
