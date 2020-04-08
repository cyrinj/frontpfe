<template>
  <div id="login">
    <div class="content">
           <section class="hero is-fullheight">
      <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <h3 class="title has-text-black">Please login to proceed<span class="icon has-text-info"><i class="fas fa-heart espace"></i></span> </h3>
              <hr class="login-hr" />
              <div class="box">
                <!--       <img src="/assets/profil.jpg">  -->

                <form @submit.prevent="userLogin">
                  <div class="field">
                    <div class="control">
                      <input
                    
                      id="email"
                        class="input "
                        type="email"
                        placeholder="Your Email"
                        v-model="userL.email" 
                        required
                      />
                     </div>
                  </div>
                          
        
                  <div class="field">
                    <div class="control">
                      <input
                      id="password"
                        class="input "
                        type="password"
                        placeholder="Your Password"
                        v-model="userL.password" 
                       
                      />
                    </div>
                  </div>
                  <p class="responsecolor">{{reponse}}</p>
                  <div class="field">
                    <label class="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <button
                  @click=" myFunction()"
                    class="button  is-info is-rounded  is-fullwidth"
                  >Login</button>
                </form>
              </div>
              <p class="has-text-grey">
                <button class="b"  @click="inscription()">sign up</button> &nbsp;·&nbsp;
                <button class="b"  @click="forgotPassword()">forgotpassword</button> &nbsp;·&nbsp;
                <button class="bAgency"  @click="signupAgency()">Agency?</button>
              </p>
            </div>
          </div>
      </div>
           </section>
             <!--   <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserMixin from '@/mixins/user.mixin.js';

export default {
   mixins: [UserMixin],

  name: "login",
  data() {
    return {
      url: "http://localhost:3000",
      userL: {},
      c:'rgb(226, 126, 126)',
      email:'',
      password:'',
      msg:'',
      reponse:'',
    };
  },
 
  methods: {
       myFunction() { 
                var inpObjpassword = document.getElementById("password"); 
                var inpObjemail = document.getElementById("email"); 
                if ((this.userL.email==null)|| (this.userL.email=='')) { 
                    inpObjemail.setCustomValidity('Please enter your email'); 
                }
                 else  {
                  inpObjemail.setCustomValidity(''); }

                if ((this.userL.password==null)|| (this.userL.password=='')) { 
                    inpObjpassword.setCustomValidity('Please enter your password'); 
                }
                  else  {
                  inpObjpassword.setCustomValidity(''); }

                  if ((this.userL.password==null)|| (this.userL.password=='')||(this.userL.email==null)|| (this.userL.email==''))
                  {
                    return false
                  }
                else  {
                  inpObjemail.setCustomValidity(''); 
                  inpObjpassword.setCustomValidity(''); 
                  return true}
            } ,
    userLogin() {
   
      let x = this.myFunction()
      if(x==true){
         this.$store.dispatch('login', this.userL).then(data => {
      //console.log("ffffff",data)
     if (data.msg=="!password") {
        this.reponse="Wrong password!"
     }
     else if (data.msg=="!email")
     {
       this.reponse="Email don't exist!"
     }
     else
     {
      
       if(data.userq.role=="a")

       {
            this.$router.push({
                name: "dashboardadmin"
              }); 
       }
       else
       this.$router.push({
                name: "dashboardtriper"
              });

             
              }
     })
      }
    
    },
    inscription(){
       this.$router.push({
                name: "inscription"
              });
           
    },
     forgotPassword(){
       this.$router.push({
                name: "etape1"
              });
          
    }
 
   
  }
};
</script>

<style scoped>
hr.login-hr {
  background-color: rgb(182, 185, 194);
  
}

.b{
  border:none;
    background-color: rgb(252, 247, 247);
   font-size: 17px;
}

.input{
  background-color: rgb(246, 244, 244);
  color: rgb(0, 0, 0);
}

.espace{
  margin-left: 20px;
}
.responsecolor{
  color:rgb(26, 148, 107)
}

.bAgency{
    border:none;
    background-color: rgb(54, 94, 214);
   font-size: 17px;
   color: rgb(255, 255, 255);
   border-radius: 5px;
}
</style>