import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fadeInAnimation } from 'app/_core/route-animation/route.animation';
import { DoctorService } from 'app/_services/doctor/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { ChatService } from 'app/_services/chat/chat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ms-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  encapsulation: ViewEncapsulation.None,
   host: {
      "[@fadeInAnimation]": 'true'
   },
   animations: [ fadeInAnimation ]
})
export class AppointmentComponent implements OnInit {

upcomingAppointment : Object[] = [];  
selectedAppointment :any ;  //pick a single appointment for toggling, used in *accept* fxn
status:any = 'Accept';  //change the status of appointment from 'accept to accepted' when state changed;

  constructor(
    private docService: DoctorService, 
    private toastr: ToastrService,
    private router: Router,
    private chatService: ChatService) { }

  ngOnInit() {

    //1. get doctors appointment and push them to the table where he can slide to confirm or deny
    this.docService.upcomingAppointment().subscribe(data => {

      data.response.forEach(element => {
        this.upcomingAppointment.push(element);
      //  console.log(element);
        
      });
    });

    // //2. get all accepted appointments and show them in consult' as list for chat
    // this.docService.acceptedAppointment().subscribe(data => {
    //   console.log(data);
      
    // });
  }


  accept(upcomingAppointment:Object[]){
    this.selectedAppointment= upcomingAppointment;

     //create a chatroom with participants as the doctorId and patientId
let  data = {doctor:this.selectedAppointment.doctor, patient:this.selectedAppointment.user};



    //console.log(Object.keys(this.selectedAppointment));
    this.docService.acceptOrRejectAppointment({id:this.selectedAppointment._id}).subscribe(data => {
     // console.log(data);
     this.router.navigate(['/doctor/consult']);
      this.toastr.success(data.response);
    });
    
 
  //!moved this logic to the backend, creates a new room and default doctor message when doc accept appointment
  //!in appointment route
  // this.docService.createChatRoom(data).subscribe(data => {
  //   console.log(data.response, data.participants);
    
  // });

  //join them to chat room and send first message
  this.chatService.joinRoom(data);

  //send first message
  this.chatService.chatting(data);

  }

  
}
