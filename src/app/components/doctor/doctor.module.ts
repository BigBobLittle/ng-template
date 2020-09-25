import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { NavComponent } from './nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng5BreadcrumbModule } from 'ng5-breadcrumb';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatTableModule, MatExpansionModule, MatSelectModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatRadioModule, MatDialogModule, MatGridListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from 'app/app.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgmCoreModule } from '@agm/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
 import { ChatComponent } from '../chat/chat.component';
//import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    AppointmentComponent,
    ChatComponent  
  
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    
  FlexLayoutModule,
  NgbModalModule.forRoot(),
  Ng5BreadcrumbModule.forRoot(),
  TourMatMenuModule.forRoot(),
  PerfectScrollbarModule,
  
    HttpClientModule,
    MatSlideToggleModule,

  FormsModule,
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
  AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'})
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]

  
})
export class DoctorModule { }

