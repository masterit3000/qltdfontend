import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietTienLaiComponent } from './chi-tiet-tien-lai.component';

describe('ChiTietTienLaiComponent', () => {
  let component: ChiTietTienLaiComponent;
  let fixture: ComponentFixture<ChiTietTienLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietTienLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietTienLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
