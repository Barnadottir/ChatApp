import { signOut } from 'firebase/auth';
import React from 'react'
import { auth, handleSignout } from '../Firebase';

const Signout = () => {
  return (
    <div>
        <button onClick={handleSignout}>signout</button>
    </div>
  )
}

export default Signout;
