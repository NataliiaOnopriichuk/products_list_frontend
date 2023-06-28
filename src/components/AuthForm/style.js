import { styled } from "@mui/material/styles";
import { Avatar, Box} from "@mui/material";

export const Icon = styled(Avatar)(({ theme }) => ({
    m: 1, 
    background: theme.palette.error.main,
}));

export const StylesBox = styled(Box)(({ theme }) => ({
    marginTop: 128,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.primary.light,
    padding: '44px',
    borderRadius: '10px',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
}));

export const Title = styled('p')`
font-family: "Belanosima",sans-serif;

margin-top: 20px;

color: ${({theme}) => theme.palette.info.main};

font-weight: 400;
font-size: 22px;
text-transform: uppercase;
`;

