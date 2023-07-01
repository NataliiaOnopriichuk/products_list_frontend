import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { Body, Icon, Input, StylesBox, StylesButton, StylesGrid, StylesLink, Title } from './style';
import { routes } from 'utils/routes';



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
    <Body>
      <Container component="main" maxWidth="xs" style={{padding: '55px'}}>
        <StylesBox style={{background:"white"}}>
          <Icon>
            <LockOutlinedIcon />
          </Icon>
          <Title>{type === 'registrationPage' ? 'Sign up' : 'Sign in'}</Title>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             {type === 'registrationPage' && <StylesGrid item xs={12}>
                <Input
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="given-name"
                />
              </StylesGrid>}
              <StylesGrid item xs={12}>
                <Input
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </StylesGrid>
              <StylesGrid item xs={12}>
                <Input
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </StylesGrid>
           
            </Grid>
            <StylesButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {type === 'registrationPage' ? 'Sign Up' : 'Sign in'}
            </StylesButton>
            <Grid container justifyContent="center">
              <Grid item>
                {type === 'registrationPage' ? <StylesLink to={routes.LOGIN}>
                  Already have an account? Sign in
                </StylesLink> : <StylesLink to={routes.REGISTER}>
                 Don't have an account? Sign Up
                </StylesLink>}
              </Grid>
            </Grid>
          </Box>
        </StylesBox>
      </Container>
      </Body>
  )
}
