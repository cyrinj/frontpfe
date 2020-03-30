<template>
  <div id="app">


          <div class="content">
       
          <router-view></router-view>
          </div>
          
  </div> 
 <!-- <div id="app">
		<div class="header">
			<h1>Chatroom</h1>
      <input type="text" v-model="username">
     <button @click="joinServer(username)">go</button>
			<p class="username">Username: {{ username }}</p>
			<p class="online">Online: {{ users.length }}</p>
		</div>
	</div>-->
</template>

<script>
export default {
  name: 'app',
   data(){
       return{
         username: "",
		//	socket: io("http://localhost:3000"),
			messages: [],
			users: []
    }
   },
  components:{
  },
  
  methods: {
    
   
    /*
		joinServer: function (username) {
			this.socket.on('loggedIn', data => {
      
      	this.messages = data.messages;
      this.users = data.users;    
      
        this.socket.emit('newuser', this.username);
        
      })
		
    	this.listen();
    
    },

    listen: function () {
			this.socket.on('userOnline', user => {
				this.users.push(user);
      });
    }*/

  },
    
 mounted () {

  /* this.username = prompt("What is your username?", "Anonymous");
		if (!this.username) {
			this.username = "Anonymous";
		}
   				connection(this.username);*/

 }
   /* this.username = prompt("What is your username?", "Anonymous");
  
		if (!this.username) {
			this.username = "Anonymous";
    }
    console.log(this.username)
	//	this.joinServer();
	}*/
}
</script>

<style>




.content {
    background-color: rgb(252, 247, 247);

}

</style>
