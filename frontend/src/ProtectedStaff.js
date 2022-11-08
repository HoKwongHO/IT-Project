import React from 'react'
import { Navigate } from 'react-router-dom'
import {useCookies} from 'react-cookie';

function ProtectedStaff({ children }) {
    const [cookie] = useCookies(["login"]);
   
  if (cookie.login === 'staff') {
    return children
   
  }
  return <Navigate to='/stafflogin' replace />
}
export default ProtectedStaff