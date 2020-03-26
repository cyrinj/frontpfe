import axios from 'axios';
//import VUe from 'vue';
import config from '../config/dev.json';

let path = 'api/v2';
let url = config.host + path + '/tripper'
//let urlSecure = config.host + path + '/secure/tripper'

export function editprofilService(user) {
    return new Promise((resolve, reject) => {
      //  console.log('test url ', url)
        axios.post(url  + '/editprofile', user).then(response => {
            
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

export function tripdeleteService(item) {
  
    return new Promise((resolve, reject) => {
      // console.log(url + '/alltripsbyuser')
        axios.post(url + '/annulertriproposition',item).then(response => {
            console.log("fff",item)
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

/*supprimer(item){
 
    var r = confirm("Do you want to delete the trip");
    if(r==true){
           return new Promise((resolve, reject) => {
         //   console.log("before", window.localStorage.token)
           // axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.token}`;
           axios.post("http://localhost:3000/api/v2/tripper/annulertriproposition", item).then(data => {
           //   console.log("the data",data.data.data.username)
           // this.u1=data.data.data.username
           console.log(data.data.data)
              resolve(data.data.data)
               this.afterdelete()
             })
             .catch(error => {});
         });}
   }*/