import config from '../config/dev.json'
import axios from 'axios'

let url = config.host + 'api/v1'
let urlSecure = config.host + 'api/v1' + '/secure'
let path = 'api/v2';
let url1 = config.host + path + '/tripper'

export function forgetpasswordService(user) {
  return new Promise((resolve, reject) => {
     // console.log('test url ', url)
      axios.post(url  + '/auth/forgetPassword', user).then(response => {
          resolve(response.data.data)
      }).catch(err => reject(err))
  }) 
}

export function secquestionService(user) {
  return new Promise((resolve, reject) => {
    //  console.log('test url ', url)
      axios.post(url  + '/auth/secquestion', user).then(response => {
          resolve(response.data.data)
      }).catch(err => reject(err))
  }) 
}

export function resetpasswordService(user) {
  return new Promise((resolve, reject) => {
    //  console.log('test url ', url)
      axios.post(url  + '/auth/resetpassword', user).then(response => {
        localStorage.token = response.data.data.token

          resolve(response.data.data)
      }).catch(err => reject(err))
  }) 
}


export function logoutService(user) {
  return new Promise((resolve, reject) => {
     // console.log('test url ', url)
      axios.post(url  + '/auth/logout', user).then(response => {
          
    //  console.log('test response', response)
          localStorage.token = response.data.data.token
      //    let userq = response.data.data.user
          resolve(response.data.data)
      }).catch(err => reject(err))
  }) 
}

export function loginService(user) {
    return new Promise((resolve, reject) => {
         axios.post(url  + '/auth/login', user).then(response => {
            localStorage.token = response.data.data.token
            let userq = response.data.data.user
            let msg =  response.data.data.msg
            resolve({userq,msg})
        }).catch(err => reject(err))
    }) 
}

export function changepassword_inService(user) {
  return new Promise((resolve, reject) => {
    //  console.log('test url ', url)
      axios.post(url  + '/changepassword_in', user).then(response => {
          
          resolve(response.data.data)
      }).catch(err => reject(err))
  }) 
}

export function registerService(user) {
  return new Promise((resolve, reject) => {
      console.log('test url ', url)
      axios.post(url  + '/auth/register', user).then(response => {
          resolve(response)
      }).catch(err => reject(err))
  }) 
}



export async function getInfo (token) {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ token
        axios.get(url1 + '/info').then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    })
}


export async function refresh() {
  return new Promise((resolve, reject) => {
    if( localStorage.token) {
      let token = localStorage.token
      setToken(token)
      axios.get(url1 + '/refresh').then((response) => {
        localStorage.token = response.data.data
        let token = localStorage.token
        setToken(token)
        resolve(token)
      }).catch(err => reject(err))
    } else {
      reject ('logout and login again')
    }
  })
}

export async function setToken(token) {
    axios.defaults.headers['Authorization']  = 'Bearer ' + token
  }