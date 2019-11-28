import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitystatusAdminComponent } from './activitystatus-admin.component';

describe('ActivitystatusAdminComponent', () => {
  let component: ActivitystatusAdminComponent;
  let fixture: ComponentFixture<ActivitystatusAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitystatusAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitystatusAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
