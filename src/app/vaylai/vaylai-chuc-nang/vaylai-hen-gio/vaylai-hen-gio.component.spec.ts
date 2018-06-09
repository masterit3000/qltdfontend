import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiHenGioComponent } from './vaylai-hen-gio.component';

describe('VaylaiHenGioComponent', () => {
  let component: VaylaiHenGioComponent;
  let fixture: ComponentFixture<VaylaiHenGioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiHenGioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiHenGioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
