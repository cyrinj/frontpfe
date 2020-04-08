<template>
<div id="agency_signup">
  <div class="content">
    <section class="hero is-fullheight">
     
        <div class="container has-text-centered">
          <br>
           <div class="column is-4 is-offset-4">
             
          <h3 class="subtitle has-text-black">Subscribe to Wantotrip<span class="icon has-text-info"><i class="fas fa-crown espace"></i></span></h3>
  <form v-on:submit.prevent="userRegister" >
            <hr class="login-hr"/>
             <div v-if="step === 1">
            <div class="box">   
            
                 <div class="field">
                  <div class="control">
                    <input
                    id="username"
                      class="input "
                      type="text"
                      placeholder="Agency name"
                      v-model="user.username"
                      required
                    />
                  </div>
                </div>
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
                    id="password"
                      class="input"
                      type="password"
                      placeholder="Your Password"
                      v-model="user.password"
                      required
                    />
                  </div>
                </div>
                    <div class="field">
                  <div class="control">
                    <input
                    id="confirmpassword"
                      class="input "
                      type="password"
                      placeholder="Your Password"
                      v-model="confirmpassword"
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
                      placeholder="Security question"
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
                      placeholder="Response"
                      v-model="user.response"
                      required
                    />
                  </div>
                </div>
     <button class="button is-info next1" @click.prevent="next1()">Next</button>

                 </div>
             </div>
             <div v-if="step === 2">
            <div class="box">  
                                <div class="select">
  <select>
    <option>Agecny </option>
    <option>Local Guid</option>
  </select>
</div> 
                 <div class="field">
                  <div class="control">
                    <input
                    id="backupemail"
                      class="input "
                      type="email"
                      placeholder="Your Backup Email"
                      v-model="user.backupemail"
                      
                    />
                  </div>
                </div>
                  
      
 <div class="field">
                  <div class="control">
                    <input
                     id="response"
                      class="input "
                      type="text"
                      placeholder="Website"
                      v-model="user.website"
                      required
                    />
                  </div>
                </div> <div class="field">
                  <div class="control">
                    <input
                     id="response"
                      class="input "
                      type="text"
                      placeholder="Facebook"
                      v-model="user.facebook"
                      required
                    />
                  </div>
                </div> <div class="field">
                  <div class="control">
                    <input
                     id="response"
                      class="input "
                      type="text"
                      placeholder="Trip advisor"
                      v-model="user.tripadvisor"
                      required
                    />
                  </div>
                </div>
                
                
              <!--  <button
                 @click=" myFunction()"
                  class="button is-info is-rounded  is-fullwidth"
                  type="submit"
                >Sign Up</button>-->
                 <button
              class="button previous is-danger "
              @click.prevent="prev()"
            >Previous</button>
            <button class="button next1 is-info" @click.prevent="submit()">Send</button>
             
            </div>
             </div>
              </form>
          </div>
        </div>
     
    </section>
  </div>
  </div>
</template>

<script>
import {registerService } from '@/api/auth.service.js'

export default {
  data() {
    return {
      url: "http://localhost:3000",
      user: {},
      email: "",
      password: "",
      confirmpassword:"",
      step: 1,
    };
  },
  methods: {
    myFunction() { 
                var inpObjpassword = document.getElementById("password"); 
                var inpObjemail = document.getElementById("email");
                var inpObjbackupemail = document.getElementById("backupemail");
                var inpObjconfirmpassword = document.getElementById("confirmpassword"); 
                var inpObjusername = document.getElementById("username"); 
                var inpObjsecurityquestion = document.getElementById("securityquestion"); 
                var inpObjresponse = document.getElementById("response"); 
 
                if ((this.user.email==null)|| (this.user.email=='')) { 
                    inpObjemail.setCustomValidity('Please enter your email'); 
                }
                 else  {
                  inpObjemail.setCustomValidity(''); }

                if ((this.user.password==null)|| (this.user.password=='')) { 
                    inpObjpassword.setCustomValidity('Please enter your password'); 
                }
                else if(this.validate()==false){
                     inpObjpassword.setCustomValidity('Password : A-Z,a-z,$!*/-+,0-9,length>8');
                }
                  else  {
                  inpObjpassword.setCustomValidity(''); }

                    if ((this.user.username==null)|| (this.user.username=='')) { 
                    inpObjusername.setCustomValidity('Please enter your username'); 
                }
                  else  {
                  inpObjusername.setCustomValidity(''); }

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

                 

                   if ((this.confirmpassword==null)|| (this.confirmpassword=='')) { 
                    inpObjconfirmpassword.setCustomValidity('Please enter your password'); 
                }
                 else if(this.confirmpassword!=this.user.password)
                 {
                     inpObjconfirmpassword.setCustomValidity('Please write the same password'); 
                 }
                  else  {
                  inpObjconfirmpassword.setCustomValidity(''); }

                  if ((this.user.password==null)|| (this.user.password=='')||(this.user.email==null)|| (this.user.email=='')||(this.user.username==null)|| (this.user.username=='')||(this.user.securityquestion==null)|| (this.user.securityquestion=='')||(this.user.response==null)|| (this.user.response==''))
                  {
                    return false
                  }
                else  {
                 
                  return true}
            } ,
    validate() {
      var msg;
      var str = this.user.password;
      if (
        str.match(/[0-9]/g) &&
        str.match(/[A-Z]/g) &&
        str.match(/[a-z]/g) &&
        str.match(/[^a-zA-Z\d]/g) &&
        str.length >= 8
      )
       { return true; }
      else {return false;}
    },
     next1() {
      this.step++;
    },
      prev() {
      this.step--;
    },
    userRegister() {
         /*   var x = this.myFunction();
            
              registerService(this.user)
              this.$router.push({
                name: "login"
              });*/
             }
         
}

}
</script>

<style scoped>
hr.login-hr {
  background-color: rgb(182, 185, 194);
  
}

.container{
  width:1200px
}

.input{
  background-color: rgb(246, 244, 244);
  color: rgb(0, 0, 0);
}

.espace{
  margin-left: 20px;
}

.next1{
   float: right;
}

.previous{
    float: left;
  
}
</style>

