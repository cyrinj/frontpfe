
<template>
<div>
  <button class="reafficher" @click="reafficher()">&nbsp;&nbsp;Wantotrip Admin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X</button>
 <div class="cadre_status" v-show="x">
   <button class="chatbox2" @click="show()">&nbsp;&nbsp;&nbsp;&nbsp;Wantotrip Admin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X</button>
  <section class="chat-box">
    <div class="chat-box-list-container" ref="chatbox">
  

      <ul class="chat-box-list">
        <li class="message" v-for="(obj, idx) in messages" :key="idx">
          <p>
            <span class="me" v-if="obj.sender===user.username">{{ obj.contenu }}</span>
            <span class="notme" v-else>{{ obj.contenu }}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="chat-inputs">
      <textarea rows="1" type="text" v-model="usermsg" @keyup.enter="send" />
    </div>
    <div class="soustext">
      <button @click="send">
        <i class="fas fa-paper-plane "></i>
      </button>
    </div>
  </section>
</div>
</div>
</template>

<script>
import UserMixin from "@/mixins/user.mixin.js";
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
    this.socket.emit('user_connected', this.user.username)
    var self = this;
      getchatService(this.user.id).then(data => {
      this.idchat = data[0]._id;
      this.messages = data[0].messages;
      this.socket.emit("first", this.messages, this.idchat);
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
      var self = this;

      ajoutermessageService(this.user.username, this.idchat, this.usermsg);
      this.socket.emit("msg", this.user.username, this.usermsg, this.idchat);
     this.socket.on("get", function(chat) {
        console.log("why")
        for (var i = 0; i < chat.length; i++) {
          if (chat[i].id == self.idchat) {
            self.messages = chat[i].messages;
          }
        }
      });
      /*  this.socket.on("get", function(messages) {
        console.log("heyyyy")
          self.messages = messages;
      });*/
      this.usermsg = "";

      this.$nextTick(() => {
        this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight;
      });
    }
  }
};
</script>


<style scoped>
.reafficher{
  
    background-color: rgb(242, 142, 142);
 text-align: left;
  width: 20vw;
  height: 30px;
   color: rgb(241, 236, 236);

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
  background-color: rgb(241, 197, 197);
  color: rgb(107, 101, 101);
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