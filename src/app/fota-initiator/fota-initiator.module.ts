import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// tslint:disable-next-line:max-line-length
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

import { FileuploadComponent } from '../fota-initiator/fileupload/fileupload.component';
import { ViewUploadComponent } from '../fota-initiator/view-upload/view-upload.component';
import { FileuploadscreenComponent } from '../fota-initiator/fileupload/fileuploadscreen/fileuploadscreen.component';
import { FotaNavComponent } from '../fota-initiator/fota-nav/fota-nav.component';
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
            path: 'fileupload',
            component: FileuploadComponent
          },
          {
            path: 'fileupload/fileuploadscreen',
            component: FileuploadscreenComponent
          },
         
          {
            path: 'viewupload',
            component: ViewUploadComponent
          }
        
      
    ]
  }
];



@NgModule({
  declarations: [   
    InithomeComponent,
    FotaNavComponent,
    FotaInitiatorComponent,
    FileuploadComponent,
    ViewUploadComponent,
    FileuploadscreenComponent
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
    FormsModule
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
    MatGridListModule
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher} ],
  
})
export class FotaInitiatorModule { }
