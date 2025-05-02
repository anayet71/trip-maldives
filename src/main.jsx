import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import AuthProvider from './provider/AuthProvider';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
      children: [
       {
        path: '/register',
        element: <Register></Register>
      }
 
      ]        
    

  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </StrictMode>


)
