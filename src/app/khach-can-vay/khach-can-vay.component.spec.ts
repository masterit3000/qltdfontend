import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachCanVayComponent } from './khach-can-vay.component';

describe('KhachCanVayComponent', () => {
  let component: KhachCanVayComponent;
  let fixture: ComponentFixture<KhachCanVayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhachCanVayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhachCanVayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
