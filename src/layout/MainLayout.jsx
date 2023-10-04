import { Outlet } from "react-router-dom";
import Header  from "../components/Header"
import Footer from "../components/Footer"

import React from 'react'

const mainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default mainLayout






















 