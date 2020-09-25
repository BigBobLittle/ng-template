import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { AuthenticationService } from 'app/_services/auth/authentication.service';
import { Router } from '@angular/router';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService, private router: Router) {}

  //private jwtHelperService: JwtHelperService = new JwtHelperService({ tokenGetter: this.auth.getToken });


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let currentUser = this.auth.getToken;
    if(currentUser){
      request = request.clone({setHeaders: {
        // Authorization: `Bearer ${this.auth.getToken()}`
        authorization: `${this.auth.getToken()}`
       // console.log(this.auth);
        
      }});
    }
   

  
    

   // return next.handle(request);

   return next.handle(request).do((event: HttpEvent<any>) => {
    if (event instanceof HttpResponse) {
      // do stuff with response if you want
      console.log('token might not be expired ...interceptor');
    }
}, (err: any) => {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        // redirect to the login route
        // or show a modal
        console.log('token might be expired ...interceptor');
        
        this.auth.logout();
        this.router.navigateByUrl('/');
      ///  this.router.navigate(['/']);

      }
    }
  });
  
   }



}