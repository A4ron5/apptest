import api from '../../api'

export const FETCH_INFO_REQUEST = 'FETCH_INFO_REQUEST'
export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS'
export const FETCH_INFO_FAILURE = 'FETCH_INFO_FAILURE'

const fetchInfoRequest = () => ({
  type: FETCH_INFO_REQUEST
})

const fetchInfoSuccess = ({ status, data, message }) => ({
  type: FETCH_INFO_SUCCESS,
  ...status,
  ...data,
  ...message
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
      if(getState().info.status !== 'ok'){
        dispatch(fetchInfoFailure(true))
        throw new Error() 
      }
    })
    .catch(err => console.log('err'))

}