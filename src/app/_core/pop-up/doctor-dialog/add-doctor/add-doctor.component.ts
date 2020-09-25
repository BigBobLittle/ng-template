import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AuthenticationService } from 'app/_services/auth/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  addNewUserForm    : FormGroup;
  emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  data : any;


  constructor(private formBuilder : FormBuilder,
    private auth: AuthenticationService,
    private toastr: ToastrService,
    private router: Router,
    public dialogRef    : MatDialogRef<AddDoctorComponent>) { }

 
    ngOnInit() {
      this.addNewUserForm = this.formBuilder.group({
        firstName	 : ['',[Validators.required]],
        lastName 	 : ['',[Validators.required]],
        emailAddress : ['',[Validators.required,Validators.pattern(this.emailPattern)]],
       role : ['Doctor',[Validators.required]],
       phonenumber: ['', [Validators.required]],
       password: ['', [Validators.required]],
       specialization: ['', [Validators.required]]
      })
      
  
      if(this.data){
        this.addNewUserForm.patchValue({
          firstName    : this.data.firstName,
          lastName		 : this.data.lastName,
          emailAddress : this.data.emailAddress,
         role : this.data.role,
         phonenumber: this.data.phonenumber,
         password: this.data.password,
         specialization: this.data.specialization
        });
      }
      
    }
  
  
   
    // onFormSubmit method is submit a add new user form.
    onFormSubmit(){
      let frm = this.addNewUserForm.value;
      let data = {
        firstName: frm.firstName,
        lastName: frm.lastName,
        email: frm.emailAddress,
        role: frm.role,
        phonenumber: frm.phonenumber,
        password: frm.password,
        specialization: frm.specialization

      }
     // console.log('add patient component is clicked' + data.firstName);
     this.dialogRef.close(this.addNewUserForm.value);
     this.auth.registerUser(data).subscribe(res => {
       this.router.navigate(['/admin']);
      res.success ? this.toastr.success(res.response) : this.toastr.error(res.response);
     });
      
     
    }

}
