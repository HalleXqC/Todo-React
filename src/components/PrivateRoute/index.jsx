import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const isAuth = localStorage.getItem('userToken')

  return isAuth ? <Outlet /> : <Navigate to="/auth/login" />
}

export default PrivateRoutes
