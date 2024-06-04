import React from 'react'
import styled from 'styled-components'
import LamaTube from '../img/logo.png'
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
import { Link } from 'react-router-dom'

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow-y: scroll;
`
const Wrapper = styled.div`
  padding: 18px 26px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`

const Img = styled.img`
  height: 25px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`

const Login = styled.div``
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src={LamaTube} />
            LeonTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon sx={{ fontSize: 20 }} />
          Home
        </Item>

        <Item>
          <ExploreOutlinedIcon sx={{ fontSize: 20 }} />
          Explore
        </Item>

        <Item>
          <SubscriptionsOutlinedIcon sx={{ fontSize: 20 }} />
          Subscriptions
        </Item>

        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon sx={{ fontSize: 20 }} />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon sx={{ fontSize: 20 }} />
          History
        </Item>
        <Hr />

        <Login>
          Sign in for more.
          <Link to='signin' style={{ textDecoration: 'none' }}>
            <Button>
              {/* <AccountCircleOutlinedIcon sx={{ fontSize: 20 }} /> */}
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />

        <Title>BEST OF LeonTUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon sx={{ fontSize: 20 }} />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon sx={{ fontSize: 20 }} />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon sx={{ fontSize: 20 }} />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon sx={{ fontSize: 20 }} />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon sx={{ fontSize: 20 }} />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon sx={{ fontSize: 20 }} />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon sx={{ fontSize: 20 }} />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon sx={{ fontSize: 20 }} />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon sx={{ fontSize: 20 }} />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon sx={{ fontSize: 20 }} />
          {darkMode ? 'Light' : 'Dark'} Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
