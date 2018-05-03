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
    .then(res => {
      if(res.status === 200){
        dispatch(fetchArticlesSuccess(res))
      }else {
        throw new Error(res.statusText)
      }
    })
    .catch(err => dispatch(fetchArticlesFailure(err)))

}