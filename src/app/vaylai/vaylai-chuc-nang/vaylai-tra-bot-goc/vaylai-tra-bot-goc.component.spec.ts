import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaylaiTraBotGocComponent } from './vaylai-tra-bot-goc.component';

describe('VaylaiTraBotGocComponent', () => {
  let component: VaylaiTraBotGocComponent;
  let fixture: ComponentFixture<VaylaiTraBotGocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaylaiTraBotGocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaylaiTraBotGocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
