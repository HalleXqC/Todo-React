import React from 'react'
import { Outlet } from 'react-router-dom'

import { Login } from '../../apps/Auth/pages'

const PrivateRoutes = () => {
  const isAuth = true

  return isAuth ? <Outlet /> : <Login />
}

export default PrivateRoutes
