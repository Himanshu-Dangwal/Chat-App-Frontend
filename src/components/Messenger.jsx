import React from 'react'
import LoginDialog from './Accounts/LoginDialog'
import {AppBar,Toolbar,styled, Box} from '@mui/material'

const Header = styled(AppBar)`
  height : 220px;
  background-color : #00bfa5;
  box-shadow : none;
`

const Component = styled(Box)`
  height : 100vh;
  background-color : #DCDCDC;
`

function Messenger() {
  return (
    <Component>
      <Header>
        <Toolbar>

        </Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  )
}

export default Messenger
