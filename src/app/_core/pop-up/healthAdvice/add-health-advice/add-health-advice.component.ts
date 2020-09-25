import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'app/_services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-add-health-advice',
  templateUrl: './add-health-advice.component.html',
  styleUrls: ['./add-health-advice.component.scss']
})
export class AddHealthAdviceComponent implements OnInit {

  
	addNewUserForm    : FormGroup;
	emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

	constructor( private formBuilder : FormBuilder,
					private adminService: AdminService,
					private toastr: ToastrService,
					private router: Router,
					 public dialogRef    : MatDialogRef<AddHealthAdviceComponent>) { }

	ngOnInit() {
		this.addNewUserForm = this.formBuilder.group({
			advice	 : ['',[Validators.required]],
			type 	 : ['',[Validators.required]],
			// emailAddress : ['',[Validators.required,Validators.pattern(this.emailPattern)]],
			// accountType  : ['',[Validators.required]]
		})
	}

	// onFormSubmit method is submit a add new user form.
	onFormSubmit(){
		//console.log(this.addNewUserForm.value);
		this.adminService.postDialyHealthAdvice(this.addNewUserForm.value).subscribe(res => {
			this.router.navigate(['/admin']);
			this.toastr.success(res.response);
		});
		
		this.dialogRef.close(this.addNewUserForm.value);
	}

}
