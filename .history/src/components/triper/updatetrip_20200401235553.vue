<template>
  <div id="model" class="x" >
 <form-wizard @on-complete="onComplete" 
                          title=""
                       subtitle=""
                       back-button-text="Go back!"
                       next-button-text="Go next!"
                       finish-button-text="We're there"
                        shape="circle"
                  color="#1E90FF">
      <tab-content title="Primary informations"
                   icon="ti-rocket"
                    :before-change="validateAsync1">
    
            <div class="columns is-multiple">
              <div class="column is-6">
                <div class="field">
                  <label class="label">Continent</label>
                  <div class="control">
                    <div class="select ma_select is-small is-fullwidth">
                      <select id="firstInput"  @change="secondInputOptions()" v-model=" form.continent">
                        <option v-for="option in firstInputOptions" :key="option">{{option}}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Theme {{form.theme}} </label>
                  <div class="control">
                    <div class="select is-small is-fullwidth">
                      <select v-model="objtrip.theme">
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
              </div>
              <div class="column is-6">
                <div class="field">
                  <label class="label">Country</label>
                  <div class="control">
                    <input class="input is-small" type="text" v-model="form.country" list="Africa" />
                    <datalist class="datalist is-small" id="Africa">
                      <option v-for="option in listcountry" :key="option">{{option}}</option>
                    </datalist>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Number of Days</label>
                  <div class="control">
                    <input class="input is-small" type="number"  min="1" max="10" v-model="form.duration" />
                  </div>
                </div>
              </div>
            </div>
 
            <div class="field">
              <label class="label">Best trip periode</label>
              <div class="control">
                <label class="radio">
                  <input type="radio" value="fromto" v-model="form.bestperiode1" @click="showfromto()" />
                  From-To
                </label>
                <label class="radio">
                  <input type="radio" value="months" v-model="form.bestperiode1" @click="showmonths()" />
                  Months
                </label>
              </div>
            </div>
            <div v-if="inputfromtoshow">
              <div class="columns is-multiple">
                <div class="column is-6">
                  <div class="field">
                    <label class="label">From</label>
                    <div class="control">
                      <div class="select is-small is-fullwidth">
                        <select class="w" name="to" v-model="form.from" required>
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>August</option>
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                          <option>December</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <label class="label">To</label>
                    <div class="control">
                      <div class="select is-small is-fullwidth">
                        <select class="w" name="to" v-model="form.to" required>
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>August</option>
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                          <option>December</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="field">
                <label class="label" v-if="monthshow">Month</label>
                <div class="control">
                  <div class="select is-small choix_month" v-if="monthshow">
                    <select class="w" name="to" v-model="form.month" required>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
      </tab-content>
      <tab-content  title="Trip program"
                   icon="ti-list"
                   :before-change="validateAsync2">
                    <div class="scroller_form">
        <div v-for="(item,idx) in parseInt(form.duration)" :key="idx" >

                <textarea
                  class="t1"
                  placeholder="Describe the day you suggest"
                 v-bind:id="idx"  
                                  v-model="form.program[idx]"

                ></textarea>
             <br><br>
            </div>
     
        </div>
      <!--   <div class="scroller_form">
        <div v-for="(item,idx) in parseInt(form.duration)" :key="idx" >
                <textarea
                  class="t1"
                  placeholder="Describe the day you suggest"
                 v-bind:id="idx"  
                 v-model="form.program[idx]"
                ></textarea>
             <br><br>
            </div>
     
        </div>-->
      </tab-content>
      <tab-content title="Trip inspiration"
                   icon="ti-wand"
                    :before-change="onComplete">
            <div class="field">
              <label class="label">Did you try this trip Alone or with a travel agency</label>
              <div class="control">
                <label class="radio" name="answer1">
                  <input
                    type="radio"
                    name="answer1"
                    value="alone"
                    v-model="form.try1"
                    @click="showtextarea()"
                  />
                  Alone
                </label>
                <label class="radio" name="answer1">
                  <input
                    type="radio"
                    name="answer1"
                    value="travel_agency"
                    v-model="form.try1"
                    @click="showinputagency()"
                  />
                  Travel agency
                </label>
              </div>
            </div>
      <br>
            <div v-if="inputagencyshow">
              <div class="columns is-multiple">
                <div class="column is-6">
                  <div class="field">
                    <label class="label">Specify the agency name</label>
                    <div class="control">
                      <input
                        class="input is-small is-fullwidth"
                        type="text"
                        v-model="form.agencyname"
                        v-if=" inputagencyshow"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Specify the agency number</label>
                    <div class="control">
                      <input
                        class="input is-small is-fullwidth"
                        type="tel"
                        v-model="form.agencynumber"
                        v-if=" inputagencyshow"
                      />
                    </div>
                  </div>
                  <br>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <label class="label">Specify the agency email</label>
                    <div class="control">
                      <div class="is-small">
                        <input
                          class="input is-small is-fullwidth"
                          type="email"
                          v-model="form.agencyemail"
                          v-if=" inputagencyshow"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label" v-if="inputagencyshow">The Average price $ </label>
                    <div class="control">
                      <input
                        class="input is-small is-fullwidth"
                        type="number"
                         min="10" max="10000000"
                        v-model="form.price"
                        v-if="inputagencyshow"
                      />
                    </div>
                  </div>
                  <br>
                </div>
              </div>
            </div>
            <div v-else>
              <textarea
                class="textarea is-fullwidth t22"
                v-if="textshow"
                placeholder="how did you get inspired for this trip?"
                rows="4"
                v-model="form.inspiration"
              ></textarea>
 
              <div class="field">
                <label class="label" v-if="textshow">The Average price $ </label>
                <div class="control">
                  <input
                    class="input is-small w is-fullwidth"
                    v-if="textshow"
                    type="number"
                    min="10" max="10000000"
                    v-model="form.price"
                  />
                </div>
              </div>
             
            </div>
           
      </tab-content>
  </form-wizard>
  </div>
