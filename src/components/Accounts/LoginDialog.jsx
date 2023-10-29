import React from 'react'
import {Dialog,styled, Box, Typography, List, ListItem} from '@mui/material'
import { qrCodeImage } from '../../constants/data'
import {GoogleLogin} from '@react-oauth/google'
import { jwtDecode } from "jwt-decode"

const DialogStyle = {
  marginTop : "12%",
  height : "96%",
  maxHeight : "100%",
  width : "60%",
  maxWidth : "100%",
  boxShadow : "none",
}

const Component = styled(Box)`
  display : flex;
`
const Container = styled(Box)`
  padding : 56px 0px 56px 56px;
`

const QRCode = styled('img')({
  height : 264,
  width : 264,
  margin : '50px 0px 0px 50px'
})

const Title = styled(Typography)`
  font-size : 26px;
  color : #525252;
  font-family : inherit;
  font-weight : 300;
  margin-bottom : 25px;
`

const StyledList = styled(List)`
&& > li{
  padding : 0;
  margin-top : 15px;
  color : #4a4a4a;
  font-size : 18px;
  line-height : 28px;
}
`

function LoginDialog() {

  const onLoginSuccess = (res) => {
    console.log("Success");
    console.log(res);

    const decoded = jwtDecode(res.credential);
    console.log(decoded);
  }

  const onLoginError = (res) => {
    console.log("Error",res);
  }

  return (
    <Dialog
      open = {true}
      PaperProps={{sx : DialogStyle}}
    >
      <Component>
        <Container>
          <Title>To use WhatsApp on your Computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your Computer</ListItem>
            <ListItem>2. Tap menu Settings and select WhatsApp Web</ListItem>
            <ListItem>3. Point your phone to this screen and capture the code</ListItem>
          </StyledList>
        </Container>
        <Box style = {{position : "relative"}}>
          <QRCode src={qrCodeImage} alt="bar code" />
          <Box style = {{position : "absolute",top : "50%", transform : "translateX(25%)"}}>
            <GoogleLogin
              onSuccess = {onLoginSuccess}
              onError = {onLoginError}
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog
