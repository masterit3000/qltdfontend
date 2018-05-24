import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiComponent } from './vaylai.component';

describe('VaylaiComponent', () => {
  let component: VaylaiComponent;
  let fixture: ComponentFixture<VaylaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
