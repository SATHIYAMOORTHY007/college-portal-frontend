import React from 'react'
import { useContext } from 'react'

import { Navigate } from 'react-router-dom'
import AuthContext from './Authcontext'
import Potect from '../Private'
import Private from '../Private'

function Required() {
  const { auth } = useContext(AuthContext)
  return auth?.token ? <Private /> : <Navigate to="/" />
}

export default Required
