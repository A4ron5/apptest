import { 
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS, 
  POST_LOGIN_FAILURE,
  LOGIN,
  LOGOUT
} from './action'

const initialState = {
  isFetching: false,
  login: {
    status: '',
    message: '',
    data: {
      id: ''
    }
  },
  isAuth: false
}

export const login = (state = initialState, action) => {
  switch(action.type) {
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      } 
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        login: action.item
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
        state: initialState
      }
    default: 
      return state
  }
}