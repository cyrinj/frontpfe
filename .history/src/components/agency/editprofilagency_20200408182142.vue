<template>
     <div>
              <div class="box">
                <form>
                <label class="mylabel">Username</label>
                  <div class="field">
                    <div class="control">
                      <input
                        id="username"
                        class="input"
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
                        class="input"
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
                        class="input"
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
                        class="input"
                        type="text"
                        placeholder="Response"
                        v-model="user.response"
                        required
                      />
                    </div>
                  </div>
                  <button class="button is-info is-rounded next1" @click="next1()">Next</button>
                </form>
              </div>
            </div>
</template>

<script>
import UserMixin from '@/mixins/user.mixin.js';

export default {
            mixins: [UserMixin],

    mounted(){
        console.log("my user",this.user)
    }
}
</script>


<style scoped>
.box{
    position: absolute;
    left: 550px;
    top: 100px;
    height: 500px;
    width: 500px;
}

.mylabel{
    font-size: 13px;
}
</style>