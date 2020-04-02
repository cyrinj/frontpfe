
import axios from 'axios';
//import VUe from 'vue';
import config from '../config/dev.json';

let path = 'api/v2';
let url = config.host + path + '/tripper'
//let urlSecure = config.host + path + '/secure/tripper'

export function editprofilService(obj) {
    console.log("fff",obj.file.get("image"))
    return new Promise((resolve, reject) => {
      /*  for (var key of obj.file.entries()) {
			console.log(key[0] + ', ' + key[1])
		}*/
        axios.post(url  + '/editprofile', obj,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            
      // console.log('test response', response)
          //  localStorage.token = response.data.data.token
            let userq = response.data.data
            //console.log("hey",userq)
            resolve(userq)
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


export async function getProfile() {
    return new Promise((resolve, reject) => {
        axios.get(url + '/profile').then(response => {
            console.log('test oinfo user', response.data.data )
            resolve(response.data.data)
        }).catch(err => console.log('test err', err))
    })
}

export function tripsuggestService(form) {
    return new Promise((resolve, reject) => {
       console.log(url + '/submitform')
        axios.post(url + '/submitform', form).then(response => {
         //   console.log("dsfdf")
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

export function ajoutermessageService(username,idchat,message) {
    return new Promise((resolve, reject) => {
        axios.post(url + '/ajoutermessage',{username,idchat,message}).then(response => {
            console.log(response.data.data)
        //  resolve(userq)
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

export function getchatService(id) {
    return new Promise((resolve, reject) => {
      // console.log(url + '/alltripsbyuser')
        axios.post(url + '/allmessagesbyuser',id).then(response => {
            console.log(response.data.data)
        //  resolve(userq)
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

export function getchatbyadminService(x) {
    return new Promise((resolve, reject) => {
      // console.log(url + '/alltripsbyuser')
        axios.post(url + '/allmessagesbyadmin',x).then(response => {
            console.log("res",response.data.data)
        //  resolve(userq)
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

export function tripsdraftsService() {
    return new Promise((resolve, reject) => {
        axios.post(url + '/alltripsdraftbyuser').then(response => {
            console.log(response)
        //  resolve(userq)
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}



export function tripstatusService() {
    return new Promise((resolve, reject) => {
       console.log(url + '/alltripsbyuser')
        axios.post(url + '/alltripsbyuser').then(response => {
            console.log(response)
        //  resolve(userq)
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

/*export function getnotifService() {
    return new Promise((resolve, reject) => {
        axios.post(url + '/allnotifbyuser').then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}*/

/*
export function notifdeleteService(item) {
  
    return new Promise((resolve, reject) => {
        axios.post(url + '/deletenotif',item).then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}*/


export function tripdeleteService(item) {
  
    return new Promise((resolve, reject) => {
      // console.log(url + '/alltripsbyuser')
        axios.post(url + '/annulertriproposition',item).then(response => {
           // console.log("fff",item)
        //  resolve(userq)
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

export function tripupdateService(form) {
  
    return new Promise((resolve, reject) => {
        axios.post(url + '/updatetrip',form).then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

