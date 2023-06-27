import { Box, Container, Typography } from '@mui/material';
import { Item, MyStyledButton, StylesButtonWrapper } from './styles';
import { DeleteOutline } from '@mui/icons-material';
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import tomatoes from '../../assets/image/tomatoes.webp'

export const ProductsList = () => {
  return (
    <Container>
          <Box
              sx={{
                p: 2,
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
          <Item elevation={3}>
          <Box style={{height: '50px', width:"50px"}}>
            <img src={tomatoes} alt="tomatoes" style={{height: '100%', width:"100%", objectFit: 'cover', borderRadius: '4px'}}/>
            </Box>
    <Typography style={{fontFamily: 'Inter', fontWeight: '400', fontSize: '18px', marginLeft: '10px'}}>Tomatoes</Typography>
      <StylesButtonWrapper>
            {/* <MyStyledButton variant="contained" >
              <Add style={{ color: "#606060" }} />
            </MyStyledButton> */}
            <MyStyledButton
              variant="contained"
            >
              <DriveFileRenameOutlineIcon style={{ color: "#3e9054" }} />
            </MyStyledButton>
            <MyStyledButton
              variant="contained"
            >
              <DeleteOutline
                style={{ color: "#c3550b" }}
              />
            </MyStyledButton>
          </StylesButtonWrapper>
  </Item>
  <Item elevation={2}>
    123
  </Item>
  <Item elevation={2}>
    123
  </Item>
  <Item elevation={2}>
    123
  </Item>
  </Box>
  </Container>
  );
};