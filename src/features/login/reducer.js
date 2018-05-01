import { 
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS, 
  POST_LOGIN_FAILURE
} from './action'

const initialState = {
  isFetching: false,
  login: {
    status: '',
    data: {}
  }
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
        err: action.err
      }
    default: 
      return state
  }
}