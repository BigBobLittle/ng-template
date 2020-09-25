import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fadeInAnimation } from 'app/_core/route-animation/route.animation';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import {AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';

import { PatientService } from 'app/_services/patient/patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ms-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
     "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class BookAppointmentComponent implements OnInit {

//   {{ dateObj | date }}               // output is 'Jun 15, 2015'
// {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
// {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
// {{ dateObj | date:'mmss' }}        // output is '43:11'


  doctorsAndSpecialization:Object[] = [];
  myAppointments:Object[] = [];  //users appointment




  selectedIndex: number = 0;

  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
        bodyBackgroundColor: '#424242',
        buttonColor: '#fff'
        
    },
    dial: {
        dialBackgroundColor: '#555',
    },
    clockFace: {
        clockFaceBackgroundColor: '#555',
        clockHandColor: '#9fbd90',
        clockFaceTimeInactiveColor: '#fff'
    }
};

  constructor( private _formBuilder: FormBuilder, private patientService:PatientService,
            private toastr:ToastrService) { }



  formGroup: FormGroup;

  
 
  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

 

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
         
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          age: ['', Validators.required],
          doctor: ['', Validators.required],
       
        }),
        this._formBuilder.group({
        
         date: ['', Validators.required],
         from: ['', Validators.required],
         to: ['', Validators.required],
         note: ['', Validators.required]
        }),

        // this._formBuilder.group({
        //   momoName: ['', Validators.required],
        //  momoPhonenumber: ['', Validators.required],
         
        //  }),
      ])
    });

   
    //get all doctors and specialization
    this.patientService.getDoctorsAndSpecialization().subscribe(data => {
      // this.doctorsAndSpecialization.push(data.response);
     // this.doctorsAndSpecialization =data.response;

     // m = data.response;
     data.response.forEach(element => {
      console.log(`specialization` + element);
      this.doctorsAndSpecialization.push(element);

     });
     
     
     //getAppointments and show on frontend if a user successfully book appointment
     this.patientService.getUserAppointment().subscribe(data => {
     // this.myAppointments = data.response;
     data.response.forEach(element => {
       this.myAppointments.push(element);
     });
     });
      //console.log('doctor and specs ' + Object.keys(this.doctorsAndSpecialization[0]));
      
    });

   
      
   // console.log(this.doctorsAndSpecialization);
  }

  submit(){
   // let nameGroup = this.formGroup.value.formArray[0];
   let userInformation = this.formGroup.value.formArray[0];
   let appointmentTime = this.formGroup.value.formArray[1];
   //let paymentInformation = this.formGroup.value.formArray[2];

   let finalObject = {
   
      firstName: userInformation.firstName,
      lastName: userInformation.lastName,
      age: userInformation.age,
      doctor: userInformation.doctor,
     // appointmentInformation
      date: appointmentTime.date,
      from: appointmentTime.from,
    to: appointmentTime.to,
   note: appointmentTime.note,

      //paymentInformation
    // momoName: paymentInformation.momoName,
    // momoPhonenumber: paymentInformation.momoPhonenumber
 }
    
 //console.log(this.formGroup.value.formArray);  //nameGroup
 //console.log(finalObject);
 this.patientService.bookAppointment(finalObject).subscribe(data => {
  // console.log(data);
   data.success ? this.toastr.success(data.response) : this.toastr.error(data.response);
 
  
 });
  
  }



  
   /**
     * nextStep method is used to go to the next step of form.
     */
    nextStep() {
      this.selectedIndex += 1;
   }

   /**
     * previousStep method is used to go to the previous step of form.
     */
   previousStep() {
      this.selectedIndex -= 1;
   }   

//    Appointment(value){

//     console.log('value of fullname' + value.fullname);

// }

 doctorEvent(value:string){
  console.log(value);
  } 


}
