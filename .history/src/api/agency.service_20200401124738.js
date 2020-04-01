
import axios from 'axios';
//import VUe from 'vue';
import config from '../config/dev.json';

let path = 'api/v3';
let url = config.host + path + '/agency'
//let urlSecure = config.host + path + '/secure/tripper'




export function demandestatusService() {
    return new Promise((resolve, reject) => {
        axios.post(url + '/alldemandesbyagency').then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}


export function tripsproposésService() {
    return new Promise((resolve, reject) => {
        axios.post(url + '/alltripsproposésbywantotrip').then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}

export function sendDemandeService(demande) {
    return new Promise((resolve, reject) => {
        axios.post(url + '/submitdemandeagency', demande).then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}



