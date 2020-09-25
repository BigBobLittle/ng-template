import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'ms-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.scss']
})
export class DeleteDoctorComponent implements OnInit {

 
  data : string;
  constructor(public dialogRef : MatDialogRef<DeleteDoctorComponent>) { }

  ngOnInit() {
  }

  // yes method is used to close the delete dialog and send the response "yes".
	yes(){
		this.dialogRef.close("yes");
  }

}
