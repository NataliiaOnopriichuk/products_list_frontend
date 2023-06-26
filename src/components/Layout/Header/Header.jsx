import * as React from "react";
// import { Add, DeleteOutline } from "@mui/icons-material";
// import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Box from "@mui/material/Box";
import logo from '../../../assets/image/logo.png'
// import { useMedia } from "react-use";
import {
  MyStyledAppBar,
//   MyStyledButton,
//   StylesButtonWrapper,
//   StylesToolbar,
} from "./style";
import { Container, Typography } from "@mui/material";
import { Navigation } from "./Navigation/Navigation";
// import { SearchBox } from "../../SearchBox/SearchBox";

export const Header = () => {
//   const isMobile = useMedia("(max-width: 599px)");

  return (

      <MyStyledAppBar>
        <Container style={{display:"flex", alignItems: 'center'}}>
        {/* <div style={{display:"flex", alignItems: 'center'}}> */}
      <Box>
            <img src={logo} alt="logo" style={{height: '30px', width:"38px", padding: "20px 20px 20px 0"}}/>
            </Box>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'Belanosima',
              fontWeight: 400,
              letterSpacing: '.15rem',
              color: 'black',
              textDecoration: 'none',
              fontSize: '26px',
              lineHeight: 'unset',
              margin:"0"
            }}
          >
            PRODUCTS LIST
          </Typography>
        {/* <StylesToolbar> */}
    
      
<Navigation/>
          

          {/* <StylesButtonWrapper>
            <MyStyledButton variant="contained" >
              <Add style={{ color: "#606060" }} />
            </MyStyledButton>
            <MyStyledButton
              variant="contained"
            //   disabled={selectedItem === null}
            >
              <DeleteOutline
                style={{ color: "#606060" }}
              />
            </MyStyledButton>
            <MyStyledButton
              variant="contained"
            //   disabled={selectedItem === null}
            >
              <DriveFileRenameOutlineIcon style={{ color: "#606060" }} />
            </MyStyledButton>
          </StylesButtonWrapper> */}
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          {/* <SearchBox /> */}
        {/* </StylesToolbar> */}
        {/* </div> */}
        </Container>
      </MyStyledAppBar>

  );
};
