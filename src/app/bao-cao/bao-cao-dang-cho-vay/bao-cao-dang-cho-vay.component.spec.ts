import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoDangChoVayComponent } from './bao-cao-dang-cho-vay.component';

describe('BaoCaoDangChoVayComponent', () => {
  let component: BaoCaoDangChoVayComponent;
  let fixture: ComponentFixture<BaoCaoDangChoVayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoDangChoVayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoDangChoVayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
