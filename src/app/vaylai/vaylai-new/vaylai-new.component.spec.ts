import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiNewComponent } from './vaylai-new.component';

describe('VaylaiNewComponent', () => {
  let component: VaylaiNewComponent;
  let fixture: ComponentFixture<VaylaiNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
