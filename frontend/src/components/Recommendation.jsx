import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
  flex: 2;
`

const Recommendation = ({ tags }) => {
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
      <Card type='sm' />
    </Container>
  )
}

export default Recommendation
