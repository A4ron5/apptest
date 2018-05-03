import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Header } from '../../ui/organisms'
import { Container } from '../../ui/atoms'
import { logOUT } from '../login/action'


const AppRaw = (props) => (
  <Container>
    <Header 
      isLogin={props.isLogin} 
      onClick={() => props.logOUT()} 
    />
    {props.children}
  </Container>
)

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isAuth,
  }
}

export const App = withRouter(connect(mapStateToProps, { logOUT })(AppRaw))