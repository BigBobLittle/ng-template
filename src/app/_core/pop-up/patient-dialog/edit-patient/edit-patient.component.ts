import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'ms-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

 
	form : FormGroup
	data : any;

	constructor( public formBuilder : FormBuilder,
					 public dialogRef : MatDialogRef<EditPatientComponent>) { }

	ngOnInit() 
		{
		this.form = this.formBuilder.group({
			phonenumber		: [],
			email 		: [],
			createdAt   : [],
			role 	: []
		});

		if(this.data){
			this.form.patchValue({
				phonenumber    : this.data.phonenumber,
				email		 : this.data.email,
				role : this.data.role,
				createdAt  : this.data.createdAt
			});
		}
	}

	/**
	  *onFormSubmit method is used to submit the edit new user dialaog form and close the dialog.
	  */
	onFormSubmit(){
    console.log('ive been submitted'+ this.form.value.phonenumber);
    
		this.dialogRef.close(this.form.value);
	}

}
