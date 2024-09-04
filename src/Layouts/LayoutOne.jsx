import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import { useSelector } from 'react-redux'

const LayoutOne = () => {

  return (
    <>
    <div className="flex">
      <Navbar />
      <Outlet/>
    </div>
    </>
  )
}

export default LayoutOne
