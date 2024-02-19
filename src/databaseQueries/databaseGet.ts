import { QuerySnapshot, getDocs, collection } from 'firebase/firestore';
import { db } from '../Firebase'
import { Messages, Users } from '../types/databaseTypes/databaseTypes';

const getUsers = async (): Promise<void | Users[]> => {
    const querySnapshot: QuerySnapshot =  await getDocs(collection(db,'users'))
    const usersArray: Array<Users> = []
    querySnapshot.forEach((doc) => {
      usersArray.push(doc.data() as Users)
    })
    return usersArray;
}

const getMessages = async (): Promise<void | Messages[]> => {
  const querySnapshot: QuerySnapshot =  await getDocs(collection(db,'Messages'))
  const messagesArray: Array<Messages> = []
  querySnapshot.forEach((doc) => {
    messagesArray.push(doc.data() as Messages)
  })
  return messagesArray;
}

export { getUsers, getMessages }