export interface PatientProfile {
    success: boolean,
    response: string,
    user: {
       
        email: string,
        phonenumber: string,
        role: string,

        tokenVerified?: boolean,
        createdAt?: string,
        updatedAt?: string    
    }
}
