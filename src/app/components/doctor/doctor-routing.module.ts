import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AuthGuard } from 'app/_guard/auth.guard';
 import { ChatComponent } from '../chat/chat.component';
//import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: '', component:NavComponent,
    canActivate: [AuthGuard],
    //canActivateChild:[AuthGuard],
    canLoad: [AuthGuard],


  children: [
  //  { 
  //    path: '', 
  //    component:DashboardComponent
  //   },
    {
      path: '', //appointment
      component: AppointmentComponent
    },
    {
      path: 'consult',
      component: ChatComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
