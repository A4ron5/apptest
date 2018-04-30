import api from '../../api'

export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST'
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE'

const fetchArticlesRequest = () => ({
  type: FETCH_ARTICLES_REQUEST
})

const fetchArticlesSuccess = ({ data }) => ({
  type: FETCH_ARTICLES_SUCCESS,
  items: data
})

const fetchArticlesFailure = (err) => ({
  type: FETCH_ARTICLES_FAILURE,
  err
})

export const fetchArticles = () => dispatch => {
  dispatch(fetchArticlesRequest());
  
  return api.fetchArticles()
    .then(data => dispatch(fetchArticlesSuccess(data)))
    .catch(err => dispatch(fetchArticlesFailure(err)))

}