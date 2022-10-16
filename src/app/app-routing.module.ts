import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginadminComponent } from './admin/loginadmin/loginadmin.component';
import { ConsulterresvationComponent } from './client/consulterresvation/consulterresvation.component';
import { ContactComponent } from './client/contact/contact.component';
import { ForgetpasswordComponent } from './client/forgetpassword/forgetpassword.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { ReserverComponent } from './client/reserver/reserver.component';
import { HomeComponent } from './home/home.component';
import { DashboardmanagerComponent } from './manager/dashboardmanager/dashboardmanager.component';
import { LoginmanagerComponent } from './manager/loginmanager/loginmanager.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home',component: HomepageComponent},
  { path: '',component: HomeComponent},
  { path:'forgetpassword',component:ForgetpasswordComponent},
  { path: 'admin/dashboard',component: DashboardComponent},
  { path: 'admin/login',component: LoginadminComponent},
  { path: 'manager/dashboard',component: DashboardmanagerComponent},
  { path: 'manager/login',component: LoginmanagerComponent},
  { path:'contact',component:ContactComponent},
  { path:'client/home', component:HomepageComponent},
  { path:'reservation', component:ConsulterresvationComponent},
  { path:'client/reserver', component:ReserverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
