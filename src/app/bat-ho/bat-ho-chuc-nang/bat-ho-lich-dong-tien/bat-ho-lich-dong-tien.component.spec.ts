import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatHoLichDongTienComponent } from './bat-ho-lich-dong-tien.component';

describe('BatHoLichDongTienComponent', () => {
  let component: BatHoLichDongTienComponent;
  let fixture: ComponentFixture<BatHoLichDongTienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatHoLichDongTienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatHoLichDongTienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
