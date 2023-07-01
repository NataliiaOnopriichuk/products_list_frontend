import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Inter',
    maxWidth: 'calc(100vw - 400px)',
    maxHeight: 'calc(100vh - 200px)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '7px',
    outline: 'none',
    boxShadow: 24,
    textAlign: 'center',
    padding: '30px',
  };

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

export const Modal = styled('div')`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #000000a6;
z-index: 1200;
`;
