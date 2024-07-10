import React from 'react'
import Navbar from '../Compound/Navbar'
import Home from '../Compound/Home'
import { Outlet } from 'react-router-dom'
const HHome = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default HHome