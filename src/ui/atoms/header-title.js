import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Wrapper = styled.div``

const Title = styled.p`
  font-size: 32px;
  cursor: ${props => props.isLogin ? 'pointer' : 'null'};
  color: ${props => props.isLogin ? 'black' : '#a4a4a5' };
  &:hover { 
    text-decoration: ${props => props.isLogin ? 'underline' : 'none' };
  }
`
const Link = styled(NavLink)`
  color: inherit;
  text-decoration: inherit;
`

export const HeaderTitle = ({ children, isLogin, path }) => (
  <Wrapper>
    <Title isLogin={isLogin}>
      <Link to={path} activeStyle={{textDecoration: 'underline'}}>
        {children}
      </Link>
    </Title>
  </Wrapper>
)