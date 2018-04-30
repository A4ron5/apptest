import { 
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS, 
  FETCH_ARTICLES_FAILURE
} from './action'

export const articles = (state = { isFetching: false, articles: []}, action) => {
  switch(action.type) {
    case FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        articles: action.items,
      }
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        err: action.err
      }
    default: 
      return state;
  }
}