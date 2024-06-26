import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import Comments from '../components/Comments'
import Card from '../components/Card'
import Recommendation from '../components/Recommendation'

import video from '../img/video.mp4'
import thumbnail from '../img/thumbnail.jpg'

const Container = styled.div`
  display: flex;
  gap: 24px;
`

const Content = styled.div`
  flex: 5;
`
const VideoWrapper = styled.div``

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`

const ChannelName = styled.span`
  font-weight: 500;
`

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`

const Description = styled.p`
  font-size: 14px;
`

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={video} controls />
        </VideoWrapper>
        <Title>Lorem ipsum dolor sit amet.</Title>
        <Details>
          <Info>100k views • 1 month ago</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon />
              Like
            </Button>
            <Button>
              <ThumbDownIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={thumbnail} />
            <ChannelDetail>
              <ChannelName>LeonTube</ChannelName>
              <ChannelCounter>100k subscribers</ChannelCounter>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam, laboriosam!
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation />
    </Container>
  )
}

export default Video
