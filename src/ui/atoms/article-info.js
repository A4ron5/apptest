import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 24px;
  text-align: justify;
  text-indent: 45px;
  line-height: 1.5;
`

export const ArticleInfo = ({ children }) => (
  <Text>
    {children}
  </Text>
)