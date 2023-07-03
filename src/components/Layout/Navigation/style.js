import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";


export const Wrapper = styled(Box)(({ theme }) => ({
    paddingBottom: '10px',
    paddingTop: '10px',
    background: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up("md")]: {
        marginLeft: 'auto',
        paddingBottom: '0px',
        paddingTop: '0px',
        background: 'none',
    },
}));

export const SignUpButton = styled(Link)(({ theme }) => ({
    mr: 2,
      fontFamily: 'Inter',
      fontWeight: 600,
      marginRight: "15px",
      color: theme.palette.common.white,
      textDecoration: 'none',
      textTransform: 'uppercase',

      '&:hover': {
        color: '#ffffffb8'
    },

      [theme.breakpoints.up("md")]: {
        color: theme.palette.info.main,
        '&:hover': {
            color: theme.palette.error.main
        },
    },


}));

export const LoginButton = styled(Link)(({ theme }) => ({
    mr: 2,
      fontFamily: 'Inter',
      fontWeight: 600,
      marginRight: "15px",
      color: theme.palette.common.white,
      textDecoration: 'none',
      textTransform: 'uppercase',

      '&:hover': {
        color: '#ffffffb8'
    },

      [theme.breakpoints.up("md")]: {
        color: theme.palette.info.main,
        '&:hover': {
            color: theme.palette.error.main
        },
    },
}));

