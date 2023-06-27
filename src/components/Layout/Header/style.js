import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

export const MyStyledAppBar = styled(AppBar)(({ theme }) => ({
    position: "fixed",
    zIndex: theme.zIndex.tooltip,
    backgroundColor: '#ffffff',
}));




// export const useStylesToolbar = makeStyles((theme) => ({
//     container: {
//         display: "flex",
//         flexDirection: "column-reverse",
//         gap: "10px",
//         padding: "10px",
//     },
// }));

export const StylesToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    // flexDirection: "column-reverse",
    // gap: "10px",
    // justifyContent:'space-between',
    marginLeft: 'auto',
    padding: "20px",
    [theme.breakpoints.up("xs")]: {
        minHeight: '20px',
    }
}));

// export const useStylesButtonWrapper = makeStyles((theme) => ({
//     container: {
//         display: "flex",
//         gap: "45px",

//         [theme.breakpoints.up("sm")]: {
//             gap: "20px",
//         },
//     },
// }));



