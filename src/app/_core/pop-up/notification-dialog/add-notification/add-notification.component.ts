import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { AdminService } from 'app/_services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ms-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss']
})
export class AddNotificationComponent implements OnInit {

  

  
  addNewUserForm    : FormGroup;
  emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  data : any;
  

  constructor( private formBuilder : FormBuilder,
    private adminService: AdminService,
    public toastr: ToastrService,
    public dialogRef    : MatDialogRef<AddNotificationComponent>) { }


  ngOnInit() {
		// this.addNewUserForm = this.formBuilder.group({
		// 	firstName	 : ['',[Validators.required]],
		// 	lastName 	 : ['',[Validators.required]],
		// 	emailAddress : ['',[Validators.required,Validators.pattern(this.emailPattern)]],
		// 	accountType  : ['',[Validators.required]]
    // })

    this.addNewUserForm = this.formBuilder.group({
      body: ['', [Validators.required]],
      to: ['', [Validators.required] ],
      type: ['', [Validators.required]]
    })
    

    // if(this.data){
    //   this.addNewUserForm.patchValue({
    //     body    : this.data.body,
    //     to		 : this.data.to,
    //     type : this.data.type,
    //    // accountType  : this.data.accountType
    //   });
    // }
    
	}


 
  // onFormSubmit method is submit a add new user form.
	onFormSubmit(){
    // console.log('add patient component is clicked');
    // console.log(this.addNewUserForm.value);
    this.adminService.createNotification(this.addNewUserForm.value).subscribe(data => {
      data.success ? this.toastr.success(data.response) : this.toastr.error(data.response);
    })
    
    
		this.dialogRef.close(this.addNewUserForm.value);
	}
}
