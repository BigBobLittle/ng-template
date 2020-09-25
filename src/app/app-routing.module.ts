import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyTokenComponent } from './components/verify-token/verify-token.component';
//import { ChatComponent } from './components/chat/chat.component';
import { AuthGuard } from './_guard/auth.guard';
//import { AuthGuard } from './_guard/auth.guard';










const appRoutes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'register', component:RegisterComponent},
	{path: 'forgot-password', component:ForgotPasswordComponent},
	{path: 'verify-token', component:VerifyTokenComponent},
	//{path: 'chat', component:ChatComponent, canActivate: [AuthGuard]},
	{path: 'patient', loadChildren: './components/patient/patient.module#PatientModule'},
	{path: 'doctor', loadChildren: './components/doctor/doctor.module#DoctorModule'},
	{path: 'admin', loadChildren: './components/admin/admin.module#AdminModule', } // canActivate: [AuthGuard]

	
]

@NgModule({
  	imports: [RouterModule.forRoot(appRoutes)],
 	exports: [RouterModule],
  	providers: []
})
export class RoutingModule { }
