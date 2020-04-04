<template>
  <div id="editprofil">
      <fieldset class="cadre_edit">
  <div class="columns is-multiple  bn">
              <div class="column is-4">
       
                 <img :src="user.profilePictureUrl" class="cercle f1" />
  <!--    <input  type="file" class="choisirpdp" name="resume" id="upload" ref="file" @change="onfileSelected">-->
<div class="file">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" id="upload" ref="file" @change="onfileSelected">
    <span class="file-cta">
    
      update
     
     
    </span>
  </label>
</div>
                  </div>
  <div class="column is-4">
    <br><br>
    <label class="mylu">{{username1}}</label><br>
     <label class="myl">{{email1}}</label><br>
      <label class="myl">{{pays1}}</label>
  </div>
  </div>
     <form  @submit.prevent="editProfileDonnees"> 
                     
        <div class="columns is-multiple">
          <div class="column is-4">
            <input class="input_edit_x" type="text" v-model="user.username" placeholder="User-Name" />
          </div>
          <div class="column is-4">
            <input
              class="input_edit_x"
              type="text"
              v-model="user.first_name"
              placeholder="First_Name"
            />
          </div>
          <div class="column is-4">
            <input
              class="input_edit_x"
              type="text"
              v-model="user.last_name"
              placeholder="Last_Name"
            />
          </div>
        </div>
      
        <div class="columns is-multiple">
          <div class="column is-6">
                       <input class="input_edit_y" type="email" v-model="user.email" placeholder="Email" />

          </div>

          <div class="column is-6">
            <input class="input_edit_y" type="email" v-model="user.backupemail" placeholder="Backup Email" />
          </div>
        </div>
        <div class="columns is-multiple bn">
          <div class="column is-4">
            <input class="input_edit_x" type="text" v-model="user.ville" placeholder="ville" />
          </div>
          <div class="column is-4">
            <input class="input_edit_x" type="text" v-model="user.pays" placeholder="City" />
          </div>
          <div class="column is-4">
            <input
              class="input_edit_x"
              type="text"
              v-model="user. gouvernement"
              placeholder="Gouvernement"
            />
          </div>
        </div>
        <input class="input_edit_z" type="text" v-model="user.adresse" placeholder="Adress" />
        <div class="columns is-multiple">
          <div class="column is-4">
            <input
              class="input_edit_x"
              type="tel"
              v-model="user.telephone"
              placeholder="Phone_Number"
            />
          </div>
          <div class="column is-4">
            <input
              class="input_edit_x"
              type="date"
              v-model="user.date_naissance"
              placeholder="Date_Birthday"
            />
          </div>
          <div class="column is-4">
            <button
              class="button boutton_edit  is-rounded "
              type="submit"
            >Edit</button>
          </div>
        </div>
     </form>
      </fieldset>
    <!-- </form> -->
     
  </div>
</template>

<script>
import axios from "axios";
import UserMixin from '@/mixins/user.mixin.js';
import { editprofilService } from '@/api/tripper.service.js'
export default {
  name: "editprofil",
  mixins: [UserMixin],
  data() {
    return {
      selectedFile:null,
      file: {},
      username1:null,
      email1:null,
      pays1:null
    };
  },
  methods: {
    onfileSelected(event){
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
     
      // console.log('test file', this.file)
      formData.append('test', this.file);
      // console.log('test formadata', formData.get("test"))
     //  editprofilService(formData,this.user._id ).then(data => console.log('test data ', data))
let obj = {}
obj.formData=formData
obj.id=this.user._id
this.$store.dispatch('editprofilpdp', obj).then(data => {})
   },
    editProfileDonnees() {
   
    //  var token = localStorage.getItem("token");
 // editprofilService(formData).then(data => console.log('test data ', data))
 this.$store.dispatch('editprofildonnees', this.user).then(data => {
            // this.mounted()
             /* this.$router.push({
                name: "dashboardtriper"
              });*/0.
    })  
  /*  this.$router.go({
          path: "editprofil",
          force: true
        });   */
    }
  },
  mounted() {
        this.username1=this.user.username
        this.email1=this.user.email
        this.pays1=this.user.pays
  }
};
</script>

<style scoped>


.file-cta{
 width: 59px;
  height: 20px;
  background-color:#c4addb ;
  border: none;
  margin-left: 60px;
  color: white;
  font-size: 12px;
}

.f1 {display:inline-block; margin-left: 30px; margin-top: 12px;} 
.f2 {display:inline-block; margin-top: 23px;} 
.cercle{
   width: 120px;
    height: 120px;
    border-radius:60px;
  
}
.bn{
   border-style: none none  dashed none;
  border-width:1px;
  border-color: #c5aedb;
}
.mylu{
  color: rgb(32, 31, 31);
  font-size: 16px;
}
.myl{
  color: rgb(82, 78, 78);
  font-size: 14px;
}
.input_edit_x {
  border-style: none none solid none;
  border-width: 1px;
  border-block-end-color: rgb(250, 247, 247);
  margin-bottom: 25px;
  margin-top: 25px;
  margin-left: 25px;
   color:  rgb(82, 79, 79);
}
.input_edit_x:focus {
  border-block-end-style: solid;
  border-block-end-color: rgb(56, 228, 113);
  border-width: 2px;
  color:  rgb(82, 79, 79);
}
.input_edit_y {
  border-style: none none solid none;
  border-width: 1px;
     color:  rgb(82, 79, 79);
  border-block-end-color: rgb(250, 247, 247);
  width: 255px;
  margin-left: 25px;
}
.input_edit_y:focus {
  border-block-end-style: solid;
  border-block-end-color: rgb(56, 228, 113);
  border-width: 2px;
    color:  rgb(82, 79, 79);
}
.input_edit_z {
  border-style: none none solid none;
  border-width: 1px;
 
    color:  rgb(82, 79, 79);
  border-block-end-color: rgb(250, 247, 247);
  width: 590px;
  margin-left: 25px;
  margin-bottom: 25px;
}
.input_edit_z:focus {
  color:  rgb(82, 79, 79);
  border-block-end-style: solid;
  border-block-end-color: rgb(56, 228, 113);
  border-width: 2px;
}
.titre_edit {
  margin-top: 15px;
  margin-left: 30px;
  color: rgb(107, 85, 184);
}
.ligne_edit {
  background-color: rgb(56, 228, 113);
  margin-left: 26px;
  width: 92%;
}
.cadre_edit {
  box-shadow: 4px 2px 10px rgb(216, 223, 216);
  border-radius: 20px;
  position: absolute;
  left: 490px;
  top: 92px;
  width: 690px;
  background-color: white;
  height: 550px;
  padding: 5px 30px 10px 30px;
}
.boutton_edit {
  margin-left: 25px;
  margin-top: 5px;
  width: 150px;
  background-color: #9e7cc0;
  color: white;
}
.df{
  position: absolute;
  left: 1030px;
  top:100px;
  width: 310px;
  height: 300px;
  background-color: white;
       border-radius: 200px;
}
.x{
  height: 140px;
}

.choisirpdp{
 
  height: 10px;
       display: inline-block;

}

input[type='file'] {
  color: transparent;
  
  border:none
}
</style>