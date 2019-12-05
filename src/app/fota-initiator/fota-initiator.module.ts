import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatGridListModule
} from '@angular/material';

import { InithomeComponent } from '../fota-initiator/inithome/inithome.component';
import { FotaInitiatorComponent } from '../fota-initiator/fota-initiator/fota-initiator.component';

import { ViewUploadComponent } from '../fota-initiator/view-upload/view-upload.component';
import { FileuploadscreenComponent } from '../fota-initiator/fileupload/fileuploadscreen/fileuploadscreen.component';
import { FotaNavComponent } from '../fota-initiator/fota-nav/fota-nav.component';
import { FotaUploadInboxComponent } from './fota-upload-inbox/fota-upload-inbox.component';
import { FlashingInitComponent } from './flashing-init/flashing-init.component';

import { FileUploadModule } from 'ng2-file-upload';
import { ActivitystatusAdminComponent } from '../activitystatus-admin/activitystatus-admin.component';

const fotaRoutes: Routes = [
  {
    path: '',
    component: FotaInitiatorComponent,
    children: [


      {
        path: '',
        component: InithomeComponent
      },

      {
        path: 'fileupload/fileuploadscreen',
        component: FileuploadscreenComponent
      },

      {
        path: 'viewupload',
        component: ViewUploadComponent
      },
      {
        path: 'uploadinbox',
        component: FotaUploadInboxComponent
      },
      {
        path: 'flashinginit',
        component: FlashingInitComponent
      }
    ]
  }
];



@NgModule({
  declarations: [
    InithomeComponent,
    FotaNavComponent,
    FotaInitiatorComponent,
    ViewUploadComponent,
    FileuploadscreenComponent,
    FotaUploadInboxComponent,
    FlashingInitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(fotaRoutes),

    DataTablesModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatGridListModule,
    FormsModule,
    FileUploadModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatGridListModule,
    FileUploadModule
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],

})
export class FotaInitiatorModule { }
