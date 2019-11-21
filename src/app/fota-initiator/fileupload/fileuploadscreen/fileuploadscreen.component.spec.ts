import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadscreenComponent } from './fileuploadscreen.component';

describe('FileuploadscreenComponent', () => {
  let component: FileuploadscreenComponent;
  let fixture: ComponentFixture<FileuploadscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileuploadscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
