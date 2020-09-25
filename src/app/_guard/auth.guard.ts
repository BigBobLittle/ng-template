import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'app/_services/auth/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate { //, CanActivateChild, CanLoad

  constructor(private auth: AuthenticationService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


     // return this.auth.isLoggedIn();
     const currentUser= this.auth.getToken();
     const currentUserRole = JSON.parse(this.auth.getUserRole());
    //route.data.roles && route.data.roles.indexOf(currentUser.role) === -1
      if(currentUser  ){
        //means user login so retrun true
        if(next.data.roles && next.data.roles.indexOf(currentUserRole.role) === -1){
                          // role not authorised so redirect to home page
                          this.router.navigate(['/']);
                          return false;
           

        }
        return true;
      }

      //not Logged In, redirect to login page with rterun url
      this.router.navigate(['/'], {queryParams:{returnUrl: state.url}});
    return false;
  }

  // canActivateChild(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
}
