import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiVayThemComponent } from './vaylai-vay-them.component';

describe('VaylaiVayThemComponent', () => {
  let component: VaylaiVayThemComponent;
  let fixture: ComponentFixture<VaylaiVayThemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiVayThemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiVayThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
