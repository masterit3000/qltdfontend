import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuTienHoComponent } from './thu-tien-ho.component';

describe('ThuTienHoComponent', () => {
  let component: ThuTienHoComponent;
  let fixture: ComponentFixture<ThuTienHoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuTienHoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuTienHoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
