import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotaUploadInboxComponent } from './fota-upload-inbox.component';

describe('FotaUploadInboxComponent', () => {
  let component: FotaUploadInboxComponent;
  let fixture: ComponentFixture<FotaUploadInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotaUploadInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotaUploadInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
