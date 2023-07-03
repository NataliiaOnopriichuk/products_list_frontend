import { styled } from "@mui/material/styles";

export const Main = styled('main')(({ theme }) => ({
    marginTop: "133px",

    [theme.breakpoints.up("md")]: {
        marginTop: '100px',
    },
}));