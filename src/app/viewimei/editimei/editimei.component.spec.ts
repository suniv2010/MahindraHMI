import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditimeiComponent } from './editimei.component';

describe('EditimeiComponent', () => {
  let component: EditimeiComponent;
  let fixture: ComponentFixture<EditimeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditimeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditimeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
