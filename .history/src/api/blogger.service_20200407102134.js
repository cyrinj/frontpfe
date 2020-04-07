
import axios from 'axios';
//import VUe from 'vue';
import config from '../config/dev.json';

let path = 'api/v2';
let url = config.host + path + '/host'
//let urlSecure = config.host + path + '/secure/tripper'




export function reservationstatusService() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/api/v2/tripper/alltripsbyuser').then(response => {
            console.log("hhhhhh")
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}


export function tripsacceptedService() {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/v2/host/alltripsforblogger').then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

export function sendReservationService(reservation) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/v2/host/hostrip', reservation).then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

export function reservationdeleteService(reservation) {
  
    return new Promise((resolve, reject) => {
      // console.log(url + '/alltripsbyuser')
        axios.post(url + '/delete',item).then(response => {
           // console.log("fff",item)
        //  resolve(userq)
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}



