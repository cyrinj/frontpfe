<template>
  <div id="editprofil">
        <div class="field">
          <div class="control">
            
      <input  type="file" name="resume" id="upload" ref="file" @change="onfileSelected">
          </div>
        </div>
  
               <!-- <form method="POST"  encType="multipart/form-data" @submit.prevent="editProfile"> -->

      <fieldset class="cadre_edit">

     
          
          <img src="https://bulma.io/images/placeholders/96x96.png" class="cercle f1" alt="Placeholder image">
          
           
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
                       <input class="input_edit_y" type="email" v-model="user.backupemail" placeholder="Email" />

          </div>
          <div class="column is-6">
            <input class="input_edit_y" type="email" v-model="user.email" placeholder="Backup Email" />
          </div>
        </div>
        <div class="columns is-multiple">
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
              class="button boutton_edit is-link is-rounded "
              type="submit"
              @click="editProfile()"
            >Edit</button>
          </div>
        </div>
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
      file: {}
    };
  },
  methods: {
    onfileSelected(event){
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
     
      formData.append('file', this.file, 'test');
       console.log('test formadata', formData)
       editprofilService(formData).then(data => console.log('test data ', data))
    },
    editProfile() {
      var formData = new FormData();
formData.append("file", this.selectedFile);

      console.log(formData)
    //  var token = localStorage.getItem("token");
  editprofilService(formData).then(data => console.log('test data ', data))
// this.$store.dispatch('editprofil', formData).then(data => {
            // this.mounted()
             /* this.$router.push({
                name: "dashboardtriper"
              });*/
    //  })     
    }
  },
  mounted() {
        
  }
};
</script>

<style scoped>
.f1 {display:inline-block; margin-left: 260px; margin-top: 12px;} 
.f2 {display:inline-block; margin-top: 23px;} 
.cercle{
   width: 120px;
    height: 120px;
    border-radius:60px;
  
}
.input_edit_x {
  border-style: none none solid none;
  border-width: 1px;
  border-block-end-color: rgb(250, 247, 247);
  margin-bottom: 25px;
  margin-top: 25px;
  margin-left: 25px;
     color: rgb(114, 132, 180);
}
.input_edit_x:focus {
  border-block-end-style: solid;
  border-block-end-color: rgb(56, 228, 113);
  border-width: 2px;
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
     color: #00008B;
}
.input_edit_z {
  border-style: none none solid none;
  border-width: 1px;
 
    color: rgb(82, 79, 79);
  border-block-end-color: rgb(250, 247, 247);
  width: 590px;
  margin-left: 25px;
  margin-bottom: 25px;
}
.input_edit_z:focus {
   color: #00008B;
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
  position: absolute;
  left: 490px;
  top: 100px;
  width: 690px;
  background-color: white;
  height: 500px;
  padding: 5px 30px 10px 30px;
}
.boutton_edit {
  margin-left: 25px;
  margin-top: 15px;
  width: 150px;
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
</style>