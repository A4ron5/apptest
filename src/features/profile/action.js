import api from '../../api'

export const FETCH_INFO_REQUEST = 'FETCH_INFO_REQUEST'
export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS'
export const FETCH_INFO_FAILURE = 'FETCH_INFO_FAILURE'

const fetchInfoRequest = () => ({
  type: FETCH_INFO_REQUEST
})

const fetchInfoSuccess = ({ data }) => ({
  type: FETCH_INFO_SUCCESS,
  ...data
})

const fetchInfoFailure = (err) => ({
  type: FETCH_INFO_FAILURE,
  err
})

export const fetchInfo = (id) => (dispatch, getState) => {
  dispatch(fetchInfoRequest());
  
  return api.fetchInfo(id)
    .then(res => {
      dispatch(fetchInfoSuccess(res))
      getState().info.status === 'ok'
        ? ''
        : dispatch(fetchInfoFailure(true))
    })
    .catch(err => console.log(err))

}