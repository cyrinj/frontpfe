
import axios from 'axios';
//import VUe from 'vue';
import config from '../config/dev.json';

let path = '/api/v3';
let url = config.host + path + '/agency'
//let urlSecure = config.host + path + '/secure/tripper'




export function demandestatusService(agency) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/v2/agency/agencyoffers',agency).then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}


export function tripsproposésService() {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/v2/host/alltripsforblogger').then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

export function sendDemandeService(demande) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/v2/agency/makeOFFER', demande).then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}


export function demandeupdateService(reservation) {
  
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/v2/agency/update',reservation).then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}


export function demandedeleteService(demande) {
  
    return new Promise((resolve, reject) => {
      // console.log(url + '/alltripsbyuser')
        axios.post('http://localhost:3000/api/v2/agency/deleteoffer',demande).then(response => {
           // console.log("fff",item)
        //  resolve(userq)
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

