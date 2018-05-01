import React from 'react'
import styled from 'styled-components'

const Info = styled.li`
  display: flex;
`;

const Icon = styled.object.attrs({
  type: 'image/svg+xml',
  data: `${props => props.data}`
})``

export const ProfileInfo = ({info, data}) => (
  <Info>
    <Icon data={data}/>
    {info}
  </Info>
)