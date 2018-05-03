import React from 'react'
import styled from 'styled-components'
import { LangList } from '../atoms'
import { SocialList } from '../atoms'
import icons from '../../public'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
  margin: 0 auto;
`

const Section = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`

const Title = styled.h2`
  font-size: 32px;
  padding-bottom: 10px;
`

const Info = styled.li`
  font-size: 24px;
  list-style-type: circle;
  margin-left: 25px;
`;

export const InfoUI = ({ city, languages, social  }) => (
  <Wrapper>
    <Section>
      <Title>Город: </Title>
      <Info>{city}</Info>
    </Section>
    <Section>
      <Title>Знание языков: </Title>
      <LangList arr={languages}/>
    </Section>
    <Section>
      <Title>Ссылки: </Title>
      <SocialList arr={social} icons={icons}/>
    </Section>
  </Wrapper>
)

