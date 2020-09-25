
//to retrieve upcoming appointments to doctors dashboard where he can slide to accept or deny
export interface DoctorsAppointment{
        success: boolean,
        response:[
            {
               details: {
                   appointmentTime: {
                       from:string,
                       to: string
                    },
                   firstName:string,
                   lastName:string,
                   age:string,
                   note:string,
                   appointmentDate:string
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

//response after doctor accept or reject appointment
export interface DoctorAcceptAppointment{
    success:boolean,
    response: string
}

//update Doctor info
export interface updateDoctorInfo{
    success: boolean,
    response: string
}

//createChatRoom
export interface createChatRoom{
    success: boolean,
    response: string,
    roomName: string,
    participants: []
}