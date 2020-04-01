
import axios from 'axios';
//import VUe from 'vue';
import config from '../config/dev.json';

let path = 'api/v2';
let url = config.host + path + '/tripper'
//let urlSecure = config.host + path + '/secure/tripper'



export function sendDemandeService(demande) {
    return new Promise((resolve, reject) => {
        axios.post(url + '/submitdemande', demande).then(response => {
            resolve(response.data.data)
        }).catch(err => reject(err))
    }) 
}



