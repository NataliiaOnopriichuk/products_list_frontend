import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";


export const SignUpButton = styled(Link)(({ theme }) => ({
    mr: 2,
      fontFamily: 'Inter',
      fontWeight: 600,
      marginRight: "15px",
      color: theme.palette.info.main,
      textDecoration: 'none',
      fontSize: '16px',
      textTransform: 'uppercase',
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
}));