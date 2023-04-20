"use client";

import React from 'react'
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";

const LoginBtn = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log(user);
  return (
    <>
    <Button className='Button max-sm:py-1 max-sm:px-2' variant="contained" color="primary" onClick={isAuthenticated?() => logout() : () => loginWithRedirect()}>
        {
          isAuthenticated? "Logout" : "Login"
        }
      </Button>
    </>
  )
}


export default LoginBtn;




