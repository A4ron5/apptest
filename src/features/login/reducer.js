import { 
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS, 
  POST_LOGIN_FAILURE,
  LOGIN,
  LOGOUT,
  LOGIN_SERVER_MESSAGE
} from './action'

const initialState = {
  isFetching: false,
  err: false,
  errServer: '',
  isAuth: '',
  data: {
    status: '',
    message: '',
    data: {
      id: ''
    }
  }
}

export const login = (state = initialState, action) => {
  switch(action.type) {
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        err: false
      } 
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        err: action.err,
        isFetching: false
      }
    case LOGIN:
      return {
        ...state,
        isAuth: true
      }
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        err: false
      }
    case LOGIN_SERVER_MESSAGE: 
      return {
        ...state,
        errServer: action.errServer
      }
    default: 
      return state
  }
}