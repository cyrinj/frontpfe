<template>
  <div id="model" class="x" >
 <form-wizard @on-complete="onComplete" 
                          title=""
                       subtitle=""
                       back-button-text="Go back!"
                       next-button-text="Go next!"
                       finish-button-text="Send it"
                        shape="circle"
                  color="#c74b7f">
      <tab-content title="Primary details"
                  icon="ti-rocket"
                    :before-change="validateAsync1">
     
    
            <div class="columns is-multiple">
              <div class="column is-7">
                  <div class="field">
                    <label class="label " >Title </label>
                    <div class="control">
                      <input
                        class="input is-small "
                        type="text"
                        v-model="activity.title"
                      />
                    </div>
                  </div>
                <div class="field">
                  <label class="label">Continent</label>
                  <div class="control">
                    <div class="select ma_select is-small is-fullwidth">
                      <select id="firstInput"  @change="secondInputOptions()" v-model="activity.continent">
                        <option v-for="option in firstInputOptions" :key="option">{{option}}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Country</label>
                  <div class="control">
                    <input class="input is-small" type="text" v-model="activity.country" list="Africa" />
                    <datalist class="datalist is-small" id="Africa">
                      <option v-for="option in listcountry" :key="option">{{option}}</option>
                    </datalist>
                  </div>
                </div>
              </div>
          
            </div>
            <br>
       
      </tab-content>
      <tab-content title="Additional Info"
                   icon="ti-list"
                   :before-change="validateAsync2">
        
       
                <textarea
                  class="t1"
                  placeholder="Activity Description"
                  v-model="activity.program"
                ></textarea>
             <br>
     
    
      </tab-content>
      <tab-content title=" Last step "
                   icon="ti-check"
                    :before-change="onComplete">
          
          
              <div class="columns is-multiple">
                <div class="column is-7">
                  <div class="field">
                  <label class="label">Theme </label>
                  <div class="control">
                    <div class="select is-small is-fullwidth">
                      <select v-model="activity.theme">
                        <option>Fitness</option>
                        <option>Photography</option>
                        <option>Videography</option>
                        <option>Hiking</option>
                        <option>Wellness</option>
                        <option>Food</option>
                        <option>Skiing</option>
                        <option>Adventure</option>
                        <option>Exploration</option>
                      </select>
                    </div>
                  </div>
                </div>
            
                  <div class="field">
                    <label class="label">Adress</label>
                    <div class="control">
                      <div class="is-small">
                        <input
                          class="input is-small is-fullwidth"
                          type="text"
                          v-model="activity.adress"
                         
                        />
                      </div>
                    </div>
                  </div>

                    <div class="field ">
                    <label class="label " >The Average price $ </label>
                    <div class="control">
                      <input
                        class="input is-small "
                        type="number"
                         min="10" max="10000000"
                        v-model="activity.price"
                      />
                    </div>
                  </div>

                </div>
               
                     
              </div>
           
            <br>
           
      </tab-content>
  </form-wizard>
  </div>
</template>

