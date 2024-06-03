import React from 'react'
import styled from 'styled-components'
import thumbnail from '../images/thumbnail.png'

const Container = styled.div`
  width: 300px;
  margin-bottom: 45px;
  gap: 10px;
`
const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999
  flex: 1
`
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  flex: 1;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  };
`

const Texts = styled.div``

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`

const Card = () => {
  return (
    <Container>
      <Image src={thumbnail} />
      <Details>
        <ChannelImage src={thumbnail} />
        <Texts>
          <Title>Lorem ipsum dolor</Title>
          <ChannelName>LeonTube</ChannelName>
          <Info>100k Views . 1 month ago</Info>
        </Texts>
      </Details>
    </Container>
  )
}

export default Card
