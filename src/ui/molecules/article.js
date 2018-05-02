import React from 'react'
import styled from 'styled-components'
import { PageTitle, ArticleInfo } from '../atoms'

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 15px 20px;
  border: 3px solid black;
  box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
  transition:all .5s ease;
  &:hover{
    box-shadow:2px 8px 4px -6px hsla(0,0%,0%,.3);
  }
`

export const ArticleUI = ({ title, text }) => (
  <Wrapper>
    <PageTitle>{ title }</PageTitle>
    <ArticleInfo>{ text }</ArticleInfo>
  </Wrapper>
)