import React from 'react'
import styled from 'styled-components'
import { HeaderTitle } from '../atoms'
import { Title } from '../atoms'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  height: 60px;
  margin-top: 5px;
  margin-bottom: 50px;
`

const Auth = ({ isLogin, onClick }) => (
  isLogin 
  ? <Title isLogin onClick={onClick}>Выйти</Title>
  : <HeaderTitle isLogin path='/login'>Войти</HeaderTitle>
)

const AuthProfile = ({ isLogin }) => {
  const url = isLogin ? `/profile` : '';
  return (
    isLogin
    ? <HeaderTitle isLogin={isLogin} path={url}> Профиль </HeaderTitle>
    : <Title isLogin={isLogin}> Профиль </Title>
  )
}

export const Header = ({ isLogin, onClick }) => {
  return (
    <Wrapper>
      <HeaderTitle isLogin exact={true} path='/'> Главная </HeaderTitle>      
      <HeaderTitle isLogin path='/news'> Новости </HeaderTitle>
      <AuthProfile isLogin={isLogin}/> 
      <Auth onClick={onClick} isLogin={isLogin}/>
    </Wrapper>
  )
}