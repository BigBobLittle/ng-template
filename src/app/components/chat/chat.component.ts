import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fadeInAnimation } from 'app/_core/route-animation/route.animation';
import { DoctorService } from 'app/_services/doctor/doctor.service';
import { ChatService } from 'app/_services/chat/chat.service';

@Component({
  selector: 'ms-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
     "[@fadeInAnimation]": 'true'
  },
 animations: [ fadeInAnimation ]
})
export class ChatComponent implements OnInit {

  selectedChat: any;
  newMessage: string;
  myAppointment = [];  //holds appointment
  bobChatMessage:Object[] = []; //when chatting
  chatImage = "assets/img/register-user-1.jpg";
  hideChatArea:boolean = true; //hide the chat main component until it is click

  
  chats: Object[] = [{
        from: 'Bobby Sullivan',
        photo: 'assets/img/user-11.jpg',
        subject: 'Refferal Module',
     }, {
        from: 'Bryan Morgan',
        photo: 'assets/img/user-2.jpg',
        subject: 'Good Luck',
     }, {
        from: 'Phillip Carroll',
        photo: 'assets/img/user-3.jpg',
        subject: 'Sign In Process',
     }, {
        from: 'Brandon Boyd',
        photo: 'assets/img/user-4.jpg',
        subject: 'New Offers',
     }, {
        from: 'Laura Mason',
        photo: 'assets/img/user-5.jpg',
        subject: 'Thanks Guys!',
     }, {
        from: 'Barbara Chapman',
        photo: 'assets/img/user-6.jpg',
        subject: 'Happy with Service',
     }, {
        from: 'Doris Baker',
        photo: 'assets/img/user-7.jpg',
        subject: 'Best Deals',
     }
  ];

  messages: Object[] = [{
        from: 'them',
        msg: 'Need help in Refferal Module',
        time : '5 min ago'
     }, {
        from: 'me',
        msg: 'What kind of issue you faced?',
        time : '4 min ago'
     },{
        from: 'them',
        msg: 'By refferal invite, my friend not get refferal offer',
        time : '2 min ago'
     }, {
        from: 'them',
        msg: 'and I have not received any notification',
        time : '2 min ago'
     }
  ];

  constructor(
   // private pageTitleService: PageTitleService
   private docService: DoctorService,
   private chat: ChatService
    ) {
     this.selectedChat = this.chats[1];
  }

  ngOnInit() {
    // this.pageTitleService.setTitle("Chat");
     //2. get all accepted appointments and show them in consult' as list for chat
     this.docService.acceptedAppointment().subscribe(data => {
   data.response.forEach(element => {
        this.myAppointment.push(element); 
     
      });
     });

     //get chat response
     this.chat.getTheChatResponse().subscribe(data => {
        this.bobChatMessage.push(data.message);
         console.log(this.bobChatMessage);
      //   console.log('response from chat' + data.message.body);
        
      //   //console.log(Object.keys(data));
        
     });


     
  }

  /**
    * isOver method is used to open the chat side nav bar 
    * according to window width
    */
  isOver(): boolean {
     return window.matchMedia(`(max-width: 960px)`).matches;
  }

  /**
    * onSelect method is used to select the paticular chart.
    */
  /**
    * onSelect method is used to select the paticular chart.
    */
   onSelect(myAppointment: Object[]): void {
      this.selectedChat = myAppointment;
      let data = {doctor: this.selectedChat.doctor, patient: this.selectedChat.user};
     
      this.chat.joinRoom(data);

      this.hideChatArea = false;
      // this.chat.getConsultationMessages(data).subscribe(data => {
      //    this.bobChatMessage.push(data.response)
      //    console.log(this.bobChatMessage);
         
      // })
    //  console.log(this.selectedChat);
      
   }

  /**
    * send method is used to send a new message. 
    */
   
author;from; to;
  send() {
   let currentUser = JSON.parse(localStorage.getItem('user'));
  let  role = currentUser.role;
  if(role == 'Doctor'){
    this.author = this.selectedChat.doctor,
    this.from = 'Doctor',
    this.to = 'Patient'

  }else{
    this.author = this.selectedChat.user;
    this.from = 'Patient',
    this.to = 'Doctor'
  }

  let chatObject =  { 
     doctor: this.selectedChat.doctor,
       patient: this.selectedChat.user,
        message:this.newMessage, 
        author:this.author,
        from: this.from,
        to: this.to
      }
  
     if (this.newMessage) {
       // console.log(chatObject);
        this.chat.chatting(chatObject);
      this.newMessage = '';  
     }
  }

  sender(){
    // console.log(this.newMessage);
     
     this.chat.testSocketInRoute({room:'socket.room', message:this.newMessage});
     this.newMessage = '';
  }
  /**
    * clearMessage method is to clear the chat.
    */
  clearMessages() {
     this.messages.length = 0;
  }

}
