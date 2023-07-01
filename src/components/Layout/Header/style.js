import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Container, Typography } from "@mui/material";

export const MyStyledAppBar = styled(AppBar)(({ theme }) => ({
    position: "fixed",
    zIndex: "100",
    backgroundColor: theme.palette.primary.light,
}));

export const StyleContainer = styled(Container)(({ theme }) => ({
    display:"flex", 
    alignItems: 'center'
}));

export const StyleTypography = styled(Typography)(({ theme }) => ({
    mr: 2,
   fontFamily: 'Belanosima',
    fontWeight: 400,
    letterSpacing: '.15rem',
    color: theme.palette.info.main,
    textDecoration: 'none',
    fontSize: '26px',
    lineHeight: 'unset',
    margin:"0"
}));

export const StylesToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginLeft: 'auto',
    padding: "20px",
    [theme.breakpoints.up("xs")]: {
        minHeight: '20px',
    }
}));

export const Image = styled('img')`
height: 30px; 
width: 38px;
padding: 20px 20px 20px 0;
`;



