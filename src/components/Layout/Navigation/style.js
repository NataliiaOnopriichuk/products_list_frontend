import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";


export const SignUpButton = styled(Button)(({ theme }) => ({
    mr: 2,
      fontFamily: 'Inter',
      fontWeight: 600,
      marginRight: "15px",
      color: theme.palette.info.main,
      textDecoration: 'none',
      fontSize: '16px',
}));

export const LoginButton = styled(Button)(({ theme }) => ({
    mr: 2,
    fontFamily: 'Inter',
    fontWeight: 600,
    marginRight: "0",
    color: theme.palette.info.main,
    textDecoration: 'none',
    fontSize: '16px',
}));