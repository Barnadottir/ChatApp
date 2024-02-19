import React, { useEffect, useState } from 'react'
import { Users } from '../../types/databaseTypes';
import { getUsers } from '../../databaseQueries'
import { useAuth } from '../../contexts';
interface SidebarProps {
  setCurrentChat: (value: string | ((prevVar: string | null) => string)) => void
}

const Sidebar = ({ setCurrentChat }: SidebarProps):JSX.Element => {
  const [users,setUsers] = useState<Users[] | null>(null)
  const { currentUser: loggedInUser } = useAuth()
  const getUserData = async () => {
    try {
      const temp: void | Users[] = await getUsers()
      if (temp) setUsers(temp)
    }
    catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getUserData()
  },[])
  
  return (
    <div className='sticky left-0 flex flex-col justify-center items-strech h-screen bg-slate-700'>
        <h1>Sidebar</h1>
        <div>
        {
        users ?
          users.map(({email}: Users) => (
            loggedInUser?.email !== email ? (
              <div onClick={() => setCurrentChat(email)} key={email} className='hover:text-gray-600'>{email}</div>
          ): null)
            ):
          'no users data'
        }
        </div>
    </div>
  )
}

export default Sidebar
