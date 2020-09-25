import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { loginInterface, verificationInterface, registerUserInterface, profileInterface } from 'app/_interfaces/all';
//import { JwtHelperService } from '@auth0/angular-jwt';





@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
  public apiUrl = "https://bigboblittle.herokuapp.com/teleApp/v1";
 // apiUrl = 'http://localhost:3000/teleApp/v1'
  authToken: any;
  user: any;

  constructor( private http:HttpClient ) { } //public jwtHelper: JwtHelperService

  loginUser(value):Observable<loginInterface> {
    return this.http.post<loginInterface>(this.apiUrl + '/user/login', value);
  }
  

  // ***************
  // verify the users phone with a token after signup
  // **************

  verifyToken(token):Observable<verificationInterface> {
    return  this.http.get<verificationInterface>(this.apiUrl + '/user/verifytoken/'+ token);
  }

  // ***********
  // user registration 
  // *************

   registerUser(value): Observable<registerUserInterface>{
    return this.http.post<registerUserInterface>(this.apiUrl + '/user/register', value);
  }


  getProfile():Observable<profileInterface>{
    return this.http.get<profileInterface >(this.apiUrl + '/user/profile');
  }

  //**********
  // save user jwt-token,user
  //

   storeUserToken(token,user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    //this.authToken = token;
    //this.user = user;
  }

//************
//Retrieve user token
// */
 getToken(){
  return localStorage.getItem('token');
}

//************
// Load user role
// */
getUserRole(){
  return localStorage.getItem('user');
}



//************Logout */

logout(){
 let token = localStorage.removeItem('token');
 let user = localStorage.removeItem('user');

 return [token, user];

}


//*** check if user is loggedIn */

public isLoggedIn():boolean {
  return localStorage.getItem('token') !== null;
}




}
