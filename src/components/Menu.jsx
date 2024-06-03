import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import HomeIcon from '@mui/icons-material/Home'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined'
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined'

const Container = styled.div`
  flex: 1;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  font-size: 15px;
  position: sticky;
  top: 0;
`

const Wrapper = styled.div`
  padding: 5px 15px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 5px 0px;
`

const Img = styled.img`
  height: 20px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px 0px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`

const Hr = styled.hr`
  margin: 5px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`

const Login = styled.div`
  margin: 10px 0px;
`

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

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
  margin-top: 10px;
`

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src={logo} />
            LeonTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon sx={{ fontSize: 'medium' }} />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon sx={{ fontSize: 'medium' }} />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon sx={{ fontSize: 'medium' }} />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon sx={{ fontSize: 'medium' }} />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon sx={{ fontSize: 'medium' }} />
          History
        </Item>
        <Hr />

        <Login>
          Sign In for more content
          <Link to='/signin' style={{ textDecoration: 'none' }}>
            <Button>
              {' '}
              <AccountCircleOutlinedIcon sx={{ fontSize: 'medium' }} />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF LeonTube</Title>
        <Item>
          <LibraryMusicOutlinedIcon sx={{ fontSize: 'medium' }} />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon sx={{ fontSize: 'medium' }} />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon sx={{ fontSize: 'medium' }} />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon sx={{ fontSize: 'medium' }} />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon sx={{ fontSize: 'medium' }} />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon sx={{ fontSize: 'medium' }} />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon sx={{ fontSize: 'medium' }} />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon sx={{ fontSize: 'medium' }} />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon sx={{ fontSize: 'medium' }} />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon sx={{ fontSize: 'medium' }} />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
