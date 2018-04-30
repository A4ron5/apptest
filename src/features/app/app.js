import React from 'react'
import { connect } from 'react-redux'
import { Header } from '../../ui/organisms'
import { Container } from '../../ui/atoms'

export const App = (props) => (
  <Container>
    <Header isLogin/>
    {props.children}
  </Container>
)

const mapStateToProps = (state) => {

}