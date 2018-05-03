import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from './icon'

const Info = styled.li`
  font-size: 24px;
  list-style-type: circle;
  margin-left: 25px;
  margin-bottom: 10px;
`;

const CustomLink = styled(Link)`
  display: flex;
  text-decoration: inherit;
  &:hover{
    text-decoration: underline;
  }
`

export const LangList = ({ arr }) => ( arr.map(item => <Info key={item}>{item}</Info>) )

export const SocialList = ({ arr, icons }) => (
  arr.map(item => {
    const pathIcon = icons[item.label];
    return (
      <CustomLink to={item.link} target='_blank' key={item.label}>
          <Info>{item.label}</Info>
          <Icon path={pathIcon}/>
      </CustomLink>
    )
  })
)