import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Container = styled.div`
  flex: 2;
`

const Recommendation = () => {
  return (
    <Container>
      <Card type='sm' />
      <Card type='sm' />
      <Card type='sm' />
      <Card type='sm' />
      <Card type='sm' />
      <Card type='sm' />
      <Card type='sm' />
      <Card type='sm' />
      <Card type='sm' />
      <Card type='sm' />
    </Container>
  )
}

export default Recommendation
