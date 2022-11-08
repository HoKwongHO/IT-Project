import React from 'react'
import { Navigate } from 'react-router-dom'
import {useCookies} from 'react-cookie';

function Protected({ children }) {
    const [cookie] = useCookies(["login"]);
   
  if (cookie.login === 'undefined') {
    return <Navigate to='/customerlogin' replace />
  }
  return children
}
export default Protected