import React from 'react'
import styled from 'styled-components'
import { Input } from '../atoms'
import { DefaultButton } from '../atoms'
import { LoaderButton } from '../atoms'
import { ErrorMsg } from '../atoms'

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 45px;
  text-align: left;
  border: 2px solid black;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`


export const LoginUI = ({ onClick, onChangeEmail, onChangePass, error, errorMsg, loading }) => (
  <Wrapper>
    <Form>
      <Input onChange={onChangeEmail} email/>
      <Input onChange={onChangePass}/>
      <ErrorMsg error={error} errorMsg={errorMsg}/>
      { loading 
      ? <LoaderButton/> 
      : <DefaultButton onClick={onClick}>Login</DefaultButton>
      }
      </Form>
  </Wrapper>
)