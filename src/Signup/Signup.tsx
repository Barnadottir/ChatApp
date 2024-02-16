import React, { useState } from 'react';
import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';

interface User {
  email: string,
  password: string,
}

const Signup = ():JSX.Element => {
  const [user,setUser] = useState<User>({
    email: 'Email...',
    password: 'Password...',
  })

  const navigate = useNavigate();

  const createNewUser = async (): Promise<any> => {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
      // have to implement better error handling here
      await addDoc(collection(db,'users'), {
        email: user.email,
      })
      navigate('/')
    } 
    catch (e) {
      console.error(e)
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
    <div className="App">
     <label>Sign to use app!</label>
      <form onSubmit={handleSubmit}>
        <input type='text' value={user.email} onChange={handleChangeEmail}/>
        <input type='text' value={user.password} onChange={handleChangePassword}/>
        <button type='submit'>submit!</button>
      </form>
    </div>
  );
}

export default Signup;
