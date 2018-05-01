import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 32px;
  padding-bottom: 15px;
`

export const PageTitle = ({ children }) => (
  <Title>
    {children}
  </Title>  
)