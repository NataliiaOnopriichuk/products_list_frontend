import { keyframes } from '@emotion/react';
import { styled } from "@mui/material/styles";
import ForwardIcon from '@mui/icons-material/Forward';

// Оголошення анімації
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounceAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`;


export const Image = styled('img')`
position: absolute;
top: 50%;
left: 50%;
height: 70%;
width: 70%;
transform: translate(-50%, -50%);
`;

export const ArrowIcon = styled(ForwardIcon)`
display: block;
margin: 18px auto;
rotate: 90deg;
animation: ${bounceAnimation} 1s infinite;


  width: 80px;
  height: 80px;


>path{
  fill: ${({theme}) => theme.palette.error.main}
}
`;

export const Title = styled('p')(({ theme }) => ({
  fontFamily: 'Belanosima',
fontSize: '30px',
textTransform: 'uppercase',
textAlign: 'center',
margin: 'auto',
color: theme.palette.info.dark,


    [theme.breakpoints.up("sm")]: {
      fontSize: '35px',
  },
}));
  
export const Inner = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '300px',
  width: '300px',
  cursor: 'pointer',
  background: theme.palette.primary.light,
  borderRadius: '50%',
  margin: '19px auto',
  animation: `${fadeInAnimation} 2s ease-in`,
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',

    [theme.breakpoints.up("sm")]: {
      height: '400px',
      width: '400px',
  },

  [theme.breakpoints.up("md")]: {
    height: '500px',
    width: '500px',
}
}));
  
