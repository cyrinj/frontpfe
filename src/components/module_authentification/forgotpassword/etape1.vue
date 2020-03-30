<template>
  <div class="content">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-black">Your email please<span class="icon has-text-info"><i class="fas fa-paper-plane espace"></i></span> </h3>
            <hr class="login-hr" />
            <div class="box">
              <form  v-on:submit.prevent="sendEmail">
                <br>
                <div class="field">
                  <div class="control">
                    <input
                    id="email"
                      class="input "
                      type="email"
                      placeholder="Your Email"
                      v-model="user.email"
                      required
                    />
                  </div>
                </div>
                <button
                @click=" myFunction()"
                type="submit"
                  class="button is-info is-fullwidth"
                >Send</button>
              </form>
              <br>
              <p class="informationcolor"><strong>{{information}}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {forgetpasswordService } from '@/api/auth.service.js'

export default {
  data() {
    return {
      url: "http://localhost:3000",
      user: {},
      information:'',
      
    };
  },
  methods: {

      myFunction() { 
                var inpObjemail = document.getElementById("email"); 
                if ((this.user.email==null)|| (this.user.email=='')) { 
                    inpObjemail.setCustomValidity('Please enter your email'); 
                    
                }
                 else  {
                  inpObjemail.setCustomValidity(''); }

                  if ((this.user.email==null)|| (this.user.email==''))
                  {
                    return false
                  }
                else  {
                 
                  return true}
            } ,
   
    sendEmail() {
           let x = this.myFunction()
      if(x==true){
          forgetpasswordService(this.user)
          this.information = "Check your email please.."
           setTimeout(function () {
    this.$router.push({
                name: "login"
              });
}.bind(this), 1000)
                      
             
                
              
           

      }
              
    }
  }
};
</script>


<style scoped>
hr.login-hr {
  background-color: rgb(182, 185, 194);
  
}

.informationcolor{
  color:seagreen
}

.input{
  background-color: rgb(246, 244, 244);
  color: rgb(0, 0, 0);
}

.espace{
  margin-left: 20px;
}

</style>