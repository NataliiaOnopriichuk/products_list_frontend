import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#85f566',
        light: '#ffffff',
      },
      error: {
        main: '#e95353',
      },
      warning: {
        main: '#053006',
      },
      info: {
        main: '#373737',
        dark: '#053006',
      },
      success: {
        main: '#53f625',
      },

    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1200,
      },
    },
    });

