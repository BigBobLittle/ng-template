/****
 * !AUTHENTICATION INTERFACES
 */
export interface loginInterface {
    success: boolean,
    response: string,
    token?: string,
    statusCode?:string,
    user: {
      role: string,
      phonenumber:string
    }
  }


//verification after signup interface
export interface verificationInterface{
  success: boolean,
  response:string
}

//registration 
export interface registerUserInterface{
  success: boolean,
  response: string,
  user: object
}

export interface profileInterface{
  success: boolean,
  response: string,
  user: {phonenumber:string}
}



//******************************** */
//! All Interfaces of Admin Service 
//******************************* */
export interface userInterface{
  success:boolean,
  response: [{
    createdAt: string,
    updatedAt: string,
    role: string,
    email: string,
    phonenumber: string,
    profile: {
      firstname: string,
            lastname: string,
            city: string,
            country: string,
            addres: string,
            summary: string
    }
  }],
  
}


//**************** */
//TODO User statistics
//********************* */
export interface userStatistics{
  success: boolean,
  response:{
    totalUsers: string,
    totalPatients: string,
    totalDoctors: string,
    totalAdmins: string
  }
}

//********************* */
//TODO getPatientAdminDoctor
//*********************** */
export interface getPatientAdminDoctor{
  success: boolean,
  response: {
    patients: [{
        role:string,
        email:string,
        phonenumber:string,
        createdAt: string,
    }],
    doctors: [{
      role:string,
      email:string,
      phonenumber:string,
      createdAt: string,
    }],
    admins: [{
      role:string,
      email:string,
      phonenumber:string,
      createdAt: string,
    }]
  }
}


/******************************
 *TODO CHAT INTEERFACES
 * ******************************
 */

export interface getConnectedUsers{
  image?:string,
  name?: string,
  chat?: string,
  mode?:string,
  profileName:string,
  profileId:string
  
}

//TODO user interface for chat
export interface chatInterface {
 success: boolean,
 response: []
}

//TODO retrieve all doctors interface
export interface doctorInterface{
  success: boolean,
  response: []
}

//TODO bookAppointment responsE
export interface bookAppointment{
  success:boolean,
  response: string,
  appointment?: {},
  payment?:{}
}

/*****************CHAT INTERFACES************ */
//TODO ALL CHAT CONVERSATIONS
export interface getConversations{
  success: boolean,
  response: [
    [
      {
       _id:string,
       conversationId:string,
       body:string,
       author: {
           _id:string,
           phonenumber:string
        },
       createdAt:string,
       updatedAt:string,
       
    }
    ]
  ]
}


//A SPECIFIC USER CHAT MESSAGE
export interface getAllUserMessages{
    success: boolean,
    response: [
      {
        
          _id: string,
          conversationId: string,
          body: string,
          author: string,
          createdAt: string,
          updatedAt: string,
         
      }
      
    ]
}


//TODO :: GET ALL DOCTORS, AND SPECIALIZATIO 
//for populating the doctors dropdown when
//booking appointment

export interface doctorSpecialization{
  success: boolean,
  response: [

    {
      _id: string,
      role: string,
      email:string,
      phone: string,

      profile?:{
      firstName?:string,
      lastName?: string,
      doctor:{
        specialization:string
      }
    }
  }
  ]
}


//todo :: Appointment Booking response
//response after user book appointment
//used for showing users appointment
export interface AppointmentResponse{
 response:[
   {
  details: {
    appointmentTime: {
        from:string,
        to:string,
     },
    firstName:string,
    lastName:string,
    age:string,
    note:string,
    appointmentDate:string,
 },
 payment: {
    status: boolean
 },
 accepted: boolean,
 completed: boolean,
 status:string,
 _id:string,
 user:string,
 doctor:string,
 createdAt:string,
 updatedAt:string,
 
}
 
]
   
}

export interface AcceptedAppointment{
  response:[
    {
   details: {
     appointmentTime: {
         from:string,
         to:string,
      },
     firstName:string,
     lastName:string,
     age:string,
     note:string,
     appointmentDate:string,
  },
  payment: {
     status: boolean
  },
  accepted: boolean,
  completed: boolean,
  status:string,
  _id:string,
  user:string,
  doctor:string,
  createdAt:string,
  updatedAt:string,
  
 }
  
 ]
    
 }

export interface AppointmentStatistics{
  success:boolean,
  totalAppointments: number,
  upcomingAppointments: number
}