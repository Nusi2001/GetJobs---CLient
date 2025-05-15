import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { AuthLoginComponent } from './app/auth/auth-login/auth-login.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { AuthGuard } from './app/auth/auth.guard';
import { ForgotPasswordComponent } from './app/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobListComponent, canActivate: [AuthGuard] },
  { path: 'job-details/:id', component: JobDetailsComponent },
  { path: 'login', component: AuthLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }