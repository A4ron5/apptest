import React from 'react'
import { connect } from 'react-redux'
import { Header } from '../../ui/organisms'
import { Container } from '../../ui/atoms'

const AppRaw = (props) => (
  <Container>
    <Header status={props.status}/>
    {props.children}
  </Container>
)

const mapStateToProps = (state) => {
  return {
    status: state.login.login.status
  }
}

export const App = connect(mapStateToProps, null)(AppRaw)