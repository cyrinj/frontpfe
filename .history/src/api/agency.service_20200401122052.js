
import axios from 'axios';
//import VUe from 'vue';
import config from '../config/dev.json';

let path = 'api/v3';
let url = config.host + path + '/agency'
//let urlSecure = config.host + path + '/secure/tripper'



export function sendDemandeService(demande) {
    return new Promise((resolve, reject) => {
        axios.post(url + '/submitdemande', demande).then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}



