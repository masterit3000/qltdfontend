import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuTienVayLaiComponent } from './thu-tien-vay-lai.component';

describe('ThuTienVayLaiComponent', () => {
  let component: ThuTienVayLaiComponent;
  let fixture: ComponentFixture<ThuTienVayLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuTienVayLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuTienVayLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
