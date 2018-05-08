import { 
  FETCH_INFO_REQUEST,
  FETCH_INFO_SUCCESS, 
  FETCH_INFO_FAILURE
} from './action'

const initialState = {
  data: {
    city: ' ',
    languages: [],
    social: []
  },
  err: false,
  isFetching: false
}

export const info = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_INFO_REQUEST:
      return {
        ...state,
        isFetching: true,
        err: false
      }
    case FETCH_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: action.message,
        data: action.data || state.data,
        status: action.status
      }
    case FETCH_INFO_FAILURE:
      return {
        ...state,
        err: action.err,
        isFetching: false
      }
    default: 
      return state;
  }
}