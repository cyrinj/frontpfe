<template>
  <div class="content">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-black">Change password <span class="icon has-text-info"><i class="fas fa-lock espace"></i></span></h3>
            <hr class="login-hr" />
            <div class="box">
              <form v-on:submit.prevent="changePassword" >
                <br>
                <div class="field">
                  <div class="control">
                    <input
                      id="password"
                      class="input"
                      type="password"
                      placeholder="password"
                      v-model="user.password"
                      required
                    />
                  </div>
                </div>
                  <div class="field">
                  <div class="control">
                    <input
                    id="confirmpassword"
                      class="input"
                      type="password"
                      placeholder="confirm password"
                      v-model="confirmpassword"
                   required
                    />
                  </div>
                </div>
                <br>
                <button
                  class="button is-info  is-fullwidth"
                   @click="myFunction()"
                 type="submit"
                >Reset</button>
              </form>
              <p class="informationcolor"><strong>{{information}}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { resetpasswordService } from '@/api/auth.service.js'

export default {
  data() {
    return {
      url: "http://localhost:3000",
      user: {},
     confirmpassword:'',
      information:'',
    };
  },
  methods: {
      myFunction() { 
                var inpObjpassword = document.getElementById("password");
               var inpObjconfirmpassword = document.getElementById("confirmpassword"); 

                console.log(inpObjpassword)
                if ((this.user.password==null)|| (this.user.password=='')) { 
                    inpObjpassword.setCustomValidity('Please enter your password'); 
                    
                }
                    else if(this.validate()==false){
                     inpObjpassword.setCustomValidity('Password : A-Z,a-z,$!*/-+,0-9,length>8');
                }

                 else  {
                  inpObjpassword.setCustomValidity(''); }

                    if ((this.confirmpassword==null)|| (this.confirmpassword=='')) { 
                    inpObjconfirmpassword.setCustomValidity('Please enter your password'); 
                }
                 else if(this.confirmpassword!=this.user.password)
                 {
                     inpObjconfirmpassword.setCustomValidity('Please write the same password'); 
                 }
                  else  {
                  inpObjconfirmpassword.setCustomValidity(''); }

                 if ((this.user.password==null)|| (this.user.password==''))
                 {
                   return false
                 }
                   else  {
                 
                 
                  return true}
            } ,
   
    validate() {
     
      if (
        (this.user.password).match(/[0-9]/g) &&
        (this.user.password).match(/[A-Z]/g) &&
        (this.user.password).match(/[a-z]/g) &&
        (this.user.password).match(/[^a-zA-Z\d]/g) &&
        (this.user.password).length >= 8
      )
       { return true; }
      else {return false;}
    },

    changePassword() {

  let x = this.myFunction()
      if(x==true)
      {
         this.$store.dispatch('resetpassword', this.user).then(data => {
         this.information="You will be oriented to your profil after 3 secondes"

                 setTimeout(function () {
    this.information="1.."
}.bind(this), 3000)
        setTimeout(function () {
    this.information="2.."
}.bind(this), 4000)

setTimeout(function () {
   this.$router.push({
                name: "dashboardtriper"
              });
}.bind(this), 5000)
            
         })
             //  resetpasswordService(this.user)
             
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