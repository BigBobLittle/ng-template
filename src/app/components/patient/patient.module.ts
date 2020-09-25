import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { OutletComponent } from './outlet/outlet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng5BreadcrumbModule } from 'ng5-breadcrumb';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatTableModule, MatExpansionModule, MatSelectModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatRadioModule, MatDialogModule, MatGridListModule, MatFormFieldModule, MatStepperModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from 'app/app.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgmCoreModule } from '@agm/core';
import { DragulaModule } from 'ng2-dragula';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HistoryComponent } from './history/history.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
//import { ChatComponent } from './chat/chat.component';
import { ChatComponent } from '../chat/chat.component';


//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
 
//const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    OutletComponent,
    DashboardComponent,
    BookAppointmentComponent,
    EditAppointmentComponent,
    ProfileComponent,
    EditProfileComponent,
    HistoryComponent,
    ChatComponent
	],
	
  imports: [
    CommonModule,
    PatientRoutingModule,
    FlexLayoutModule,
		NgbModalModule.forRoot(),
		Ng5BreadcrumbModule.forRoot(),
		TourMatMenuModule.forRoot(),
		NgxMaterialTimepickerModule.forRoot(),
		PerfectScrollbarModule,
		//SocketIoModule.forRoot(config),
		
    HttpClientModule,
   MatSlideToggleModule,
		FormsModule,
		ReactiveFormsModule,
		MatStepperModule,
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
		//WidgetComponentModule,
		ToastrModule.forRoot(),
		SlickCarouselModule,
		EasyPieChartModule,
		ChartsModule,
		NgxDatatableModule,
		AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),

		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatProgressBarModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		FlexLayoutModule,
		TranslateModule,
		DragulaModule.forRoot(),
		
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientModule { }
