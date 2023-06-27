import { styled } from "@mui/material/styles";
import { Box, Button, Paper, alpha } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
  textAlign: 'center',
}));

export const StylesButtonWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
        gap: "45px",

        marginLeft: 'auto',

        [theme.breakpoints.up("sm")]: {
            gap: "20px",
        }
}));

export const MyStyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1, 1),
    backgroundColor: alpha(theme.palette.background.default, 0.8),
    minWidth: 0,
    height: "70%",

    "&:hover": {
        backgroundColor: alpha(theme.palette.background.default, 0.4),
    },
}));