import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatHoNoComponent } from './bat-ho-no.component';

describe('BatHoNoComponent', () => {
  let component: BatHoNoComponent;
  let fixture: ComponentFixture<BatHoNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatHoNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatHoNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
