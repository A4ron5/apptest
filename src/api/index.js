import axios from 'axios'

const URL_NEWS = 'http://5ae32aeb34b5970014d2edd6.mockapi.io/news '
const URL_INFO = 'https://mysterious-reef-29460.herokuapp.com/api/v1/user-info'
const URL_POST = 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate'


const fetchArticles = () => {
  return axios.get(URL_NEWS);
}

const fetchInfo = (id) => {
  return axios.get(`${URL_INFO}/${id}`)
  //return axios.get(`${URL_INFO}/2`)
  
}

const postLogin = ({ email, password }) => {
  const config = {
    method: 'post',
    url: URL_POST,
    data: {
      email: email,
      password: password
    },
    headers: {
      'content-type': 'application/json'
    }
  }
  
  return axios(config)
}



export default {
  fetchArticles,
  fetchInfo,
  postLogin
}