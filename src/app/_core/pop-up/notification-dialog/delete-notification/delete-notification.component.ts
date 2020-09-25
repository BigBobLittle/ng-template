import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DeletePatientComponent } from '../../patient-dialog/delete-patient/delete-patient.component';
import { AdminService } from 'app/_services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-delete-notification',
  templateUrl: './delete-notification.component.html',
  styleUrls: ['./delete-notification.component.scss']
})
export class DeleteNotificationComponent implements OnInit {

 

  data : any;
  constructor(public dialogRef : MatDialogRef<DeleteNotificationComponent>,
    private adminService: AdminService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
  // if(this.data){
  //   console.log(Object.keys(this.data));
    
  // }
  }

  // yes method is used to close the delete dialog and send the response "yes".
	yes(){

    this.dialogRef.close("yes");
   // console.log(this.data._id);
    
    // this.adminService.deleteNotification({_id:this.data._id}).subscribe(res => {

      
    //   this.toastr.success('Notification deleted');
    //   this.router.navigate(['/admin']);
    // })
    
    
   
	
  }

}
