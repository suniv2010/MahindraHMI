import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallstatusscreenComponent } from './overallstatusscreen.component';

describe('OverallstatusscreenComponent', () => {
  let component: OverallstatusscreenComponent;
  let fixture: ComponentFixture<OverallstatusscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallstatusscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallstatusscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
