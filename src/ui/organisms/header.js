import React from 'react'
import styled from 'styled-components'
import { HeaderTitle } from '../atoms'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  height: 60px;
  margin-top: 5px;
  margin-bottom: 50px;
`


export const Header = ({ isLogin }) => (
  <Wrapper>
    <HeaderTitle isLogin path='/news'> Новости </HeaderTitle>
    <HeaderTitle isLogin={isLogin} path='/profile'> Профиль </HeaderTitle>
    <HeaderTitle isLogin path='/login'>
      {isLogin ? 'Выйти' : 'Войти'}
    </HeaderTitle>
  </Wrapper>
)