<template>
        <div id="chat" >
<fieldset class="mon_cadre">
    <p></p>
    <div v-for="item in (messages)"  :key="item">
    {{item}} 
  </div>
        <input v-model="msguser">
        <button @click="envoyer">go</button>
</fieldset>
    </div>
     
</template>

<script>
import UserMixin from '@/mixins/user.mixin.js';

   import { connectionSocket,envoyermessage } from '@/socket/Chat/chat.socket.js';
export default {
      mixins: [UserMixin],

     name : "chat",
        data () {
            return{
            messageVal : "",
            messages : [],
            msguser:null,
            }
        },
        created(){
             let u = this.user
              connectionSocket(u.id)
       

              console.log("ddd",this.messages)
        },
     methods : {
     
             envoyer() {
                envoyermessage(this.msguser)
				this.messages.push(this.msguser);
			}
     }
}
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
</style>


