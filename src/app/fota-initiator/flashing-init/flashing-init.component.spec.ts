import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashingInitComponent } from './flashing-init.component';

describe('FlashingInitComponent', () => {
  let component: FlashingInitComponent;
  let fixture: ComponentFixture<FlashingInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashingInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashingInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
