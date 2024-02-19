import React, { useState } from 'react';
import { UserCredential, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';


interface User {
  email: string,
  password: string,
}

const Login = ():JSX.Element => {
  const [user,setUser] = useState<User>({
    email: 'oskar.hemma@gmail.com',
    password: 'hfcerx123',
  })
  const navigate = useNavigate();
  const createNewUser = async (): Promise<any> => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, user.email, user.password)
      navigate('/')
    } 
    catch (e) {
      alert('No such user!')
    }
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser(prev => ({
      ...prev,
      email: e.target.value
    }))
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser(prev => ({
      ...prev,
      password: e.target.value
    }))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createNewUser()
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
     <div className='h-1/4 w-1/2 flex flex-col justify-center items-center shadow-2xl bg-slate-800 rounded-3xl'>
      <label className='mb-6'>Login to use app!</label>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
         <div>
          <input type='text' value={user.email} onChange={handleChangeEmail} className='mr-2'/>
          <input type='text' value={user.password} onChange={handleChangePassword}/>
         </div>
          <button type='submit' className='border-sky-950 border-dashed'>submit!</button>
        </form>
     </div>
    </div>
  );
}

export default Login;
