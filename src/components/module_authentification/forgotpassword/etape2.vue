<template>
  <div class="content">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-black">Reset your password<span class="icon has-text-info"><i class="fas fa-unlock-alt espace"></i></span></h3>
            <hr class="login-hr" />
            <div class="box">
              <form  @submit.prevent="goToReset">
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
                <div class="field">
                  <div class="control">
                    <input
                    id="securityquestion"
                      class="input "
                      type="text"
                      placeholder="Your Security Question"
                      v-model="user.securityquestion"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                    id="response"
                      class="input "
                      type="text"
                      placeholder="Your Response"
                      v-model="user.response"
                      required
                    />
                  </div>
                </div>
                <button
                  class="button is-info  is-fullwidth"
                  @click="myFunction()"
                >ResetPassword</button>
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
import {secquestionService } from '@/api/auth.service.js'

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
                                          
                var inpObjresponse = document.getElementById("response"); 
                var inpObjsecurityquestion = document.getElementById("securityquestion"); 
                var inpObjemail = document.getElementById("email");

                if ((this.user.email==null)|| (this.user.email=='')) { 
                    inpObjemail.setCustomValidity('Please enter your email'); 
                }
                 else  {
                  inpObjemail.setCustomValidity(''); }

                if ((this.user.securityquestion==null)|| (this.user.securityquestion=='')) { 
                    inpObjsecurityquestion.setCustomValidity('Please enter your security question'); 
                }
                  else  {
                  inpObjsecurityquestion.setCustomValidity(''); }

                  if ((this.user.response==null)|| (this.user.response=='')) { 
                    inpObjresponse.setCustomValidity('Please enter your response'); 
                }
                  else  {
                  inpObjresponse.setCustomValidity(''); }

                  if ((this.user.securityquestion==null)|| (this.user.securityquestion=='')||(this.user.email==null)|| (this.user.email=='')||(this.user.response==null)|| (this.user.response==''))
                  {
                    return false
                  }
                else  {
                
                  return true}
            } ,

    goToReset() {
      let x = this.myFunction()
      if(x==true)
      {
            secquestionService( this.user).then(data => {
         
            if(data=="n'existe pas")  
            {
                this.information="False response !"
            }
            else {
             // this.information="You will be oriented to the reset page after 3 secondes"
      
          this.$router.push({
                name: "etape3"
              });
           
            }
      });
      }
    
    }
  }
};
</script>


<style scoped>
hr.login-hr {
  background-color: rgb(182, 185, 194);
  
}

.espace{
  margin-left: 20px;
}

.input{
  background-color: rgb(246, 244, 244);
  color: rgb(0, 0, 0);
}

.informationcolor{
  color:rgb(26, 148, 107)
}
</style>