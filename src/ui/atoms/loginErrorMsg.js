import React from 'react'
import styled from 'styled-components'

const Message = styled.p`
  position: absolute;
  top: 335px;
  color: red;
  font-size: 20px;
`
export const ErrorMsg = ({ error, errorMsg }) => {
  const message = error ? errorMsg : '';
  return <Message>{message}</Message>
}