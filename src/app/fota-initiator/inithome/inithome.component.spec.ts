import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InithomeComponent } from './inithome.component';

describe('InithomeComponent', () => {
  let component: InithomeComponent;
  let fixture: ComponentFixture<InithomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InithomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InithomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
