import api from '../../api'

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const LOGIN_SERVER_MESSAGE = 'LOGIN_SERVER_MESSAGE'

const postLoginRequest = () => ({
  type: POST_LOGIN_REQUEST
})

const postLoginSuccess = ({ data }) => ({
  type: POST_LOGIN_SUCCESS,
  data
})

const postLoginFailure = (err) => ({
  type: POST_LOGIN_FAILURE,
  err
})

const loginServerErr = (errServer) => ({
  type: LOGIN_SERVER_MESSAGE,
  errServer
})

export const logIN = () => ({
  type: LOGIN
})

export const logOUT = () => ({
  type: LOGOUT
})

export const postLogin = ({ email, password }) => (dispatch, getState) => {
  dispatch(postLoginRequest());
  
  return api.postLogin({ email, password })
    .then(res => {
      dispatch(postLoginSuccess(res))
      
      getState().login.data.status === 'ok'
        ? dispatch(logIN()) 
        : dispatch(postLoginFailure(true))
    })
    .catch(err => {
      dispatch(postLoginFailure(true))
      dispatch(loginServerErr(err))
    })

}