
<template>
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
        <i class="fas fa-paper-plane"></i>
      </button>
    </div>
  </section>
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
  padding-left: 2px;
  padding-right: 2px;
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
  max-width: 20%;
  color: white;
}

.chat-box {
  position: absolute;
  left: 500px;
  top: 200px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 10px;
  border: 1px solid rgb(212, 206, 240);
  width: 20vw;
  height: 50vh;
  border-radius: 4px;
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
  resize: none;
}
button {
  background: white;

  border: none;
  display: inline-block;
  margin-left: 635px;
  font-size: 15px;
  padding: 5px 8px;
}

.btn1 {
  background-color: rgb(209, 60, 97);
  border: none;
  display: inline-block;
  margin-left: 5px;
  font-size: 13px;
  padding: 5px 8px;

  color: white;
}

.soustext {
  height: 31px;
  background-color: white;
}
</style>