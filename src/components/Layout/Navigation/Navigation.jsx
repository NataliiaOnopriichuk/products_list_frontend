import { Box } from '@mui/material'
import React from 'react'
import { LoginButton, SignUpButton } from './style'

export const Navigation = () => {
      
  return (
    <Box style={{marginLeft:"auto"}}>
    <SignUpButton color="inherit" href="/">Sign up</SignUpButton>
    <LoginButton color="inherit" href="/">Login</LoginButton>
    </Box>
  )
}

