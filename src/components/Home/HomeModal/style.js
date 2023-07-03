import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

  export const Modal = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '200',
    width: '100vw',
    height: '100vh',
    background: theme.palette.common.white,
    fontFamily: 'Inter',
    textAlign: 'center',
  

    [theme.breakpoints.up("sm")]: {
        width: '400px', 
        height: 'auto',
        maxWidth: 'calc(100vw - 200px)',
        maxHeight: 'calc(100vh - 100px)',
        border: '1px solid #000',
        borderRadius: '7px',
        outline: 'none',
        boxShadow: 24,
        padding: '30px',
    },

    [theme.breakpoints.up("md")]: {
        maxWidth: 'calc(100vw - 400px)',
        maxHeight: 'calc(100vh - 200px)',
    },
}));

export const TextContent = styled('p')`
    color: inherit;
    margin-bottom: 14px;
`;

export const Text = styled(Link)(({ theme }) => ({
    color: theme.palette.error.main,
    fontWeight: '600',
    textTransform: 'uppercase',

    '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    padding: '6px 8px',
    borderRadius: '4px'
    },
}));

export const Backdrop = styled('div')(({ theme }) => ({
      [theme.breakpoints.up("sm")]: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000a6',
        zIndex: '1200',
    },
}));

export const Image = styled('img')`
height: 40px; 
width: 48px;
margin-bottom: 28px;

`;




