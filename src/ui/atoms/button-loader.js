import React from 'react'
import styled, { keyframes } from 'styled-components'

const slide = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
`

const Loader = styled.div`
  display: block;
  margin: 0 auto;
  padding: 15px 20px;
`

const Dot = styled.div`
  width: 24px;
  height: 24px;
  background: #3ac;
  border-radius: 100%;
  display: inline-block;
  animation: ${slide} 1s infinite;
  &:nth-child(1) {
    animation-delay: 0.1s;
    background: #32aacc;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
    background: #64aacc;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
    background: #96aacc;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
    background: #c8aacc;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
    background: #faaacc;
  }
`

export const LoaderButton = () => (
  <Loader>
    <Dot/>
    <Dot/>
    <Dot/>
    <Dot/>
    <Dot/>
  </Loader>
)