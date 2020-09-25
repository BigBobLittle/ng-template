import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from 'app/_services/auth/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {

  constructor( private authService: AuthenticationService, 
               private router:Router, 
               private toastr: ToastrService) { }

  ngOnInit() {
  }

   phonenumber	:string;
	email		: string;
	password	: string;

   slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,"autoplay": true, "autoplaySpeed": 1000,"dots":false,"arrows":false};

   sessionSlider : any [] = [
      {
         image : "assets/img/login-slider1.jpg",
         name  : "Francisco Abbott",
         designation : "CEO-Gene",
         content : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
      },
      {
         image : "assets/img/login-slider2.jpg",
         name  : "Samona Brown",
         designation : "Designer",
         content : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
      },
      {
         image : "assets/img/login-slider3.jpg",
         name  : "Anna Smith",
         designation : "Managing Director",
         content : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
      }
   ]


    //register method is used to sign up on the template.
	register(value) {
      let data = {
         phonenumber: value.phonenumber,
         email: value.email,
         password: value.password
      }
		this.authService.registerUser(data).subscribe(responseData => {
            if(!responseData.success){
               this.toastr.error(responseData.response);
            }else{
               this.router.navigate(['/verify-token']);
               this.toastr.success(responseData.response);
            }
      });
	}
}