<script>
import axios from "axios";
import ThemifyIcon from "vue-themify-icons";
export default {
  name: 'model',
  data(){
    return {
      activity:{},
      bestperiode:null,
       activity:{
        title:"",
        continent: "",
        country: "",
        theme: "",
        adress:"",
        program: "",
        owner:"",
        price: 10
      },
      fromto: "",
      months: "",
      firstInputOptions: ["Africa", "Europe", "Asia", "North_Amarica", "South_Amarica"],
      Africa: ["Tunisia", "Algeria", "Marooc"],
      Asia: ["Chine", "Indonisia", "Japon"],
      North_Amarica: ["Mexico", "USA", "Canada"],
      South_Amarica: ["Bresil", "Shili", "Argentine"],
      europe: "",
      Europe: ["Itali", "France", "Espagne"],
      listcountry:[],
      msg: "Welcome to Your Vue.js PWA",
      step: 1,
      count:0,
      textshow: false,
      inputagencyshow: false,
      inputfromtoshow: false,
      monthshow: false,
  
      steps: [
        {
          label: 'Select Items',
          slot: 'page1',
        },
      
        {
          label: 'Review',
          slot: 'page3',
        },
        {
          label: 'Apply',
          slot: 'page4',
        }
      ],
    };
  },
  methods: {
     onComplete: function(){
           return new Promise((resolve, reject) => {
           if((this.activity.theme=="")||(this.activity.theme==null)||(this.activity.adress=="")||(this.activity.adress==null)||(this.activity.price=="")||(this.activity.price==null))
            {
          reject('prb')
         
          }
          else{
             axios
          .post("http://localhost:3000/api/v2/tripper/submitactivity", this.activity)
          .then(data => {
             console.log("aziz")
          //  resolve(form);
            this.$router.push({
                name: "dashboardtriper"
              });
          }).catch(error => {});
            // resolve(true)
          }
        })
 },


   validateAsync1:function() {


   /*  return new Promise((resolve, reject) => {
               if(this.form.continent!=""){
                  reject('This is a custom validation error message. Click next again to get rid of the validation')
              }else{
               resolve(true)
              }   
            
          })*/
    // console.log(this.bestperiode)

         return new Promise((resolve, reject) => {
                if((this.activity.title=="")||(this.activity.title==null)||(this.activity.continent=="")||(this.activity.continent==null)||(this.activity.country=="")||(this.activity.country==null)){
              //  if(((this.bestperiode=="fromto")&&((this.form.continent=="")||(this.form.country=="")||(this.form.theme=="")||(this.form.duration=="")||(this.form.from=="")||(this.form.to=="")))||((this.bestperiode=="months")&&((this.form.continent=="")||(this.form.country=="")||(this.form.theme=="")||(this.form.duration=="")||(this.form.month=="")))||(this.bestperiode==null)){
                  reject('This is a custom validation error message. Click next again to get rid of the validation')
              }else{
              //  this.form.bestperiode1=this.bestperiode
               resolve(true)
              }   
            
          })
         },
         validateAsync2:function() {
           
          return new Promise((resolve, reject) => {
       
        console.log(this.activity.program)

              
  if((this.activity.program=="")||(this.activity.program==null)){
   
              reject('This is a custom validation error message. Click next again to get rid of the validation')

  }


             else{
               resolve(true)
              }   
            
          })
         },
     
    nextClicked(currentPage) {
      console.log('next clicked', currentPage)
      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      console.log('back clicked', currentPage);
      return true; //return false if you want to prevent moving to previous page
    },
    showfromto() {
      (this.inputfromtoshow = true), (this.monthshow = false);
    },
    showmonths() {
      (this.monthshow = true), (this.inputfromtoshow = false);
    },
 
    showtextarea() {
      (this.textshow = true), (this.inputagencyshow = false);
    },
    showinputagency() {
      (this.inputagencyshow = true), (this.textshow = false);
    },
    next1() {
      this.step++;
    },
    next2() {
         for (let i = 0; i < this.form.duration; i++) {
           console.log(i)
        this.form.program[i]=document.getElementById(i).value;
        console.log(document.getElementById(i).value)
       }
      console.log("ggg",this.form.program)
      this.step++;
    },
    prev() {
      this.step--;
    },
     secondInputOptions() {
      if(this.activity.continent === "Africa" ) {this.listcountry=this.Africa}  
      if(this.activity.continent === "Europe" ) {this.listcountry=this.Europe} 
      if(this.activity.continent === "Asia" ) {this.listcountry=this.Asia} 
      if(this.activity.continent === "North_Amarica" ) {this.listcountry=this.North_Amarica} 
      if(this.activity.continent === "South_Amarica" ) {this.listcountry=this.South_Amarica} 
    },
    submit() {
     
      return new Promise((rresolve, reject) => {
        axios
          .post("http://localhost:3000/api/v2/tripper/submitactivity", this.activity)
          .then(data => {
             console.log("aziz")
            resolve(form);
          })
          .catch(error => {});
      });
     }
  },
};
</script>

<style scoped>

.fin{
  margin-left: 140px;
    margin-right: 140px;

}
label.label {
  color: rgb(70, 74, 85);
  text-decoration: underline;
}
.x{
  position:absolute;
  top:120px;
  margin-left: 400px;
  width:850px;
  background-color: white;
  padding-left: 120px;
    padding-right: 120px;

}

.con{
  height: 150px;
  border: solid;
}
.mon_titre {
  padding-top: 15px;
  color: #c74b7f;
}
 
.scroller_form {
 
  overflow-y: scroll;
    scrollbar-color: rgb(112, 106, 202) green;
  height:280px ;
  scrollbar-width: thin;
 
}
 
.t1{
   width: 522px;
   height: 280px;
   border: 2px solid rgb(224, 224, 216);
    scrollbar-color: rgb(112, 106, 202) green;
  scrollbar-width: thin;
}
 
 
.mon_cadre {
  position: absolute;
  left: 410px;
  top: 80px;
  width: 780px;
  background-color: rgb(244, 248, 245);
  height: 460px;
  padding: 5px 90px 10px 90px;
    border: 1px solid rgb(235, 229, 229);
}
.mon_cadre2 {
  position: absolute;
  left: 410px;
  top: 80px;
  width: 780px;
  background-color: rgb(244, 248, 245);
  height: 460px;
  padding: 5px 90px 10px 90px;
      border: 1px solid rgb(235, 229, 229);
 
}
 .x1{
   font-size: 20px;
 }
.mon_cadre3 {
  position: absolute;
  left: 410px;
  top: 80px;
  width: 780px;
  background-color: rgb(244, 248, 245);
  height: 460px;
  padding: 5px 90px 10px 90px;
  border: 1px solid rgb(235, 229, 229);
}
 
.slide-fade-enter-active {
  transition: all 1.5s;
}
.slide-fade-leave {
  transition: all 1.5s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
 
.mon_boutton1 {
  margin-top: 25px;
}
 
.mon_boutton2 {
  margin-top: 13px;
}
.mon_boutton3 {
  margin-top: 20px;
}
 
 .z45{
   margin-top: 10px;
 }
.mon_ligne1 {
  background-color: rgb(56, 228, 113);
}
.mon_ligne2 {
  margin-bottom: 30px;
  background-color: rgb(56, 228, 113);
}
.choix_month {
  width: 267px;
}
.w{
  width: 267px;
}
.ma_select:focus {
  border-block-end-style: solid;
  border-block-color: black;
}
.box-shadow-form {
  box-shadow: 2px 2px 6px 2px rgb(200, 209, 203);
}


</style>