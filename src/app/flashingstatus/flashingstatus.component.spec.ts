import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashingstatusComponent } from './flashingstatus.component';

describe('FlashingstatusComponent', () => {
  let component: FlashingstatusComponent;
  let fixture: ComponentFixture<FlashingstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashingstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashingstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
