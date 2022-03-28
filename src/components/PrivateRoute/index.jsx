import React from 'react'
import { Outlet } from 'react-router-dom'

import { Login } from '../../apps/Auth/pages'

const PrivateRoutes = () => {
  const isAuth = localStorage.getItem('userToken')

  return isAuth ? <Outlet /> : <Login />
}

export default PrivateRoutes
