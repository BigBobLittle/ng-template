export interface createNotification {
    success: boolean,
    response: string
}


//retrieve notifications
export interface retrieveNotifications{
    success: boolean,
    response: []
}

//update n delete notifications
export interface updateNotifications{
    success: boolean,
    response: string,
    result: object
}

export interface deleteNotifications{
    success: boolean,
    response: string,
    result: object
}

//!DIALY HEALTH ADVICE
export interface dialyHealthAdvice{
    success: boolean,
    response: [
        {
            advice: string,
            type: string,
            _id?: string,
            createdAt?: string,
            updatedAt?: string
        }
        
    ]
}

export interface postHealthAdvice{
    success: boolean,
    response: string
}