import React from 'react'
import HomePage from '../pages/Home'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <HomePage/>
    <Outlet />
    </>
  )
}

export default Layout