import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
`

const Search = styled.div``

const Input = styled.input``

const Button = styled.button`
  margin-top: 9px;
  padding: 3px 5px;
  background: transparent;
  border: 1px solid blue;
  color: blue;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search for something' />
          <SearchOutlinedIcon />
        </Search>
        <Button>
          {' '}
          <AccountCircleOutlinedIcon sx={{ fontSize: 'medium' }} />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  )
}

export default NavBar
