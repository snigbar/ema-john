import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './components/Layout/Home';
import Shop from "./components/Shop/Shop"
import './index.css'
import Orders from './components/Orders/Orders';
import cartProductLoader from './resources/cartProductLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    //error element
    children:[
      {
      path:"/",
      element:<Shop></Shop>,
    },

    {
      path:"/orders",
      element:<Orders></Orders>,
      loader: cartProductLoader,
      
    },
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
