import React from 'react'
import { LoginButton, SignUpButton, Wrapper } from './style'
import { routes } from 'utils/routes'

export const Navigation = () => {
      
  return (
    <Wrapper>
    <SignUpButton color="inherit" to={routes.REGISTER}>Sign up</SignUpButton>
    <LoginButton color="inherit" to={routes.LOGIN}>Login</LoginButton>
    </Wrapper>
  )
}

