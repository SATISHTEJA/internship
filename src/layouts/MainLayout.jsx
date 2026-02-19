import React from 'react'
import HeaderMain from '../components/HeaderMain'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <HeaderMain />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout