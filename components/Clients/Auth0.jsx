'use client';

import React from 'react'
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0 = ({children}) => {
  return (
    <Auth0Provider
    domain="dev-3krhuctfc8ibmlph.us.auth0.com"
    clientId="LAx7Ev6QOcy4OWqLZuTjU2BETLo0q2FI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
      >{children}</Auth0Provider>
  )
}

export default Auth0