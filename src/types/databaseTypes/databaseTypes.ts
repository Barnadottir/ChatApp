export interface Users {
   email: string,
}

export interface Messages {
   senderEmail: string,
   receiverEmail: string,
   message: string,
   time: Date,
}