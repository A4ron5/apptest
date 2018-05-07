import React from 'react'
import styled from 'styled-components'

const ButtonRaw = styled.button.attrs({
  type: 'submit'
})`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid black;
  background: white;
  font-size: 24px;
`

export const DefaultButton = ({ children, onClick }) => (
  <ButtonRaw onClick={onClick}>{children}</ButtonRaw>
)