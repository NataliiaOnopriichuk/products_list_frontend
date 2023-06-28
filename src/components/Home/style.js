import { keyframes } from '@emotion/react';
import { styled } from "@mui/material/styles";

// Оголошення анімації
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const AnimatedImage = styled('img')`
position: absolute;
top: 50%;
left: 50%;
height: 70%;
width: 70%;
transform: translate(-50%, -50%);
`;

export const Title = styled('p')`
font-family: 'Belanosima';
font-size: 35px;
text-transform: uppercase;
text-align: center;
margin: auto;
animation: ${fadeInAnimation} 2s ease-in;
color: ${({theme}) => theme.palette.info.dark};
`;

export const Inner = styled('div')`
position:relative;
height: 500px;
    width: 500px;
background: ${({theme}) => theme.palette.primary.light};
    border-radius: 50%;
    margin: auto;
    margin-top: 35px;
    animation: ${fadeInAnimation} 2s ease-in;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`;