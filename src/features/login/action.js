import api from '../../api'

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const postLoginRequest = () => ({
  type: POST_LOGIN_REQUEST
})

const postLoginSuccess = ({ data }) => ({
  type: POST_LOGIN_SUCCESS,
  item: data,
})

const postLoginFailure = (err) => ({
  type: POST_LOGIN_FAILURE,
  err
})

export const logIN = () => ({
  type: LOGIN
})

export const logOUT = () => ({
  type: LOGOUT
})

export const postLogin = (email, password) => (dispatch, getState) => {
  dispatch(postLoginRequest());
  
  return api.postLogin(email, password)
    .then(res => {
      dispatch(postLoginSuccess(res))
      console.log(getState())
      if(getState().login.login.status === 'ok') {
        dispatch(logIN())
      }else {
        throw new Error()
      }
    })
    .catch(err => {
      dispatch(postLoginFailure(getState().login.login.message))
    })

}