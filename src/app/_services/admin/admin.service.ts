import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { userInterface, userStatistics, getPatientAdminDoctor, doctorInterface } from 'app/_interfaces/all';
import { createNotification, retrieveNotifications, updateNotifications, deleteNotifications, dialyHealthAdvice, postHealthAdvice } from 'app/_interfaces/admin';
import { updateDoctorInfo } from 'app/_interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public apiUrl = "https://bigboblittle.herokuapp.com/teleApp/v1/admin";
 //public apiUrl = 'http://localhost:3000/teleApp/v1/admin';
  constructor( private http: HttpClient) { }

  getAllUsers(): Observable<userInterface >{
  return this.http.get<userInterface>(`${this.apiUrl}/getallusers`);
  }

  getStatistics(): Observable<userStatistics> {
    return this.http.get<userStatistics>(`${this.apiUrl}/userStatistics`);
  }


  //returns all users data for patient,admin , doctor collection
  getPatientAdminDoctor(): Observable<getPatientAdminDoctor>{
    return this.http.get<getPatientAdminDoctor>(`${this.apiUrl}/patientAdminDoctor`);
  }




  /****
   * DOCTORS STARTS HERE
   * CREATE DOCTOR GOES TO AUTH ROUTE SINCE ITS A NEW USER
   */
  getAllDoctors(): Observable<doctorInterface>{
    //allDoctors
    return this.http.get<doctorInterface>(`${this.apiUrl}/allDoctors`);
  }

  //UPDATE A DOCS INFOR
  updateDoctor(body) : Observable<updateDoctorInfo>{
    return this.http.put<updateDoctorInfo>(`${this.apiUrl}/updateDoctor`, body);
  }


  /** NOTIFICATIONS STARTS HERE.
   * POST NOTIFICATIONS
   */
  createNotification(data): Observable<createNotification>{
    return this.http.post<createNotification>(`${this.apiUrl}/notification`, data);
  }

  /***
   * GET ALL NOTIFICATIONS
   */

   retrieveNotifications() : Observable<retrieveNotifications>{
     return this.http.get<retrieveNotifications>(`${this.apiUrl}/retrieveAllNotifications`);
   }

   /**
    * UPDATE NOTIFICATION
    */

    updateNotification(body): Observable<updateNotifications>{
      return this.http.put<updateNotifications>(`${this.apiUrl}/updateNotification`, body);
    }
   
    /**
     * DELETE NOTIFICATION
     */

     deleteNotification(body){
       return this.http.delete(`${this.apiUrl}/deleteNotification`, body);
     }

     /**
      * DIALY HEALTH ADVICE
      */
     retrieveDialyHealthAdvice() :Observable<dialyHealthAdvice>{
       return this.http.get<dialyHealthAdvice>(`${this.apiUrl}/retrieveDialyHealthAdvice`);
     }

     /**
      * POST HEALTH ADVICE
      */
     postDialyHealthAdvice(body) :Observable<postHealthAdvice> {
       return this.http.post<postHealthAdvice>(`${this.apiUrl}/dialyHealthAdvice`, body);
     }

}
