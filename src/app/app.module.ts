
//? DEFAULT CORE DEPENDENCIES

import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import 'hammerjs';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { Ng5BreadcrumbModule, BreadcrumbService} from 'ng5-breadcrumb';
import { DeviceDetectorModule,DeviceDetectorService } from 'ngx-device-detector';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { ToastrModule } from 'ngx-toastr';

import { SlickCarouselModule } from 'ngx-slick-carousel';
//import { WidgetComponentModule } from './widget-component/widget-component.module';

//?FIREBASE
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2'


//?ANGULAR MATERIAL
import { MatSlideToggleModule,MatButtonModule, MatBadgeModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule,
			MatTableModule, MatExpansionModule, MatSelectModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, 
			MatTabsModule, MatProgressBarModule,MatCheckboxModule, MatSliderModule,MatRadioModule,MatDialogModule,MatGridListModule
} from '@angular/material';


//?CHARTS
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgmCoreModule } from '@agm/core';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { RoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';

//?AUTHENTICATION
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyTokenComponent } from './components/verify-token/verify-token.component';


//?DEFAULT POPUP FOR ADMIN
import { DeleteDialogComponent } from './_core/pop-up/delete-dialog/delete-dialog.component';
import { AddNewUserComponent } from './_core/pop-up/add-new-user/add-new-user.component';
import { EditNewUserComponent } from './_core/pop-up/edit-new-user/edit-new-user.component';
import { VideoPlayerComponent } from './_core/pop-up/video-player/video-player.component';
import { PaymentMessageComponent } from './_core/pop-up/payment-message/payment-message.component';


//?services
import { AuthenticationService } from './_services/auth/authentication.service';
import { AdminService } from './_services/admin/admin.service';
import { ChatService } from './_services/chat/chat.service';


//?PATIENT POPUP FOR ADMIN
import { AddPatientComponent } from './_core/pop-up/patient-dialog/add-patient/add-patient.component';
import { EditPatientComponent } from './_core/pop-up/patient-dialog/edit-patient/edit-patient.component';
import { DeletePatientComponent } from './_core/pop-up/patient-dialog/delete-patient/delete-patient.component';

//?DOCTOR POPUP FOR ADMIN
import { AddDoctorComponent } from './_core/pop-up/doctor-dialog/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './_core/pop-up/doctor-dialog/edit-doctor/edit-doctor.component';
import { DeleteDoctorComponent } from './_core/pop-up/doctor-dialog/delete-doctor/delete-doctor.component';
//import { ChatComponent } from './components/chat/chat.component';
 

//?NOTIFICATION POPUP FOR ADMIN
import { AddNotificationComponent } from './_core/pop-up/notification-dialog/add-notification/add-notification.component';
import { EditNotificationComponent } from './_core/pop-up/notification-dialog/edit-notification/edit-notification.component';
import { DeleteNotificationComponent } from './_core/pop-up/notification-dialog/delete-notification/delete-notification.component';
 

//? HEALTH ADVICE
import { AddHealthAdviceComponent } from './_core/pop-up/healthadvice/add-health-advice/add-health-advice.component';


//?HTTP TOKEN INTERCEPTOR
import { TokenInterceptor } from './_interceptors/token.interceptor';
//import { JwtModule } from '@auth0/angular-jwt'; //!GAVE ME ISSUES, THATS Y I REWRITE MY OWN INTERCEPTOR

//?SOCKET EVENTS FOR CONSULATION
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

//const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
const config: SocketIoConfig = { url: 'http://bigboblittle.herokuapp.com', options: {} };



//WORKS WOTH {JWTmODULE}
export function tokenGetter() {
  return localStorage.getItem('token');
}

 //let m = JSON.parse(localStorage.getItem('user'));
 
//console.log(`this is the getitem..... ${m.role}`);


export const firebaseConfig = {
	apiKey				: "AIzaSyBO0CLP4fOA_kanqw1HQ2sDjEkyuK9lQ3o",
	authDomain			: "gene-ccf5f.firebaseapp.comm",
	databaseURL			: "https://gene-ccf5f.firebaseio.com",
	projectId			: "gene-ccf5fc",
	storageBucket		: "gene-ccf5f.appspot.com",
	messagingSenderId : "907778578362"
}

// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient) {
// 	return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
//  }
 
 const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
   suppressScrollX: true
 };

@NgModule({
  declarations: [
	AppComponent,
	//? AUTHENTICATION
	LoginComponent,
	RegisterComponent,
	ForgotPasswordComponent,
	VerifyTokenComponent,
	
	//?DEFAULT POPUP 
	DeleteDialogComponent,
	AddNewUserComponent,
	EditNewUserComponent,
	VideoPlayerComponent,
	PaymentMessageComponent,

	//? ADD/EDIT/DELETE PATIENT POPUP FOR ADMIN DASHBOARD
	AddPatientComponent,
	EditPatientComponent,
	DeletePatientComponent,


	//? ADD/EDIT/DELETE DOCTOR POPUP FOR ADMIN DASHBOARD
	AddDoctorComponent,
	EditDoctorComponent,
	DeleteDoctorComponent,

	//? ADD/EDIT/DELETE SYSTEM NOTIFICATIONS FOR ADMIN DASHBOARD
	AddNotificationComponent,
	EditNotificationComponent,
	DeleteNotificationComponent,
	AddHealthAdviceComponent,

	//? ADD DIALY HEALTH ADVICE
	AddHealthAdviceComponent



	//ChatComponent
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
	
	
	//thiers
	
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		DeviceDetectorModule.forRoot(),
		RoutingModule,
		FlexLayoutModule,
		NgbModalModule.forRoot(),
		Ng5BreadcrumbModule.forRoot(),
		TourMatMenuModule.forRoot(),
		PerfectScrollbarModule,
		//MenuToggleModule,
      HttpClientModule,
			MatSlideToggleModule,
			
	// 	TranslateModule.forRoot({
    //      loader: {
	// 			provide: TranslateLoader,
	// 			useFactory: HttpLoaderFactory,
	// 			deps: [HttpClient]
    //      }
    //   }),
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
	SocketIoModule.forRoot(config)
		// JwtModule.forRoot({
    //   config: {
		// 		headerName: 'auth',
    //     tokenGetter: tokenGetter,
    //   //  whitelistedDomains: ['localhost:3000'],
		// 	 // blacklistedRoutes: ['http://localhost:3000/auth/login']
			
    //   }
    // })
	],
	entryComponents : [
		
	  //AddNewCardComponent,
	 // InboxComposeComponent,
	 //? DEFUALT 
		 DeleteDialogComponent,
		AddNewUserComponent,
		EditNewUserComponent,
		VideoPlayerComponent,
		PaymentMessageComponent,

		//add patient dialog for admin side
		 //? add patient dialogs
		 AddPatientComponent,
		 EditPatientComponent,
		 DeletePatientComponent,

		 //? doctor DIALOG
		 AddDoctorComponent,
		 EditDoctorComponent,
		 DeleteDoctorComponent,

		 //? NOTIFICATIONS DIALOG
			AddNotificationComponent,
			EditNotificationComponent,
			DeleteNotificationComponent,

			//? HEALTH ADVICE
			AddHealthAdviceComponent
	],
	providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
							AuthenticationService, AdminService, ChatService
						],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }

