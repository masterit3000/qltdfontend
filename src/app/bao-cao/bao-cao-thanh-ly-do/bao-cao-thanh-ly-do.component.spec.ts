import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoThanhLyDoComponent } from './bao-cao-thanh-ly-do.component';

describe('BaoCaoThanhLyDoComponent', () => {
  let component: BaoCaoThanhLyDoComponent;
  let fixture: ComponentFixture<BaoCaoThanhLyDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoThanhLyDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoThanhLyDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
