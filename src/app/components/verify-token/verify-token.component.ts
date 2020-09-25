import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/_services/auth/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ms-verify-token',
  templateUrl: './verify-token.component.html',
  styleUrls: ['./verify-token.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VerifyTokenComponent implements OnInit {

  code: string;
  constructor( private router:Router, 
              private authService: AuthenticationService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }


  // when submit button click, router navigates to a home page.
  onSubmit() {
    this.authService.verifyToken(this.code).subscribe( data => {
      //console.log(data);
      if(!data.success){
        this.toastr.error(data.response);
      }else{
        this.toastr.success(data.response);
        this.router.navigate(['/']);  //change this to login later on
      }
      
    });
    
  }
}
