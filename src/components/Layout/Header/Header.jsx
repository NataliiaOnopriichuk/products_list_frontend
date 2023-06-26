import * as React from "react";
import { Add, DeleteOutline } from "@mui/icons-material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Box from "@mui/material/Box";
import logo from '../../../assets/image/logo.png'
// import { useMedia } from "react-use";
import {
  MyStyledAppBar,
  MyStyledButton,
  StylesButtonWrapper,
  StylesToolbar,
} from "./style";
// import { SearchBox } from "../../SearchBox/SearchBox";

export const Header = () => {
//   const isMobile = useMedia("(max-width: 599px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyStyledAppBar>
        <StylesToolbar>
          <StylesButtonWrapper>
          <Box>
            <img src={logo} alt="logo" style={{borderRadius:"50%", height: '80px', width:"80px"}}/>
        </Box>
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
          </StylesButtonWrapper>
          <Box sx={{ flexGrow: 1 }} />
          {/* <SearchBox /> */}
        </StylesToolbar>
      </MyStyledAppBar>
    </Box>
  );
};
