import { Messages } from './../types/databaseTypes/databaseTypes';
import { QuerySnapshot, addDoc, collection, doc } from 'firebase/firestore';
import { db } from '../Firebase'
import { Users } from '../types/databaseTypes/databaseTypes';

const postMessage = async (
        sender: string, 
        receiver: string, 
        currMessage: string, 
        currTime: Date): Promise<void> => {
            console.log('here');
            await addDoc(collection(db, 'Messages'), {
                senderEmail: sender,
                receiverEmail: receiver,
                message: currMessage,
                time: currTime,
            });
        }
export { postMessage }