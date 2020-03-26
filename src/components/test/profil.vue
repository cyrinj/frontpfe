<template>
<div id="profil">
   <div class="card df">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">

        <p class="title is-4">{{u1}}</p>
        <p class="subtitle is-6">@aziz90</p>
        
      </div>
    </div>

    <div class="content x">
     <a>Email : </a>  rbiiaziz900@gmail.com  <br>
      <a>Country : </a> Tunisia <br>
     <a> Ville : </a>Tunis <br>
     <a> Gouvernement :</a> Bardo <br>
     <a> Phone number :</a> 26753381 <br>
      <time datetime="2020-03-09">11:09 PM - 3 Mars 2020</time>
    </div>
  </div>
</div>
</div>
</template>
<script>
 import axios from 'axios'
export default {
  data(){
    return{
         u1:'', 
    }
  },

  methods:{
    ok(){
      
    }
  },
      mounted() {
         
        return new Promise((resolve, reject) => {
         console.log("before", window.localStorage.token)
        // axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.token}`;
        axios.post("http://localhost:3000/api/v1/auth/users").then(data => {
        //   console.log("the data",data.data.data.username)
         this.u1=data.data.data.username
           resolve(data.data.data)
          })
          .catch(error => {});
      });
         
     
               /* axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.token}`;
            axios.get('http://localhost:3000/api/v1/auth/getinfo').then(response => {
          this.u1="hh"
        })*/

        
     
      },
}
</script>
<style scoped>
.df{
  position: absolute;
  left: 500px;
  top:170px;
  width: 300px;
  height: 360px;
}

.x{
  height: 200px;

}
</style>