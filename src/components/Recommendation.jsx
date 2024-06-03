import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
`

const Recommendation = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}

export default Recommendation
