import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RecommendCard from './RecommendCard'
const Container = styled.div`
  flex: 2;
`

const Recommendation = ({ tags }) => {
  return (
    <Container>
      <RecommendCard type='sm' />
      <RecommendCard type='sm' />
      <RecommendCard type='sm' />
      <RecommendCard type='sm' />
      <RecommendCard type='sm' />
      <RecommendCard type='sm' />
      <RecommendCard type='sm' />
      <RecommendCard type='sm' />
      <RecommendCard type='sm' />
      <RecommendCard type='sm' />
      <RecommendCard type='sm' />
    </Container>
  )
}

export default Recommendation
