import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng5BreadcrumbModule } from 'ng5-breadcrumb';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatTableModule, MatExpansionModule, MatSelectModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatRadioModule, MatDialogModule, MatGridListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from 'app/app.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TextMaskModule } from 'angular2-text-mask';
import { AgmCoreModule } from '@agm/core';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsComponent } from './patients/patients.component';
import { ChatComponent } from './chat/chat.component';
import { NotificationComponent } from './notification/notification.component';
import { HealthAdviceComponent } from './health-advice/health-advice.component';


//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
 
//const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };



@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    DoctorsComponent,
    AppointmentsComponent,
    PatientsComponent,
    ChatComponent,
    NotificationComponent,
    HealthAdviceComponent,

   
 
  
    
  ],
  imports: [

    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
  NgbModalModule.forRoot(),
  Ng5BreadcrumbModule.forRoot(),
  TourMatMenuModule.forRoot(),
  //SocketIoModule.forRoot(config),
  PerfectScrollbarModule,
  
    HttpClientModule,
    MatSlideToggleModule,

  FormsModule,ReactiveFormsModule,
  AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  MatButtonModule, 
  MatCardModule, 
  MatMenuModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatBadgeModule,
  MatInputModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatProgressSpinnerModule,
  MatTableModule, 
  MatExpansionModule, 
  MatSelectModule, 
  MatSnackBarModule, 
  MatTooltipModule, 
  MatChipsModule, 
  MatListModule, 
  MatSidenavModule, 
  MatTabsModule, 
  MatProgressBarModule,
  MatCheckboxModule,
  MatSliderModule,
  MatRadioModule,
  MatDialogModule,
  MatGridListModule,
  
  ToastrModule.forRoot(),
  SlickCarouselModule,
  EasyPieChartModule,
  ChartsModule,
  NgxDatatableModule,
  TextMaskModule,
  AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'})
],


schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
