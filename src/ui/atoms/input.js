import React from 'react'
import styled from 'styled-components'

const InputRaw = styled.input.attrs({
  type: props => props.email ? 'email' : 'password',
  placeholder: props => props.email ? 'email' : 'password'
})`
  width: 100%;
  font-size: 24px;
  padding: 15px 20px;
  margin-bottom: 40px;
  &:last-child{
    margin-bottom: 0;
  }
`

export const Input = ({ email, onChange}) => (
  <InputRaw required onChange={onChange} email={email}/>
)
