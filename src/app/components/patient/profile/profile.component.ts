import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/_core/route-animation/route.animation';
import { PatientService } from 'app/_services/patient/patient.service';

@Component({
  selector: 'ms-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
},
animations: [ fadeInAnimation ]
})
export class ProfileComponent implements OnInit {
  public patient;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatientProfile().subscribe(data => {
      this.patient = data.user;
     // console.log(this.profile);
      
    });
  }



}
