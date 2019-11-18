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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {  
  MatButtonModule,  
  MatMenuModule,  
  MatToolbarModule,  
  MatIconModule,  
  MatCardModule,  
  MatFormFieldModule,  
  MatInputModule,  
  MatDatepickerModule,  
  MatDatepicker,  
  MatCheckboxModule,
  MatNativeDateModule,  
  MatRadioModule,  
  MatSelectModule,  
  MatOptionModule, 
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher  
} from '@angular/material';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    SidebarComponent,
    AddUserComponent
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
    MatCheckboxModule
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
    MatSlideToggleModule  
  ],  
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher} ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddUserComponent
  ]
})
export class AppModule { }
