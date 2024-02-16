import React, { useState } from 'react';
import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';
import { useAuth } from './contexts';
import { Link, Navigate } from 'react-router-dom';
import ChatWindow from './ChatWindow/ChatWindow';

const App = (): JSX.Element => {
  const { currentUser } = useAuth()
  if (!currentUser) {
    return <Navigate to='/login' replace = {true}/>
  }
  return (
    <div className="">
      <ChatWindow/>
      Welcome to my app {currentUser?.email}
    </div>
  );
}

export default App;
