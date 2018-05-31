import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatHoNewComponent } from './bat-ho-new.component';

describe('BatHoNewComponent', () => {
  let component: BatHoNewComponent;
  let fixture: ComponentFixture<BatHoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatHoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatHoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
