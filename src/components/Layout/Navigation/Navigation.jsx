import { Box } from '@mui/material'
import React from 'react'
import { LoginButton, SignUpButton } from './style'
import { routes } from 'utils/routes'

export const Navigation = () => {
      
  return (
    <Box style={{marginLeft:"auto"}}>
    <SignUpButton color="inherit" to={routes.REGISTER}>Sign up</SignUpButton>
    <LoginButton color="inherit" to={routes.LOGIN}>Login</LoginButton>
    </Box>
  )
}

