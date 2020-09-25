import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { EditPatientComponent } from '../../patient-dialog/edit-patient/edit-patient.component';
import { AdminService } from 'app/_services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-edit-notification',
  templateUrl: './edit-notification.component.html',
  styleUrls: ['./edit-notification.component.scss']
})
export class EditNotificationComponent implements OnInit {

  

  hideId:boolean = true;
	form : FormGroup
	data : any;

	constructor( public formBuilder : FormBuilder,
				 private adminService: AdminService,
				 private toastr: ToastrService,
				 private router: Router,
					 public dialogRef : MatDialogRef<EditPatientComponent>) { }

	ngOnInit() 
		{
		this.form = this.formBuilder.group({
			body		: [],
			to 		: [],
			createdAt   : [],
			type 	: [],
			_id:[]
		});

		if(this.data){
			this.form.patchValue({
				body    : this.data.body,
				to		 : this.data.to,
				type : this.data.type,
				createdAt  : this.data.createdAt,
				_id : this.data._id
			});
		}

		//console.log(this.data);
		
	}

	/**
	  *onFormSubmit method is used to submit the edit new user dialaog form and close the dialog.
	  */
	onFormSubmit(){
	 // console.log('ive been submitted'+ this.form.value.body);
	//	 console.log(this.form.value);
	 
		this.adminService.updateNotification(this.form.value).subscribe(res => {
			//console.log(res.result);
			
			
			this.router.navigate(['/admin']);
			this.toastr.success(res.response);
			// this.router.routeReuseStrategy.shouldReuseRoute = function () {
			// 	return true;
			//   };

		//	this.router.onSameUrlNavigation = 'reload';
			//this.router.navigate(['/admin/notification', {onSameUrlNavigation:'reload'}]);
		})

		this.dialogRef.close(this.form.value);
	}


}
