import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimeiComponent } from './viewimei.component';

describe('ViewimeiComponent', () => {
  let component: ViewimeiComponent;
  let fixture: ComponentFixture<ViewimeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
