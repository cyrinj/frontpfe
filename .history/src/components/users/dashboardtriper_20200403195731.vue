

<template>

<div id="dashboardtriper">
 <div class="content">
    <chat-component></chat-component>
    <button @click="show()"></button>
   <header-component></header-component>
   <sidebar-component></sidebar-component>
    <router-view></router-view>
 </div>

</div>
</template>

<script>

import { setToken, getInfo, refresh } from "@/api/auth.service.js";
import sidebarcomponent from '@/components/shared/sidebar/sidebar.vue'
import headercomponent from '@/components/shared/header/header.vue'
import footercomponent from '@/components/shared/footer/footer.vue'
import chatcomponent from '@/components/triper/chat.vue'

export default {
  name: 'dashboardtriper',
   data(){
       return{
        x:false
    }
   },
   created() {
    // console.log(localStorage.token)
    if(localStorage.token) {
     
      setToken(localStorage.token);
      refresh().then(token => {
        localStorage.token = token
        getInfo(token).then(user => {
          console.log('test app useer', user)
       // this.$store.dispatch('setCurrentUser', user)

         
      
        })
      })
    }

    
  
  },
  methods: {
     show(){
       if(this.x==true)
       {
          this.x=false
       }
       else {
         this.x=true
       }
      
     }
  },
  components:{
  
    'sidebar-component' : sidebarcomponent,
     'header-component' : headercomponent,
    'chat-component' : chatcomponent,
  }
}
</script>

<style scoped>
.content{
  height: 100%;
  top:500px
}
</style>
