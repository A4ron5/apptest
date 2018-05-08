import styled from 'styled-components'
import React from 'react'

const Message = styled.p`
  font-size: 24px;
  color: red;
  text-align: center;
`

export const ErrorProfile = ({msg}) => (
  <Message>{msg}</Message>
)