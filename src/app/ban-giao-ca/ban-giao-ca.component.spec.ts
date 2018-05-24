import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanGiaoCaComponent } from './ban-giao-ca.component';

describe('BanGiaoCaComponent', () => {
  let component: BanGiaoCaComponent;
  let fixture: ComponentFixture<BanGiaoCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanGiaoCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanGiaoCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
