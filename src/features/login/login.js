import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { LoginUI } from '../../ui/molecules'
import { postLogin } from './action'

class LoginRaw extends Component {

  state = {
    email: '',
    password: ''
  }
  
  componentWillReceiveProps(nextProps){
    const { history } = this.props;
    nextProps.isAuth && history.push(`/profile`)
  }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleChangePass = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.postLogin(this.state.email, this.state.password)
  }

  render() {
    const { isFetching } = this.props;
    return (
        <LoginUI 
          onClick={this.handleClick}
          onChangeEmail={this.handleChangeEmail}
          onChangePass={this.handleChangePass}
          loading={isFetching}
        />
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.login.isFetching,
    isAuth: state.login.isAuth
  }
}

export const Login = withRouter(connect(mapStateToProps, { postLogin })(LoginRaw))