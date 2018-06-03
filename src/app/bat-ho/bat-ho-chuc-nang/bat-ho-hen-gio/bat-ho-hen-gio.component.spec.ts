import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatHoHenGioComponent } from './bat-ho-hen-gio.component';

describe('BatHoHenGioComponent', () => {
  let component: BatHoHenGioComponent;
  let fixture: ComponentFixture<BatHoHenGioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatHoHenGioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatHoHenGioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
