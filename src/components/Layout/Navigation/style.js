import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";


export const Wrapper = styled(Box)(({ theme }) => ({
    margin: 'auto',
    paddingBottom: '20px',

    [theme.breakpoints.up("md")]: {
        margin: '0px',
        marginLeft:"auto",
        paddingBottom: '0px',
    },
}));

export const SignUpButton = styled(Link)(({ theme }) => ({
    mr: 2,
      fontFamily: 'Inter',
      fontWeight: 600,
      marginRight: "15px",
      color: theme.palette.info.main,
      textDecoration: 'none',
      fontSize: '16px',
      textTransform: 'uppercase',
    padding: '6px 8px',
    borderRadius: '4px',
    border: `0.5px solid rgba(0, 0, 0, 0.13)`,

    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },

    [theme.breakpoints.up("md")]: {
        border: 'none',
    },
}));

export const LoginButton = styled(Link)(({ theme }) => ({
    mr: 2,
    fontFamily: 'Inter',
    fontWeight: 600,
    marginRight: "0",
    color: theme.palette.info.main,
    textDecoration: 'none',
    fontSize: '16px',
    textTransform: 'uppercase',
    padding: '6px 8px',
    borderRadius: '4px',
    border: `0.5px solid rgba(0, 0, 0, 0.13)`,

    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },

    [theme.breakpoints.up("md")]: {
        border: 'none',
    },
}));

