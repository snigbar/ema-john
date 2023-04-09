import React, { Fragment } from 'react'
import Navbar from "../Navbar/Navbar"
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
   <Navbar></Navbar>
  <Outlet></Outlet>
   </div>
  )
}
