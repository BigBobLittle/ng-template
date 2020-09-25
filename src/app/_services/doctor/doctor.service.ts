import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorsAppointment, DoctorAcceptAppointment, createChatRoom } from 'app/_interfaces/doctor';
import { AppointmentResponse, AcceptedAppointment } from 'app/_interfaces/all';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  public apiUrl = "https://bigboblittle.herokuapp.com/teleApp/v1";
  //public apiUrl = "http://localhost:3000/teleApp/v1";

  constructor(private http: HttpClient ) { }

  //match a doctor to his appointments so he can toggle to accept
  upcomingAppointment() :Observable<DoctorsAppointment>{
    return this.http.get<DoctorsAppointment>(`${this.apiUrl}/appointment/doctorsAppointment`);
  }

  //accept/ reject appointment when u click on the 'mat-slide-toggle'
  acceptOrRejectAppointment(id): Observable<DoctorAcceptAppointment>{
    return this.http.post<DoctorAcceptAppointment>(`${this.apiUrl}/appointment/doctorAcceptedAppointment/`, id);
  }

  //create a chat room
  createChatRoom(data):Observable<createChatRoom>{
    return this.http.post<createChatRoom>(`${this.apiUrl}/chat/createChatRoom`, data);
  }

  //this to populate the appointmentss in the chat table
  acceptedAppointment(): Observable<AcceptedAppointment>{
    return this.http.get<AcceptedAppointment>(`${this.apiUrl}/appointment/acceptedAppointment`);
  }

}
