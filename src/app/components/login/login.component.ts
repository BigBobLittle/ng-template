import { Component, OnInit, Directive } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {AuthenticationService} from '../../_services/auth/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class LoginComponent implements OnInit {

  
  constructor( private authService: AuthenticationService,
   
   private router:Router, private toastr:ToastrService) { }

  ngOnInit() {
  }

  phonenumber : string = "0543892565"; //eg. 0541234567
  password : string = "pAssw0rd@";

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,"autoplay": true, "autoplaySpeed": 1000,"dots":false,"arrows":false};

  sessionSlider : any [] = [
    { 
       image : "assets/img/login-slider1.jpg",
       name  : "Francisco Abbott",
       designation : "Need to see a doctor",
       content : " book your next appointment easy way online"
    },
    {
       image : "assets/img/login-slider2.jpg",
       name  : "Samona Brown",
       designation : "Get well sooner",
       content : "See your doctor sooner so that you can get back to your feet faster"
    },
    {
       image : "assets/img/login-slider3.jpg",
       name  : "Anna Smith",
       designation : "Health Info",
       content : "Request repeat prescription and have access to your health records electronically"
    }
 ]


 // when email and password is correct, user logged in.
 login(value) {
  // console.log(value.email);
   let user = {
               phonenumber: value.phonenumber,
               password:value.password
            }
   
  this.authService.loginUser(user).subscribe(data => {
    // console.log(data);
    if(!data.success){
       this.toastr.error(data.response);
    } 

    else if(!data.success && data.statusCode == 'VERIFY-PHONENUMBER'){
      this.toastr.error(data.response);
      this.router.navigate(['/verify-token']); //route to verify phoneumber
     
    }
    else{
     // console.log(data);
      this.toastr.success(data.response);
      this.authService.storeUserToken(data.token, data.user);

      //this.router.navigate(['/']); //to dahboard
     // this.newMethod(data);
     this.nav(data, 'Patient','patient');
     this.nav(data, 'Doctor', 'doctor');
     this.nav(data, 'Admin','admin');
      
    }   
  });
}


private nav(data, roleType, whereToRoute){
if(data.user.role  == roleType){
  this.router.navigate([`/${whereToRoute}`]);
}
}

 
}
