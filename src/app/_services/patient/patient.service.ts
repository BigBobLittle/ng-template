import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bookAppointment, doctorSpecialization, AppointmentResponse, AppointmentStatistics } from 'app/_interfaces/all';
import { PatientProfile } from 'app/_interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public apiUrl = "https://bigboblittle.herokuapp.com/teleApp/v1";

  // public apiUrl = "http://localhost:3000/teleApp/v1";
  constructor(private http:HttpClient) { }

  public bookAppointment(value): Observable<bookAppointment>{
    return this.http.post<bookAppointment>(`${this.apiUrl}/appointment/book`, value);
  }

  getDoctorsAndSpecialization(): Observable<doctorSpecialization>{
    return this.http.get<doctorSpecialization>(`${this.apiUrl}/doctor/doctorsAndSpecialization`);
  }


  //gets the appointment a usr has booked
  getUserAppointment():Observable<AppointmentResponse>{
    return this.http.get<AppointmentResponse>(`${this.apiUrl}/appointment/getMyAppointment`);
  }

  //appointment statistics for a single patient
  //retrieves total & upcoming appointments for each user
  getAppointmentStatistics() : Observable<AppointmentStatistics>{
    return this.http.get<AppointmentStatistics>(`${this.apiUrl}/appointment/appointmentStatistics`);
  }

  //get patient profile
  getPatientProfile() :Observable<PatientProfile>{
    return this.http.get<PatientProfile>(`${this.apiUrl}/user/profile`);
  }
}
