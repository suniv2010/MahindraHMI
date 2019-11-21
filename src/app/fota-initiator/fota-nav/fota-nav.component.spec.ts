import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotaNavComponent } from './fota-nav.component';

describe('FotaNavComponent', () => {
  let component: FotaNavComponent;
  let fixture: ComponentFixture<FotaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
