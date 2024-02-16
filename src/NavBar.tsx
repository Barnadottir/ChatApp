import React from 'react'
import { Outlet } from 'react-router-dom';
import Signout from './signout/Signout';

const NavBar = () => {
  return (
    <div className='bg-red'>
        <div className='flex justify-between items-strech sticky top-0 bg-slate-400'>
            navBar
            <Signout/>
        </div>
        <Outlet/>
    </div>
    
  )
}

export default NavBar;
