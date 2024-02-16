import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase'
import { QuerySnapshot, collection, getDocs } from "firebase/firestore";
import { Users } from '../../types/databaseTypes';

const Sidebar = ():JSX.Element => {
  const [users,setUsers] = useState<Users[] | null>(null)

  const getUsers = async () => {
    try {
      const querySnapshot: QuerySnapshot =  await getDocs(collection(db,'users'))
      const usersArray: Array<Users> = []
      querySnapshot.forEach((doc) => {
        usersArray.push(doc.data() as Users)
        console.log(doc.data());
      })
      setUsers(usersArray)
    }
    catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getUsers()
  },[])
  console.log(users);
  return (
    <div className='sticky left-0 flex flex-col justify-center items-strech h-screen bg-slate-700'>
        <h1>Sidebar</h1>
        <div>
        {
        users ?
          users.map(({email}: Users) => (
            <div key={email}>{email}</div> // Assuming email is unique; otherwise, use a different unique key
          )) :
          'no users data'
        }
        </div>
    </div>
  )
}

export default Sidebar
