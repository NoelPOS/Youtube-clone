import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const Container = styled.div`
  height: 56px;
  background-color: ${({ theme }) => theme.bgLighter};
  position: sticky;
  top: 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 40%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
  color: ${({ theme }) => theme.text};
`

const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
`

const Button = styled.button`
  padding: 5px;
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
        <Link to='/signin' style={{ textDecoration: 'none' }}>
          <Button>
            {' '}
            <AccountCircleOutlinedIcon sx={{ fontSize: 'medium' }} />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default NavBar
