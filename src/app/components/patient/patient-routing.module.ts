import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutletComponent } from './outlet/outlet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { AuthGuard } from 'app/_guard/auth.guard';
import { ChatComponent } from '../chat/chat.component';

const routes: Routes = [
  //{path: '', component:DashboardComponent}
  {
    path:'', component:OutletComponent,
   canActivate: [AuthGuard],
   
    canLoad: [AuthGuard],
    data: { roles: ['Patient'] } ,

  children:
  [
    { 
      path: '', 
      component:DashboardComponent,
      
    },
    {
      path: 'book',
       component: BookAppointmentComponent
      },

      {
        path: 'edit',
        component: EditAppointmentComponent
      },

      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      }
]


}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
