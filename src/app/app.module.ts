import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './client/register/register.component';
import { LoginadminComponent } from './admin/loginadmin/loginadmin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginmanagerComponent } from './manager/loginmanager/loginmanager.component';
import { DashboardmanagerComponent } from './manager/dashboardmanager/dashboardmanager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './client/homepage/homepage.component';

//Material imports
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { MatLabel } from '@angular/material/form-field';
import { MatDateRangeInput } from '@angular/material/datepicker';
import { MatHint } from '@angular/material/form-field';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { MatError } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './client/contact/contact.component';
import { ForgetpasswordComponent } from './client/forgetpassword/forgetpassword.component';
import { ConsulterresvationComponent } from './client/consulterresvation/consulterresvation.component';
import { ReserverComponent } from './client/reserver/reserver.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AjtstrcDialogComponent } from './admin/dashboard/ajtstrc-dialog/ajtstrc-dialog.component';
import { AjtserviceDialogComponent } from './admin/dashboard/ajtservice-dialog/ajtservice-dialog.component';
import { AjtmanagerDialogComponent } from './admin/dashboard/ajtmanager-dialog/ajtmanager-dialog.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginadminComponent,
    DashboardComponent,
    LoginmanagerComponent,
    DashboardmanagerComponent,
    HomepageComponent,
    HomeComponent,
    ContactComponent,
    ForgetpasswordComponent,
    ConsulterresvationComponent,
    ReserverComponent,
    AjtstrcDialogComponent,
    AjtserviceDialogComponent,
    AjtmanagerDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
