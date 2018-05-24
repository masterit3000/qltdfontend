import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoQuyTienMatComponent } from './so-quy-tien-mat.component';

describe('SoQuyTienMatComponent', () => {
  let component: SoQuyTienMatComponent;
  let fixture: ComponentFixture<SoQuyTienMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoQuyTienMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoQuyTienMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
