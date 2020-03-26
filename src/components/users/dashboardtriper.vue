

<template>

<div id="dashboardtriper">
 <div class="content">
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
export default {
  name: 'dashboardtriper',
   data(){
       return{
        
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
  components:{
  
    'sidebar-component' : sidebarcomponent,
     'header-component' : headercomponent,
    'footer-component' : footercomponent,
  }
}
</script>

<style scoped>
.content{
  height: 100%;
  top:500px
}
</style>
