import React from 'react'
import styled from 'styled-components'
import { Input } from '../atoms'
import { Button } from '../atoms'

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 45px;
  text-align: left;
  border: 2px solid black;
`

const Form = styled.form``

export const LoginUI = ({ onClick, onChangeEmail, onChangePass }) => (
  <Wrapper>
    <Form>
      <Input onChange={onChangeEmail} email/>
      <Input onChange={onChangePass}/>
      <Button onClick={onClick}>Login</Button>
    </Form>
  </Wrapper>
)