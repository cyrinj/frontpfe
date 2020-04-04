
<template>
  <section class="chat-box">
    

    
    <div class="chat-inputs">
      <textarea rows="1" type="text" v-model="usermsg" @keyup.enter="send" />
    </div>
    <div class="soustext">
      <button @click="send()">
        <i class="fas fa-paper-plane "></i>
      </button>
    </div>
  </section>


</template>

<script>
import {
  getchatService,
  ajoutermessageService
} from "@/api/tripper.service.js";
import io from "socket.io-client";

import { connectionSocket } from "@/socket/Chat/chat.socket.js";
export default {
  mixins: [UserMixin],

  name: "chat",
  data() {
    return {
      user:null,
      x:false,
      messageVal: "",
      messages: [],
      messages1: [],
      usermsg: "",
      idchat: "",
      obj: {},
      listusers: [],
      monchat: [],
      socket: io.connect("http://localhost:3000")
    };
  },

 

  mounted() {
        this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
            // you can also do this.messages.push(data)
        });
    },

  methods: {
    reafficher(){
       this.x=true
    },
    show(){
       this.x=false
    },
    send() {
            
            this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                message: this.usermsg
            });
            this.usermsg = ''
        }
  }
};
</script>


<style scoped>
.reafficher{
  
    background-color: rgb(201, 197, 241);
 text-align: left;
  width: 20vw;
  height: 30px;
  color: rgb(255, 253, 253);

  border-block-end-color: rgb(208, 207, 228);
  font-size: 16px;
  margin-left: 316px;
  position: absolute;
  top: 620px;
}
.cadre_status {
   z-index: 99 !important; 
  position: absolute;
  left: 316px;
  top: 293px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: rgb(242, 242, 248);
 width: 20vw;
  height: 54vh;
}

.mon_cadre {
  position: absolute;
  left: 410px;
  top: 200px;
  width: 780px;
  background-color: rgb(244, 248, 245);
  height: 460px;
  padding: 5px 90px 10px 90px;
  border: 1px solid rgb(235, 229, 229);
}

.chat-box-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  
  padding-right: 25px;
}
.chat-box-list-container {
  overflow-y: scroll;
  scrollbar-color: rgb(208, 207, 228) rgb(226, 233, 226);
  height: 280px;
  scrollbar-width: thin;
}

.me {
  float: right;
  background-color: rgb(159, 163, 221);
}

.notme {
  float: left;
  background-color: rgb(140, 226, 140);
}

span {
  padding: 8px;

  border-radius: 4px;
  max-width: 100%;
  color: white;
}

.chatbox2 {
  
  position: absolute;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: rgb(201, 197, 241);
  color: rgb(255, 253, 253);
 text-align: left;
  width: 20vw;
  height: 30px;
 
 
  border-block-end-color: rgb(208, 207, 228);
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  align-items: space-between;
  justify-content: space-between;
}
.chat-box {
  
  position: absolute;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-top: 30px;
  width: 20vw;
  height: 50vh;
  margin-left: auto;
  margin-right: auto;
  align-items: space-between;
  justify-content: space-between;
}
.chat-inputs {
  display: flex;
}

textarea {
  width: 100%;
  padding-left: 15px;
  overflow: hidden;
  border: none;
  color: rgb(156, 156, 228);
  resize: none;
  background-color: rgb(251, 251, 251);
}
button {
  background: rgb(251, 251, 251);
  border: none;
  display: inline-block;
  margin-left: 235px;
  font-size: 15px;
  padding: 5px 8px;
}

.soustext {
  height: 31px;
  background-color: rgb(251, 251, 251);
}

.surtext{
  float: right;
  height: 31px;
  background-color: rgb(251, 251, 251);
  
}
</style>