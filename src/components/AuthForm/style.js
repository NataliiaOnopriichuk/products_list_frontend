import { styled } from "@mui/material/styles";
import { Avatar, Box, Button, Grid, TextField} from "@mui/material";
import grocery from '../../assets/image/grocery.png'
import { Link } from "react-router-dom";

export const Icon = styled(Avatar)(({ theme }) => ({
    m: 1, 
    background: theme.palette.error.main,
}));

export const StylesGrid = styled(Grid)(({ theme }) => ({
    '& div label': {
        fontFamily: "Inter",
    },
    '& div label.Mui-focused': {
        color: theme.palette.info.main,
    },
}));


export const Input = styled(TextField)(({ theme }) => ({
    fontFamily: "Inter",
    '& input': {
        fontFamily: "Inter",
    },

}));

export const StylesButton = styled(Button)(({ theme }) => ({
    fontFamily: "Inter",
    fontWeight: '600',

    '&:hover':{
        color: theme.palette.common.white
    }
}));

export const StylesLink = styled(Link)(({ theme }) => ({
    fontFamily: "Inter",
    fontSize: '14px',
    textAlign: 'center',
    color: '#373737ad'
}));


export const StylesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.primary.light,
    padding: '44px',
    borderRadius: '72px',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
}));

export const Title = styled('p')`
font-family: "Belanosima",sans-serif;

margin-top: 20px;

color: ${({theme}) => theme.palette.info.main};

font-weight: 400;
font-size: 22px;
text-transform: uppercase;
`;

export const Body = styled('div')`
background-image: URL(${grocery});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
margin: 5%;
padding: 5%;
`;

