<template>
     <div>
              <div class="box">
                <form>
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

    
}
</script>


<style scoped>
.box{
    position: absolute;
    left: 350px;
    height: 500px;
    width: 500px;
}
</style>