import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { AddUserComponent } from './users/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';

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


import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ActivitystatusAdminComponent } from './activitystatus-admin/activitystatus-admin.component';
import { FlashingstatusComponent } from './flashingstatus/flashingstatus.component';
import { OverallstatusscreenComponent } from './overallstatusscreen/overallstatusscreen.component';
import { ViewimeiComponent } from './viewimei/viewimei.component';
import { EditimeiComponent } from './viewimei/editimei/editimei.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login/forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'inithome',
    loadChildren: () => import('./fota-initiator/fota-initiator.module').then(mod => mod.FotaInitiatorModule),
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'activitystatusadmin',
    component: ActivitystatusAdminComponent
  },
  {
    path: 'flashingstatus',
    component: FlashingstatusComponent
  },
  {
    path: 'overallstatusscreen',
    component: OverallstatusscreenComponent
  },
  {
    path: 'viewimei',
    component: ViewimeiComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    SidebarComponent,
    AddUserComponent,
    ForgetPasswordComponent,
    TopNavigationComponent,
    ActivitystatusAdminComponent,
    FlashingstatusComponent,
    OverallstatusscreenComponent,
    ViewimeiComponent,
    EditimeiComponent


  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
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
    BrowserAnimationsModule,
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
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  bootstrap: [AppComponent],

  entryComponents: [
    AddUserComponent,EditimeiComponent
  ]
})
export class AppModule { }
