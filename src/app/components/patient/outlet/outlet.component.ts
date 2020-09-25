
import { Component, OnInit, OnDestroy, ViewChild, HostListener, ViewEncapsulation} from '@angular/core';
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver} from "@angular/flex-layout";

import {fadeInAnimation} from "../../../_core/route-animation/route.animation"; //defualt theme animation 
import PerfectScrollbar from 'perfect-scrollbar';

import { CoreService } from '../../../_core/service/core/core.service';  //dashboard utilities as services

import { TourService } from 'ngx-tour-core';
import { BreadcrumbService } from 'ng5-breadcrumb';

import { DeviceDetectorService } from 'ngx-device-detector';
import { AuthenticationService } from 'app/_services/auth/authentication.service';
import { ChatService } from 'app/_services/chat/chat.service';
import { MainCoreService } from 'app/_services/core/core.service';
declare var require: any;
declare var Peer:any;

const screenfull = require('screenfull');



@Component({
  selector: 'ms-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
      "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})



 
export class OutletComponent implements OnInit {

   @ViewChild('myVideo') myVideo:any;

  
  root                  : any = 'ltr';
  layout                : any = 'ltr';
  currentLang           : any = 'en';
  customizerIn          : boolean = false;
  showSettings          : boolean = false;
  chatpanelOpen         : boolean = false;
  sidenavOpen           : boolean = true;
  isMobile              : boolean = false;   
  isFullscreen          : boolean = false;
  header                : string = 'Patient';
  url                   : string;
  dark                  : boolean = true;
 
  isMobileStatus        : boolean;
  sidenavMode           : string = 'side';
  popupDeleteResponse   : any;
  sidebarColor          : any;
  isSidebarFilterClass  : string;
  isHeaderFilterClass   : string;
  deviceInfo = null;
  
  @ViewChild('sidenav') sidenav;


  //!this is the core service to change the default settings.
 
 horizontalStatus : boolean = false;
 horizontalSizeStatue : boolean =  false;
profile: any;
 navigator: any;

currentUser = JSON.parse(localStorage.getItem("user"));
chatMessage;

image = "assets/img/user-1.jpg";

mode = "online";
hidden:boolean = false;


//web rtc
peer: any;
anotherId:any;
connectedId:any;


chatList : any [] = [
  {
     image : "assets/img/user-1.jpg",
     name: "John Smith",
     chat : "This is bob little",
     mode : "online"
  },
  {
     image : "assets/img/user-2.jpg",
     name: "Amanda Brown",
     chat : "A doctor here",
     mode : "online"
  },
  {
     image : "assets/img/user-3.jpg",
     name: "Justin Randolf",
     chat : "Patient Waiting",
     mode : "offline"
  },
  {
     image : "assets/img/user-4.jpg",
     name: "Randy SunSung",
     chat : "Patient ONline",
     mode : "online"
  },
  {
     image : "assets/img/user-5.jpg",
     name: "Lisa Myth",
     chat : "Last Patient",
     mode : "online"
  },
]
  

//chat service

chatUsers = [];
bobChat :[] = [];

constructor(
  public tourService: TourService, 
               private core:MainCoreService,
              // public menuItems: MenuItems, 
               private breadcrumbService: BreadcrumbService, 
              // private pageTitleService: PageTitleService, 
               //public translate: TranslateService, 
               private router: Router,
               private media: MediaObserver,
               private deviceService: DeviceDetectorService,
              // private authService : AuthService,
              // public ecommerceService : EcommerceService,
               public coreService : CoreService,
               private routes :Router,
               private activatedRoute: ActivatedRoute,
               private auth: AuthenticationService,
               private chat: ChatService
) { 
                     
  this.tourService.initialize([{
    anchorId: 'start.tour',
    content: 'Welcome to Gene admin panel!',
    placement: 'below',
    title: 'Welcome to Gene',
  },
  {
    anchorId: 'tour-search',
    content: 'Enjoying Search box with sugestion and many more things',
    placement: 'below',
    title: 'Search Box',
  },
  {
    anchorId: 'tour-full-screen',
    content: 'By pressing this button you can switch to fullscreen mode.',
    placement: 'below',
    title: 'Full Screen',
  },
  {
    anchorId: 'tour-ui',
    content: 'Show your site stats with unique designed cards',
    placement: 'below',
    title: 'Stats Cards',
  }]);

  if(window.innerWidth>959){
    this.tourService.start();
  }
 
}

ngOnInit() {

   //web rtc testing
   // No API key required when not using cloud server
   //this.peer = new Peer('someid', {host: 'localhost', port: 9000, path: '/myapp'});

  //  this.peer = new Peer({host: 'localhost', port: 3000, path: '/peerjs'});
  //  setTimeout(() => {
  //     this.connectedId = this.peer.id
  //     console.log('my id is ...'+ this.connectedId);
  //  }, 2000);
  
   
//recieve call or video from another id

// this.peer.on('connection', function(conn) {
//    conn.on('data', function(data){
//      // Will print 'hi!'
//      console.log(data);
//    });
//  }); 

 //answer video calls


//  let n = <any>navigator;
//  let video = this.myVideo.nativeElement;
//  var getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;
// this.peer.on('call', function(call) {
//   getUserMedia({video: true, audio: true}, function(stream) {
//     call.answer(stream); // Answer the call with an A/V stream.
//     call.on('stream', function(remoteStream) {
//       // Show stream in some video/canvas element.
//       video.src = URL.createObjectURL(remoteStream);
//       video.play();
//     });
//   }, function(err) {
//     console.log('Failed to get local stream' ,err);
//   });
// });

   //end of webrtc

   //get user profile
   this.auth.getProfile().subscribe(data => {
      console.log( data);
       data.response = this.profile;
      });

      //chat connected users
      
      // this.chat.getConnectedUsers().subscribe(data => {
      //   // this.chatUsers.push(data);
      //   console.log(data);
        
      //   let m = {
      //    image : "assets/img/user-1.jpg",
      //    name: data.profileName,
      //    chat : data.profileId,
      //      mode : "online"
      //   }

      //   this.chatList.push(m);
      //    console.log(this.chatList);
         
      // });

      //get connected users simplified;
      this.core.getAllUsers().subscribe(data => {
        // console.log(`this is bobchat data::: ` + data.response);
         this.bobChat = data.response;
        // this.bobChat.push(data.response);
         console.log(this.bobChat);
         
      })
}


videoCall(){ //for rtc video call element
  let n = <any>navigator;
  let video = this.myVideo.nativeElement;
   var getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;
   getUserMedia({video: true, audio: true}, function(stream) {
     var call = this.peer.call(this.chatMessage, stream);
     call.on('stream', function(remoteStream) {
       // Show stream in some video/canvas element.
       video.src = URL.createObjectURL(remoteStream);
       video.play();
     });
   }, function(err) {
     console.log('Failed to get local stream' ,err);
   });



}
//user = {name: ''};
sendChatMessage(value){

// this.chat.createUser(value.chatMessage);
//console.log(value.chatMessage);

// this.chatMessage = '';

var conn = this.peer.connect(value.chatMessage);
// on open will be launch when you successfully connect to PeerServer
conn.on('open', function(){
  // here you have conn.id
  conn.send('hi!');
});




}


ngOnDestroy() {}





// utitlity functions for dashboard

/**
     * toggleFullscreen method is used to show a template in fullscreen.
     */
    toggleFullscreen() {
    	if (screenfull.enabled) {
    		screenfull.toggle();
      		this.isFullscreen = !this.isFullscreen;
    	}
  	}
   
   /**
     * customizerFunction is used to open and close the customizer.
     */
   customizerFunction() {
      this.customizerIn = !this.customizerIn;
   }

   /**
     * addClassOnBody method is used to add a add or remove class on body.
     */
   addClassOnBody(event) {
      var body = document.body;
      if(event.checked){
         body.classList.add("dark-theme-active");
      }else{
         body.classList.remove('dark-theme-active');
      }
   }

   /**
     * addMenuItem is used to add a new menu into menu list.
     */
   addMenuItem(): void {
      // this.menuItems.add({
      //    state: 'pages',
      //    name: 'GENE MENU',
      //    type: 'sub',
      //    icon: 'trending_flat',
      //    children: [
      //       {state: 'blank', name: 'SUB MENU1'},
      //       {state: 'blank', name: 'SUB MENU2'}
      //    ]
      // });
   }

   /**
     * changeRTL method is used to change the layout of template.
     */
   changeRTL(isChecked) {
      if(isChecked){
         this.layout = "rtl"
      }  
      else {
         this.layout = "ltr"
      }
   }

   /**
     * toggleSidebar method is used a toggle a side nav bar.
     */
   toggleSidebar() {
      this.coreService.sidenavOpen = !this.coreService.sidenavOpen;
   }

   /**
     * logOut method is used to log out the  template.
     */
   logOut() {    
     this.auth.logout();
     this.router.navigate(['/']);
   }

   /**
     * onDelete function is used to open the delete dialog. 
     */
   onDelete(cart){
      // this.ecommerceService.deleteDialog("Are you sure you want to delete this product permanently?")
      //    .subscribe(res=> {this.popupDeleteResponse = res},
      //       err => console.log(err),
      //       () => this.getPopupDeleteResponse(this.popupDeleteResponse,cart)
      //    );
   }

   /**
     * getPopupDeleteResponse is used to delete the cart item when reponse is yes.
     */
   getPopupDeleteResponse(response:any,cart){
      if(response == "yes")
         { 
          //  this.ecommerceService.localStorageDelete(cart,'cartProduct'); 
         }
   }

  

   /**
     *chatMenu method is used to toggle a chat menu list.
     */
   chatMenu() {
      document.getElementById("gene-chat").classList.toggle("show-chat-list");
   }

   /**
     * onChatOpen method is used to open a chat window.
     */
   //! onChatOpen() {
   //    document.getElementById('chat-open').classList.toggle('show-chat-window');
   // }

   onChatOpen() {
      document.getElementById('chat-open').classList.toggle('show-chat-window');
   }

   /**
     * onChatWindowClose method is used to close the chat window.
     */  
   chatWindowClose(){
      document.getElementById("chat-open").classList.remove("show-chat-window");
   }

   /**
     * changeLayout method is used to change the vertical layout to horizontal layout.
     */
  //  changeLayout() {
  //     this.coreService.horizontalStatus = true;
  //     if(window.innerWidth<=959){
  //        this.coreService.horizontalSizeStatue = false;
  //     }
  //     else{
  //        this.coreService.horizontalSizeStatue = true;
  //     }
  //  }


 



}
