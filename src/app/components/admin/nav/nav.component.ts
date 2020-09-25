import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TourService } from 'ngx-tour-core';
import { BreadcrumbService } from 'ng5-breadcrumb';
import { Router, ActivatedRoute } from '@angular/router';
import { MediaObserver } from '@angular/flex-layout';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CoreService } from 'app/_core/service/core/core.service';
import { fadeInAnimation } from 'app/_core/route-animation/route.animation';
import { AuthenticationService } from 'app/_services/auth/authentication.service';
declare var require: any;

const screenfull = require('screenfull');

@Component({
  selector: 'ms-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
      "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class NavComponent implements OnInit {

 
  root                  : any = 'ltr';
  layout                : any = 'ltr';
  currentLang           : any = 'en';
  customizerIn          : boolean = false;
  showSettings          : boolean = false;
  chatpanelOpen         : boolean = false;
  sidenavOpen           : boolean = true;
  isMobile              : boolean = false;   
  isFullscreen          : boolean = false;
  header                : string = 'Admin';
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
];

 currentUser = JSON.parse(localStorage.getItem("user"));



 
 



constructor(
  public tourService: TourService, 
              // public menuItems: MenuItems, 
               private breadcrumbService: BreadcrumbService, 
              // private pageTitleService: PageTitleService, 
               //public translate: TranslateService, 
               private router: Router,
               private media: MediaObserver,
               private deviceService: DeviceDetectorService,
              private auth: AuthenticationService,
              // public ecommerceService : EcommerceService,
               public coreService : CoreService,
               private routes :Router,
               private activatedRoute: ActivatedRoute,
               private authService : AuthenticationService
) { 
        //console.log(this.currentUser);
                     
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

ngOnInit() {}


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
   onChatOpen() {
      document.getElementById('chat-open').classList.toggle('show-chat-window');
   }

   /**
     * onChatWindowClose method is used to close the chat window.
     */  
   chatWindowClose(){
      document.getElementById("chat-open").classList.remove("show-chat-window");
   }



}
