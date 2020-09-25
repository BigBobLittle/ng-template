import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { chatInterface, doctorSpecialization } from 'app/_interfaces/all';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MainCoreService {
 public apiUrl = "https://bigboblittle.herokuapp.com/teleApp/v1"
 //public apiUrl = 'http://localhost:3000/teleapp/v1';

  constructor( private http:HttpClient) { }

 

  getAllUsers():Observable<chatInterface>{
    return this.http.get<chatInterface >(`${this.apiUrl}/admin/chatInterface`);
  }

  // getDoctorsAndSpecialization(): Observable<doctorSpecialization>{
  //   return this.http.get<doctorSpecialization>(`${this.apiUrl}/doctor/doctorsAndSpecialization`);
  // }
}
