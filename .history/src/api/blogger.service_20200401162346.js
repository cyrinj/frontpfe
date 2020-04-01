
import axios from 'axios';
//import VUe from 'vue';
import config from '../config/dev.json';

let path = 'api/v4';
let url = config.host + path + '/blogger'
//let urlSecure = config.host + path + '/secure/tripper'




export function reservationstatusService() {
    return new Promise((resolve, reject) => {
        axios.post(url + '/allreservationbyblogger').then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}


export function tripsacceptedService() {
    return new Promise((resolve, reject) => {
        axios.post(url + '/alltripsacceptedbywantotrip').then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

export function sendReservationService(reservation) {
    return new Promise((resolve, reject) => {
        axios.post(url + '/submitreservationblogger', reservation).then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}



