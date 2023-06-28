import * as React from 'react';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { Icon, StylesBox, Title } from './style';


export const AuthForm = ({type}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget
        const data = new FormData(form);
        console.log({
          name: data.get('name'),
          email: data.get('email'),
          password: data.get('password'),
        });
        form.reset()
      };

  return (
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <StylesBox>
          <Icon>
            <LockOutlinedIcon />
          </Icon>
          <Title>{type === 'registrationPage' ? 'Sign up' : 'Sign in'}</Title>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             {type === 'registrationPage' && <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="given-name"
                />
              </Grid>}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
           
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {type === 'registrationPage' ? 'Sign Up' : 'Sign in'}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {type === 'registrationPage' ? <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> : <Link href="#" variant="body2">
                 Don't have an account? Sign Up
                </Link>}
              </Grid>
            </Grid>
          </Box>
        </StylesBox>
      </Container>
  )
}
