import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './Signup/Signup';
import { AuthProvider } from './contexts';
import NavBar from './NavBar'
import Login from './login/Login';
import './index.css'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path:'/',
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
      path:'/signup',
      element: <Signup />
      }
    ] 
  },
])
root.render(
  <React.StrictMode>
    <AuthProvider>
      <div className='bg-gradient-to-r from-slate-300 to-slate-700 h-screen w-screen'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
