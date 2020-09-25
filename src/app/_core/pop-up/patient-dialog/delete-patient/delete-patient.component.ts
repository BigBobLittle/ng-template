import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'ms-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss']
})
export class DeletePatientComponent implements OnInit {

  data : string;
  constructor(public dialogRef : MatDialogRef<DeletePatientComponent>) { }

  ngOnInit() {
  }

  // yes method is used to close the delete dialog and send the response "yes".
	yes(){
		this.dialogRef.close("yes");
  }
  
}
