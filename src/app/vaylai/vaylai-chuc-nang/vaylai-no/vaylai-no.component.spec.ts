import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiNoComponent } from './vaylai-no.component';

describe('VaylaiNoComponent', () => {
  let component: VaylaiNoComponent;
  let fixture: ComponentFixture<VaylaiNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
