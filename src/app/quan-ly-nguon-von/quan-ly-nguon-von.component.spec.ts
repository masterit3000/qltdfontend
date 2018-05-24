import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyNguonVonComponent } from './quan-ly-nguon-von.component';

describe('QuanLyNguonVonComponent', () => {
  let component: QuanLyNguonVonComponent;
  let fixture: ComponentFixture<QuanLyNguonVonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyNguonVonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyNguonVonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
