import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AuthGuard } from 'app/_guard/auth.guard';
import { NotificationComponent } from './notification/notification.component';
import { HealthAdviceComponent } from './health-advice/health-advice.component';



const routes: Routes = [
  {
    path: '',
   component: NavComponent,
  //  canActivate: [AuthGuard],
   // canActivateChild:[AuthGuard],
   // canLoad: [AuthGuard],
   // data: { roles: ['Admin'] } ,

  children: [
    { 
      path: '', 
      component:DashboardComponent,
     // canActivate: [AuthGuard],
    },
    
    {
      path: 'patient',
      component: PatientsComponent
    },
    {
      path: 'appointment',
      component: AppointmentsComponent
    },
    {
      path: 'doctor',
      component: DoctorsComponent
    },
    {
      path: 'notification',
      component: NotificationComponent
    },
    {
      path: 'health-advice',
      component: HealthAdviceComponent
    }
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
