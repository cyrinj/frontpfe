<template>
  <div id="changepassword_in">
    <form>
      <fieldset class="cadre_edit">
       
        <hr class="ligne_edit" />
          <label class="label f1">Write password : </label>
         <input
              class="input_edit_y f22"
              type="password"
              v-model="user.password"
              placeholder=">10_MAJ_MIN_PONCTUATION"
            /><br><br>

                      <label class="label f1">Confirm password : </label>

             <input
              class="input_edit_y f2"
              type="text"
              v-model="user.confirmpassword"
              placeholder="Confirm Password"
            /><br><br>

             <button
              class="button boutton_edit is-link is-light  "
              @click="editProfile()"
              type="submit"
            ><strong>Confirm</strong></button>
               <hr class="ligne_edit" />

      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import UserMixin from '@/mixins/user.mixin.js';

export default {
  name: "changepassword-in",
    mixins: [UserMixin],

  data() {
    return {
    //  user: {username:''},
    password: '',
    cuurent: '',
    confirmed: ''
    };
  },

  methods: {
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
        return true;
      else return false;
    },
    editProfile() {

 var x = this.validate();
        if((this.user.password==this.user.confirmpassword)&&(x==true))

     { 

        this.$store.dispatch('changepassword_in',{current: this.current, password: this.password}).then(data => {
            // this.mounted()
           console.log("aaaaaaaaaaaaaaaaa")
              this.$router.push({
                name: "dashboardtriper"
              });
     })     
    /*  return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/v2/tripper/changepassword_in", this.user)
          .then(data => {
            alert("success update");
              this.$router.push({
                name: "dashboardtriper"
              });
            resolve(data.data.data);
          })
          .catch(error => {});
      });*/
      }

      else alert ("repeat password")
    }
  },
  mounted() {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:3000/api/v2/tripper/profile")
        .then(data => {
          this.user.password = data.data.data[0].password;
           
        })
        .catch(error => {});
    });
  }
};
</script>

<style scoped>
.input_edit_x {
  border-style: none none solid none;
  border-width: 1px;
  border-block-end-color: rgb(228, 223, 223);
  margin-bottom: 25px;
  margin-top: 25px;
  margin-left: 25px;
}

.input_edit_x:focus {
  border-block-end-style: solid;
  border-block-end-color: rgb(56, 228, 113);
  border-width: 2px;
}

.input_edit_y {
  border-style: none none solid none;
  border-width: 1px;

  border-block-end-color: rgb(228, 223, 223);
  width: 255px;

}
.f22 {display:inline-block; margin-left: 28px; } 


.f1 {display:inline-block; color: rgb(108, 139, 224);} 
.f2 {display:inline-block; margin-left: 10px;} 

.input_edit_y:focus {
  border-block-end-style: solid;
  border-block-end-color: rgb(56, 228, 113);
  border-width: 2px;
}

.input_edit_z {
  border-style: none none solid none;
  border-width: 1px;

  border-block-end-color: rgb(228, 223, 223);
  width: 590px;
  margin-left: 25px;
  margin-bottom: 25px;
}

.input_edit_z:focus {
  border-block-end-style: solid;
  border-block-end-color: rgb(56, 228, 113);
  border-width: 2px;
}

.titre_edit {
  margin-top: 15px;
  margin-left: 120px;
  color: black;
}

.ligne_edit {
  background-color: rgb(245, 244, 250);
  margin-left: 2px;
  width: 96%;
}

.cadre_edit {
  position: absolute;
  left: 600px;
  top: 200px;
  width: 450px;
  padding-left: 15px;
  padding-top: 20px;
  background-color: white;
  height: 305px;
  
  border: 1px solid rgb(230, 224, 224);
}

.boutton_edit {
  margin-left: 120px;
  margin-top: 15px;
  width: 150px;
}
</style>