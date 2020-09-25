import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { fadeInAnimation } from 'app/_core/route-animation/route.animation';
import { ChatService } from 'app/_services/chat/chat.service';
import shortid = require('shortid');
import { log } from 'util';

//declare var Peer;

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
  //  @ViewChild('myvideo') myVideo:any; //videochat

  //  videoElement: boolean = false;

   //?web rtc
// peer: any;
// anotherId:any;
// connectedId:any;
// currentUser = JSON.parse(localStorage.getItem("user"));


  selectedChat: any;
  newMessage: string;

  allUsers:any = [];
  myConversation: any = [];
  bobMessage: any  = [];
  
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
   private chat: ChatService
    ) {

      console.log('bobMessage .........................');
   console.log(this.bobMessage);
   

//

//Gosh, you’ve been looking at your screen for a while. Take a snack break — the Web will be here when you get back. :)

 
  }

  
  ngOnInit() {

   //getAllUsers on the system
   this.chat.getAllUsers().subscribe(data =>  {
      this.allUsers = data.response;
    //  console.log('allUsers array:::::' + this.allUsers);
      
   });
    
this.chat.getChatResponse().subscribe( data => {
   console.log('chat response..' + data.message);
  
   this.bobMessage.push({
      from: 'them',
      msg: data.message,
      time: '2 min ago'
   });
});


 //getConversations snippet a user is involved
 this.chat.getConversations().subscribe(data => {

   let m =  data.response;
   m.forEach(element => {

      element.forEach(data => {
      this.myConversation.push(data);
      // this.myConversation = data;
      });
   });
});

//get the actual chat message itself

this.chat.getAllUserMessages().subscribe(data => {
   //this.bobMessage = data.response;
   let m =  data.response;
   m.forEach(element => {
      this.bobMessage.push(element);
    // console.log(this.bobMessage);
      
   });
  // console.log('this is my conversation ' + Object.keys(this.bobMessage[0]));
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
//   onSelect(chat: Object[]): void {
//      this.selectedChat = chat;

//   }

myMessage; myCon; otherUser; roomName;

onSelect(allUsers: []): void {
   //console.log('object keys ::::::: ' + this.otherUser.phonenumber + 'currentUsers:::'+ currentUser.phone);

let currentUser = JSON.parse(localStorage.getItem('user'));  //current user logedIn
 this.otherUser = allUsers;  //phonenumbers of all users 'currentUser' will click on
let  currentPhone = currentUser.phone;
//   // this.selectedChat = allUsers;
  this.roomName = currentUser.phone.concat(this.otherUser.phonenumber);
//this.roomName = shortid.generate();
//   console.log('object keys ::::::: ' + this.roomName);

  this.chat.joinRoom({otherParticipant: this.otherUser.phonenumber , me:currentPhone, room: this.roomName});
 

 
}





videoCall(){

}

  /**
    * send method is used to send a new message. 
    */
  send() {
   let currentUser = JSON.parse(localStorage.getItem('user'));
    if (this.newMessage) {
     
      this.chat.chatting({otherParticipant: this.otherUser.phonenumber , me:currentUser.phone, message:this.newMessage});
   //    this.chat.chatting(this.newMessage);
   //      // this.messages.push({
   //      //    msg: this.newMessage,
   //      //    from: 'me',
   //      //    time: 'now'
   //      // });

   this.bobMessage.push({
      msg: this.newMessage,
      from: 'me',
      time: 'a min ago'
   });

       this.newMessage = '';   
     }
  }


 
  /**
    * clearMessage method is to clear the chat.
    */
  clearMessages() {
     this.messages.length = 0;
  }

}
