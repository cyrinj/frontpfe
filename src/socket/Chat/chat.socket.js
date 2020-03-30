import socket from '../io.socket.js';
import store from '../../store/index.js'






export function connectionSocket ( idUser) {
    socket.emit('info', idUser)
}


export function envoyermessage (message ) {
    socket.emit('msg', message);
}






