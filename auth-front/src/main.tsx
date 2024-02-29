import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login'
import Signup from './routes/Signup'
import ProtectedRoute from './routes/ProtectedRoute'
import Dashboard from './routes/Dashboard'
import AuthProvider from './auth/AuthProvider'

const router = createBrowserRouter([

  {
    path:'/',
    element:<Login/>
  },

  {
    path:'/signup',
    element: <Signup/>
  },

  {
    path:'/',
    element: <ProtectedRoute/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
