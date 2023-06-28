import * as React from "react";
import Box from "@mui/material/Box";
import logo from '../../../assets/image/logo.png'
// import { useMedia } from "react-use";
import {
    Image,
  MyStyledAppBar,
  StyleContainer,
  StyleTypography,
} from "./style";
import { Navigation } from "../Navigation/Navigation";


export const Header = () => {
//   const isMobile = useMedia("(max-width: 599px)");

  return (

      <MyStyledAppBar>
        <StyleContainer>
      <Box>
            <Image src={logo} alt="logo"/>
            </Box>
            <StyleTypography
            variant="h6"
            noWrap
            component="a"
            href="/"
           >
            PRODUCTS LIST
          </StyleTypography>
        <Navigation/>
        </StyleContainer>
      </MyStyledAppBar>

  );
};
