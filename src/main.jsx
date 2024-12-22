import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Component/Root.jsx'
import Navbar from './Component/Navbar.jsx'
import Footer from './Component/Footer.jsx'
import ErrorElement from './Component/ErrorElement.jsx'
import Login from './Component/Login.jsx'
import Register from './Component/Register.jsx'
import Home from './Component/Home.jsx'
import AuthProvider from './AuthContext/AuthProvider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {

            path:'/login',
            element:<Login></Login>,  },

            {
              path:'/register',
              element:<Register></Register>
            },
            {
              path:'/navbar',
              element:<Navbar></Navbar>
            },
            {
              path:'/footer',
              element:<Footer></Footer>
            },
             {
              path:'/home',
              element:<Home></Home>
             }


  
  
  
  
  
  
  ]
  },
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </StrictMode>,
)