</template>

<script>
import axios from "axios";
import ThemifyIcon from "vue-themify-icons";

export default {
  name: 'model',
  props: ['objtrip'],
  data(){
    return {
    
       newprogram :[],
       form: {
        title: "",
        continent: "",
        country: "",
        theme: "",
        duration: 1,
        month:"",
        from: "",
        to: "",
          bestperiode1:"",
        program: [],
        try1: "",
        inspiration: "",
        agencyname: "",
        agencynumber: "",
        agencyemail: "",
        owner:"",
        price: 10
      },
      ancienduration:0,
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
  mounted(){
   
      this.form=this.objtrip
      this.ancienduration=this.form.duration
  },
  beforeDestroy(){
           if(((this.form.continent!=null)&&(this.form.continent!=""))||((this.form.country!=null)&&(this.form.country!=""))||((this.form.theme!=null)&&(this.form.theme!="")))
          {updateDraft() }
  },
 
  methods: {
    onComplete: function(){
         

        return new Promise((resolve, reject) => {
        
          if(((this.form.try1=="alone")&&(((this.form.inspiration=="")||(this.form.inspiration==null))||((this.form.price=="")||(this.form.price==null))))|| ( (this.form.try1=="travel_agency") && ( ((this.form.agencyname=="")||(this.form.agencyname==null)) || ((this.form.agencyemail=="")||(this.form.agencyemail==null))||((this.form.agencynumber=="")||(this.form.agencynumber==null))||((this.form.price=="")||(this.form.price==null)) )))
            {
                               reject('This is a custom validation error message. Click next again to get rid of the validation')
            // console.log("32")
          }
          else{
              this.form.draft=false

            this.updateTrip()
              this.$router.push({
                name: "status"
              });
        
             resolve(true)
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
 // this.form=this.objtrip
 // console.log(this.form)
         return new Promise((resolve, reject) => {
                
                if(((this.form.bestperiode1=="fromto")&&((this.form.continent=="")||(this.form.country=="")||(this.form.theme=="")||(this.form.duration=="")||(this.form.from=="")||(this.form.to=="")))||((this.form.bestperiode1=="months")&&((this.form.continent=="")||(this.form.country=="")||(this.form.theme=="")||(this.form.duration=="")||(this.form.month=="")))||(this.form.bestperiode1==null)){
                  reject('This is a custom validation error message. Click next again to get rid of the validation')
              }else{
               resolve(true)
              }   
            
          })
         },
         validateAsync2:function() {
           
         /*   return new Promise((resolve, reject) => {
                if(this.form.continent!=""){
                  reject('This is a custom validation error message. Click next again to get rid of the validation')
              }else{
               resolve(true)
              }   
            
          })*/
          
             for (let i = 0; i <this.form.duration; i++) {
          // console.log(i)
        this.newprogram[i]=document.getElementById(i).value;
       }
      // this.form.program.lenght=this.form.duration
          //  for (let i = 0; i < this.form.duration; i++) {
          // console.log(i)
        this.form.program=this.newprogram
      //  console.log(document.getElementById(i).value)
     //  }
          return new Promise((resolve, reject) => {
            let i;
           // console.log("ap",this.form.program)

              for (i = 0; i < this.form.duration; i++) {
  if(this.form.program[i]==""){  // console.log("indice",i)
      //i=100    
              reject('This is a custom validation error message. Click next again to get rid of the validation')

}
//console.log("apres iter",this.form.program)
} 

//console.log("apres boucle",this.form.program)
              if(i==this.form.duration){
               // console.log("indicefinal",i)
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
      if(this.form.continent === "Africa" ) {this.listcountry=this.Africa}  
      if(this.form.continent === "Europe" ) {this.listcountry=this.Europe} 
      if(this.form.continent === "Asia" ) {this.listcountry=this.Asia} 
      if(this.form.continent === "North_Amarica" ) {this.listcountry=this.North_Amarica} 
      if(this.form.continent === "South_Amarica" ) {this.listcountry=this.South_Amarica} 
    },
    updateTrip() {
             this.$store.dispatch('tripupdate',this.form).then(data => {
           // console.log("aziz")
     })     
    },

     updateDraft() {
             this.$store.dispatch('draftupdate',this.form).then(data => {
           // console.log("aziz")
     })     
    }

  },
};
</script>

<style scoped>

label.label {
  color: rgb(70, 74, 85);
  text-decoration: underline;
}
.x{
   position:absolute;
  top:106px;
  margin-left: 400px;
  width:850px;
  background-color: white;
  padding-left: 100px;
    padding-right: 100px;

}

.con{
  height: 150px;
  border: solid;
}
.mon_titre {
  padding-top: 15px;
  color: rgb(88, 88, 86);
}
 
.scroller_form {
 
  overflow-y: scroll;
    scrollbar-color: rgb(208, 207, 228) rgb(111, 199, 111);
  height:280px ;
  scrollbar-width: thin;
 
}
 
.t1{
   width: 602px;
   height: 280px;
   border: 2px solid rgb(224, 224, 216);
    overflow:hidden
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