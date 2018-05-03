import React from 'react'
import styled from 'styled-components'

const IconRaw = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(${props => props.path}) no-repeat;
  margin-left: 10px;
`
export const Icon = ({ path }) => (
  <IconRaw path={path}/>
)