import axios from 'axios'
import jwtDecode from 'jwt-decode'

const httpClient = axios.create()

httpClient.getToken = () => {
  return localStorage.getItem('token')
}

httpClient.setToken = (token) => {
  localStorage.setItem('token', token)
  return token  
}

httpClient.getCurrentUser = function() {
  const token = this.getToken()
  if(token) return jwtDecode(token)
  return null
}

httpClient.signUp = function(userInfo) {
  // this is same as httpClient
  return this({ method: 'post', url: '/api/users', data: userInfo })
    .then((serverResponse) => {
      if(serverResponse.data.message === "SUCCESS") {
        const token =  serverResponse.data.payload
        console.log(token)
        this.defaults.headers.common.token = this.setToken(token)
        return jwtDecode(token)
      } else {
        return false
      }
    })
}

httpClient.logIn = function(credentials) {
  return this({ method: 'post', url: '/api/users/authenticate', data: credentials })
    .then((serverResponse) => {
      if(serverResponse.data.message === "SUCCESS") {
        const token =  serverResponse.data.payload
        this.defaults.headers.common.token = this.setToken(token)
        return jwtDecode(token)
      } else {
        return false
      }
    })
}

httpClient.logOut = function() {
  localStorage.clear()
  delete httpClient.defaults.headers.common.token
  return true
}

// common for all types of request ie. patch only for patch
// send the request with the token as the header
httpClient.defaults.headers.common.token = httpClient.getToken()

export default httpClient