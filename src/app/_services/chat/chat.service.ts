import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { getConnectedUsers, getConversations, getAllUserMessages, userInterface } from 'app/_interfaces/all';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface chat1 {
  message: string,
  isTping: boolean
 
}

interface chatResponse{
 message:{
  roomName?: string,
  body: string,
  author:string,
  from: string,
  to: string,
  _id: string,
  createdAt: string,
  updatedAt: string
 }
}


interface consultationResponse{
  success:boolean,
  response:{
   roomName?: string,
   body: string,
   author:string,
   from: string,
   to: string,
   _id: string,
   createdAt: string,
   updatedAt: string
  }
 }

 interface testSocketInExpressRoute{
   message: string,
   room: string
 }
@Injectable({
  providedIn: 'root'
})




export class ChatService {
  public apiUrl = "https://bigboblittle.herokuapp.com/teleApp/v1/chat";
 // apiUrl = "http://localhost:3000/teleapp/v1/chat";

  constructor(
    private socket:Socket,
    private http: HttpClient
    ) { }


    testSocketInRoute(data) :Observable<testSocketInExpressRoute>{
      return this.http.post<testSocketInExpressRoute>(`${this.apiUrl}/socket`, data);
    }

joinRoom(data){
  this.socket.emit('join', data);
 // console.log('data from chat Services::::' + data);
  
}


chatting(data){
  this.socket.emit('chatting', data);
  }

  getTheChatResponse():Observable<chatResponse>{
    return this.socket.fromEvent('response');
  }

  
  getConsultationMessages(data): Observable<consultationResponse>{
    return this.http.post<consultationResponse>(`${this.apiUrl}/singleChatRoomMessages`, data);
  }










/*************************************************************************** */
  sendMessage(msg: string){
    this.socket.emit("send message", msg);
}

createUser(userObject){
  this.socket.emit('user name', userObject);
}

getConnectedUsers():Observable<getConnectedUsers>{
  return this.socket.fromEvent('connectedUsers');
}



//patient chat componet uses this
getChatResponse():Observable<chat1>{
  return this.socket.fromEvent('response');
}



chatReciever(){
  return this.socket.fromEvent('recieverPeer');
}

chatSender(){
  return this.socket.fromEvent('senderPeer');
}

//get snippet of conversation a user is involved/limit it to 1
getConversations(): Observable<getConversations>{
  return this.http.get<getConversations>(`${this.apiUrl}/getConversations`);
}

//get the full chat messages itself when a user selects it.
getChatMessage(conversationId){
  return this.http.get(`${this.apiUrl}/getAConversation/` + conversationId)
}

//get allUsersMessage
getAllUserMessages(): Observable<getAllUserMessages>{
  return this.http.get<getAllUserMessages>(`${this.apiUrl}/getAllUserMessages`);
}


//get All Users on the system
getAllUsers() : Observable<userInterface>{
  return this.http.get<userInterface>(`http://localhost:3000/teleapp/v1/admin/getAllUsers`);
}
}
