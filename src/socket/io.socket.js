import io from 'socket.io-client';

let chat = 'http://localhost:3000';

let socket = io.connect(chat);

export default socket;