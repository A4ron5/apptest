import { 
  FETCH_INFO_REQUEST,
  FETCH_INFO_SUCCESS, 
  FETCH_INFO_FAILURE
} from './action'

const initialState = {
  info: {
    data: {
      city: '',
      languages: [],
      social: []
    }
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
        info: action.item,
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