import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamDoTraBotGocComponent } from './cam-do-tra-bot-goc.component';

describe('CamDoTraBotGocComponent', () => {
  let component: CamDoTraBotGocComponent;
  let fixture: ComponentFixture<CamDoTraBotGocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamDoTraBotGocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamDoTraBotGocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
