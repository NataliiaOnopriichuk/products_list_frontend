import { Box, Button } from '@mui/material'
import React from 'react'
// import PropTypes from 'prop-types'

export const Navigation = () => {
      
  return (
    <Box style={{marginLeft:"auto"}}>
    <Button color="inherit" href="/" sx={{
      mr: 2,
      fontFamily: 'Inter',
      fontWeight: 600,
      marginRight: "15px",
      color: 'black',
      textDecoration: 'none',
      fontSize: '16px',
    }}>Sign up</Button>
  <Button color="inherit" href="/" sx={{
      mr: 2,
      fontFamily: 'Inter',
      fontWeight: 600,
      marginRight: "0",
      color: 'black',
      textDecoration: 'none',
      fontSize: '16px',
    }}>Login</Button>
    </Box>
  )
}

// Tabs.propTypes = {}
