import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'ms-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  addNewUserForm    : FormGroup;
  emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  data : any;
  

  constructor( private formBuilder : FormBuilder,
    public dialogRef    : MatDialogRef<AddPatientComponent>) { }


  ngOnInit() {
		this.addNewUserForm = this.formBuilder.group({
			firstName	 : ['',[Validators.required]],
			lastName 	 : ['',[Validators.required]],
			emailAddress : ['',[Validators.required,Validators.pattern(this.emailPattern)]],
			accountType  : ['',[Validators.required]]
    })
    

    if(this.data){
      this.addNewUserForm.patchValue({
        firstName    : this.data.firstName,
        lastName		 : this.data.lastName,
        emailAddress : this.data.emailAddress,
        accountType  : this.data.accountType
      });
    }
    
	}


 
  // onFormSubmit method is submit a add new user form.
	onFormSubmit(){
    console.log('add patient component is clicked');
    
		this.dialogRef.close(this.addNewUserForm.value);
	}

}
