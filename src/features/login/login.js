import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { LoginUI } from '../../ui/molecules'
import { postLogin } from './action'
import { Loader } from '../loader'

class LoginRaw extends Component {

  state = {
    email: '',
    password: ''
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.status === 'ok') {
      const { history} = this.props;
      const { id } = nextProps.data;
      history.push(`/profile/${id}`)
    }
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
      <Loader loading={isFetching}>
        <LoginUI 
          onClick={this.handleClick}
          onChangeEmail={this.handleChangeEmail}
          onChangePass={this.handleChangePass}
        />
      </Loader>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.login.login.status,
    isFetching: state.login.isFetching,
    data: state.login.login.data
  }
}

export const Login = withRouter(connect(mapStateToProps, {postLogin})(LoginRaw))