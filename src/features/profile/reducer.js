import { 
  FETCH_INFO_REQUEST,
  FETCH_INFO_SUCCESS, 
  FETCH_INFO_FAILURE
} from './action'

const initialState = {
  data: {
    city: '',
    languages: [],
    social: []
  },
  isFetching: false
}

export const info = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_INFO_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
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