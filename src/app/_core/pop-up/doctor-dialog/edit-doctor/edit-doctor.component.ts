import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AdminService } from 'app/_services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {
	form : FormGroup
	data : any;

	constructor( public formBuilder : FormBuilder,
								private adminService: AdminService,
								private toastr: ToastrService,
								private router: Router,
					 public dialogRef : MatDialogRef<EditDoctorComponent>) { }

	ngOnInit() 
		{
		this.form = this.formBuilder.group({
			phonenumber		: [],
			email 		: [],
			createdAt   : [],
			role 	: [],
			_id: []
		});

		if(this.data){
			this.form.patchValue({
				phonenumber    : this.data.phonenumber,
				email		 : this.data.email,
				role : this.data.role,
				createdAt  : this.data.createdAt,
				_id: this.data._id
			});
		}
	}

	/**
	  *onFormSubmit method is used to submit the edit new user dialaog form and close the dialog.
	  */
	onFormSubmit(){
	//	console.log( this.form.value._id);

    this.adminService.updateDoctor(this.form.value).subscribe(data => {
			this.router.navigate(['/admin']);
		this.toastr.success(data.response) ;
		});

		this.dialogRef.close(this.form.value);
		
	}


}
