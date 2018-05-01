import api from '../../api'

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'

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

export const postLogin = (email, password) => dispatch => {
  dispatch(postLoginRequest());
  
  return api.postLogin(email, password)
    .then(data => dispatch(postLoginSuccess(data)))
    .catch(err => dispatch(postLoginFailure(err)))

}