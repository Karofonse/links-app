import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { useSelector } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const DashboardRoutes = () => {

  const selector = useSelector(state => state.user)

  return (
    <>
        <BrowserRouter>
            {selector.isLoggedIn ? <PrivateRoute/> : <PublicRoute/>}
        </BrowserRouter>
    </>
  )
}

export default DashboardRoutes