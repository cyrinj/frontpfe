<template>
   <nav class="navbar is-fixed-top ss">
     
       <div class="navbar-menu ss">
            <div class="navbar-start">
      <a class="navbar-item kz" href="http://wantotrip.net/">
        Home
      </a>
       <a class="navbar-item kz" href="http://wantotrip.net/about.html">
        About us
      </a>
            </div>
          <div class="navbar-end">
             <div class="navbar-item has-dropdown is-hoverable kz1">
                   <a class="navbar-link kzspecial">{{user.username}}</a> 
              <!--  <a class="navbar-link kzspecial"></a> -->
                   <div class="navbar-dropdown">
                      <a  class="navbar-item arr changecolor"><router-link to="/editprofil">Edit Profil</router-link></a>
                      <a  v-on:click="userLogout()" class="navbar-item arr changecolor">Logout</a>
                   </div>
               </div>
               <div class="navbar-item has-dropdown is-hoverable kz1">
                   <a class="navbar-link kzspecial"> <i class="fas fa-bell "></i></a> 
              <!--  <a class="navbar-link kzspecial"></a> -->
                   <div class="navbar-dropdown">
                      <a  class="navbar-item arr changecolor"><router-link to="/editprofil">Edit Profil</router-link></a>
                      <a  v-on:click="userLogout()" class="navbar-item arr changecolor">Logout</a>
                   </div>
               </div>
           </div>
       </div>
   </nav> 
</template>

<script>
import axios from "axios";
import UserMixin from '@/mixins/user.mixin.js';

export default {
      mixins: [UserMixin],

    data(){
        return{
             
            
        }
    },

methods: {
    userLogout(){
          const vuex = localStorage.getItem('token');
             if(vuex){
                 console.log("myuser",this.user)
                   this.$store.dispatch("logout",this.user).then(data => {
               console.log("ok",data)    
             localStorage.removeItem('token');
             this.$router.push('/')
                });
             }
    }
},
mounted(){
        /* return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:3000/api/v2/tripper/profile")
        .then(data => {
          this.username = data.data.data[0].username;
           console.log("aaa",this.username)
        })
        .catch(error => {});
    });*/
    }
}
</script>
<style scoped>
.kzspecial{
      color: rgb(126, 91, 223);
       
}
.kzspecial:hover{
    color: rgb(56, 228, 113);
}
.kz{
    color: rgb(54, 52, 52);
   
  
  border-radius: 2em / 5em;
}
.kz:hover{
    color: rgb(56, 228, 113);
}
.box-shadow-y{
    box-shadow: 0px 2px 10px rgba(27, 134, 23, 0.25);
}
.icon{
    height: 30px;
    width: 30px;
    vertical-align: baseline;
    display: inline-flex;
    justify-content: center;
    align-items: center
}
.t {
    color:rgb(56, 228, 113);
    margin-left: 15px;
}
.kz1{
    color: black;
}
a.changecolor:hover {
  
   background-color:rgb(230, 241, 234);
}
a.vv:hover{
   background-color:rgb(56, 228, 113);
   
}
.navbar-dropdown{
    background-color: rgb(235, 226, 226);
}
a.f:hover{
    background-color: blue;
    color: blue;
}
a.changecolor{
       background-color: rgb(235, 226, 226);

}
ul.nn{
  margin-left: 5px;
}

.blanc{
    color:blue
}
.ss{
    border-style: none none solid none;
    border-color:  rgb(248, 239, 239);
    border-width: 0.1px;
      background-color:rgb(252, 247, 247);
      left: 315px;
      height: 94px;
}
a.arr{
    background-color:rgb(235, 226, 226);
    color: rgb(56, 228, 113);
   
}
nav{
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
}

.xxx{
    margin-left: 9px;
}



</style>