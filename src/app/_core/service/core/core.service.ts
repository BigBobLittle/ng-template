import { Injectable, Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import 'rxjs/Rx';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { data } from 'jquery';

//? DEFAULT COMPONENT
import { AddNewUserComponent } from 'app/_core/pop-up/add-new-user/add-new-user.component';
import { EditNewUserComponent } from 'app/_core/pop-up/edit-new-user/edit-new-user.component';
import { DeleteDialogComponent } from 'app/_core/pop-up/delete-dialog/delete-dialog.component';
import { VideoPlayerComponent } from 'app/_core/pop-up/video-player/video-player.component';
import { PaymentMessageComponent } from 'app/_core/pop-up/payment-message/payment-message.component';

//? patient dialog for admin patient route
import { AddPatientComponent } from 'app/_core/pop-up/patient-dialog/add-patient/add-patient.component';
import { EditPatientComponent } from 'app/_core/pop-up/patient-dialog/edit-patient/edit-patient.component';
import { DeletePatientComponent } from 'app/_core/pop-up/patient-dialog/delete-patient/delete-patient.component';

//? DOCTOR DIALOG FOR AMDIN ROUTE
import { AddDoctorComponent } from 'app/_core/pop-up/doctor-dialog/add-doctor/add-doctor.component';
import { EditDoctorComponent } from 'app/_core/pop-up/doctor-dialog/edit-doctor/edit-doctor.component';
import { DeleteDoctorComponent } from 'app/_core/pop-up/doctor-dialog/delete-doctor/delete-doctor.component';
import { AddNotificationComponent } from 'app/_core/pop-up/notification-dialog/add-notification/add-notification.component';
import { EditNotificationComponent } from 'app/_core/pop-up/notification-dialog/edit-notification/edit-notification.component';
import { DeleteNotificationComponent } from 'app/_core/pop-up/notification-dialog/delete-notification/delete-notification.component';
import { AddHealthAdviceComponent } from 'app/_core/pop-up/healthadvice/add-health-advice/add-health-advice.component';

//? NOTIFICATION DIALOG FOR ADMIN ROUTE

@Injectable({
	providedIn: 'root'
})

export class CoreService {

	sidenavOpen : boolean = true;
	sidenavMode : string = "side";
	horizontalStatus : boolean = false;
	horizontalSizeStatue : boolean =  false;
	
	constructor(private matDialog : MatDialog,
					private http : HttpClient){
	}

/***********************************************************
 * ! this is the dialogs for popup on the admin dashboard
 * ! 
 * ! its used to add, edit and delete all actors of the system
 * ! all components are extracted from _core/pop-up/{nameOfComponent}
 * ! i've grouped grouped all associated popups starting with 
 * ! component name.
 * ! eg. patient/doctor etc
 * ! all components are called in their respective instances in the 
 * ! ./components/admin/.... and added to entry components of app.module
 * !big bob little
 * **********************************************************
 */


//? PATIENT DIALOGS
addNewPatientDailog(){
	let dialogRef : MatDialogRef<AddPatientComponent>;
	dialogRef = this.matDialog.open(AddPatientComponent);
	
	return dialogRef.afterClosed();
}

editPatientDialog(data){
	let dialogRef : MatDialogRef<EditPatientComponent>;
	dialogRef =this.matDialog.open(EditPatientComponent);
	dialogRef.componentInstance.data = data;
	
	return dialogRef.afterClosed();
}



deletePatientDialog(data : string){
	let dialogRef : MatDialogRef<DeletePatientComponent>;
		dialogRef = this.matDialog.open(DeletePatientComponent);
		dialogRef.componentInstance.data = data;
		
		return dialogRef.afterClosed();
}




/*****************************************************
 * ?DOCTOR DIALOGS 
 * *******************************************
 */

 
addNewDoctorDailog(){
	let dialogRef : MatDialogRef<AddDoctorComponent>;
	dialogRef = this.matDialog.open(AddDoctorComponent);
	
	return dialogRef.afterClosed();
}


editDoctorDialog(data){
	let dialogRef : MatDialogRef<EditDoctorComponent>;
	dialogRef =this.matDialog.open(EditDoctorComponent);
	dialogRef.componentInstance.data = data;
	
	return dialogRef.afterClosed();
}



deleteDoctorDialog(data : string){
	let dialogRef : MatDialogRef<DeleteDoctorComponent>;
		dialogRef = this.matDialog.open(DeleteDoctorComponent);
		dialogRef.componentInstance.data = data;
		
		return dialogRef.afterClosed();
}


/********************************
 * ? NOTIFICATIONS POPUP
 *****************************/
addNotificationDialog(){
	let dialogRef: MatDialogRef<AddNotificationComponent>;
	dialogRef = this.matDialog.open(AddNotificationComponent);
	dialogRef.componentInstance.data = data;

	return dialogRef.afterClosed();
}

editNotificationDialog(data: string){
	let dialogRef: MatDialogRef<EditNotificationComponent>;
	dialogRef = this.matDialog.open(EditNotificationComponent);
	dialogRef.componentInstance.data = data;
	return dialogRef.afterClosed();

}

deleteNotificationDialog(data: any){
	let dialogRef: MatDialogRef<DeleteNotificationComponent>;
	dialogRef = this.matDialog.open(DeleteNotificationComponent);
	dialogRef.componentInstance.data = data;
	return dialogRef.afterClosed();
}

/****
 * ? DIALY HEALTH ADVICE
 */

 addNewDialyHealthAdvice(){
	 let dialogRef: MatDialogRef<AddHealthAdviceComponent>;
	 dialogRef = this.matDialog.open(AddHealthAdviceComponent);
	 return dialogRef.afterClosed();
 }


 //******************************************************************************************** */
	//! this is the default popup components
	//addNewUserDailog function is used to open Add Dialog Component. 
	addNewUserDailog(){
		let dialogRef : MatDialogRef<AddNewUserComponent>;
		dialogRef = this.matDialog.open(AddNewUserComponent);
		
		return dialogRef.afterClosed();
	}

//	editList function is used to open Edit Dialog Component. 
	editList(data){
		let dialogRef : MatDialogRef<EditNewUserComponent>;
		dialogRef =this.matDialog.open(EditNewUserComponent);
		dialogRef.componentInstance.data = data;
		
		return dialogRef.afterClosed();
	}

	//deleteDiaglog function is used to open the Delete Dialog Component. 
	deleteDialog( data : string ) {
		let dialogRef : MatDialogRef<DeleteDialogComponent>;
		dialogRef = this.matDialog.open(DeleteDialogComponent);
		dialogRef.componentInstance.data = data;
		
		return dialogRef.afterClosed();
	}

	//get Json file for courses module.
	getCourses () {
		return this.http.get('assets/data/courses.json').map(response => response);
	}

	//videoPlayerDialog method is used to open a video player dialog component.
	videoPlayerDialog(video : string){
		let dialogRef : MatDialogRef<VideoPlayerComponent>;
		dialogRef = this.matDialog.open(VideoPlayerComponent);

		dialogRef.componentInstance.video = video;
		return dialogRef.afterClosed();
	}

	//paymentDialog method is used to open a payment dialog component.
	paymentDialog(message : string) {
		let dialogRef : MatDialogRef<PaymentMessageComponent>;
		dialogRef = this.matDialog.open(PaymentMessageComponent);
		
		dialogRef.componentInstance.paymentMessage = message;
		return dialogRef.afterClosed();
	}
}

