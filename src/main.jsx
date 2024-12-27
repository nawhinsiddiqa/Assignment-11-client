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
import AddFood from './Component/AddFood.jsx'
import AvaliableFoodsPage from './Component/AvaliableFoodsPage.jsx'
import MyFoodRequest from './Component/MyFoodRequest.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FeaturedFoods from './Component/FeaturedFoods.jsx'
import FoodsCard from './Component/FoodsCard.jsx'
import One from './Component/One.jsx'
import SingleDetailsPage from './Component/SingleDetailsPage'
import ManageMyFood from './Component/ManageMyFood.jsx'
import UpdateAction from './Component/UpdateAction.jsx'
import Next from './Component/Next.jsx'
import PrivateRoute from './Component/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {

        path: '/login',
        element: <Login></Login>,
      },

      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/navbar',
        element: <Navbar></Navbar>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      },
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/foodsCard',
        element: <FoodsCard></FoodsCard>
      },

      {

        path: '/myFoodRequest',
        elemen:<PrivateRoute>: <MyFoodRequest></MyFoodRequest></PrivateRoute>
      },
      {
        path: '/updateAction/:id',
        element: <UpdateAction></UpdateAction>,
        loader: ({ params }) => fetch(`http://localhost:5000/funs/${params.id}`)
      },
      {
        path: '/one',
        element: <One></One>
      },

      {

        path:'/next',
        element:<Next></Next>
      },

      {
        path: '/funs/:id',
        element: <PrivateRoute> <SingleDetailsPage></SingleDetailsPage></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/funs/${params.id}`)
      },
      {
        path: '/featuredFoods',
        element: <FeaturedFoods></FeaturedFoods>,

      },

      {
        path: '/avaliableFoodsPage',
        element: <AvaliableFoodsPage></AvaliableFoodsPage>
      }, 
      {
        path: '/manageMyFood',
        element: <ManageMyFood></ManageMyFood>

      },
      {
        path: '/addFood',
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },








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
