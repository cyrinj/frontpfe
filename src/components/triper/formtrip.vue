
<template>
  <div id="formtrip">
    <form>
      <transition name="slide-fade">
        <div v-if="step === 1">
          <fieldset class="mon_cadre">
          
            <label class="label mon_titre"><strong>Step One</strong></label>
            <hr class="mon_ligne1" />
            <div class="columns is-multiple">
              <div class="column is-6">
                <div class="field">
                  <label class="label">Continent</label>
                  <div class="control">
                    <div class="select ma_select is-small is-fullwidth">
                      <select id="firstInput"  @change="secondInputOptions()" v-model="form.continent">
                        <option v-for="option in firstInputOptions" :key="option">{{option}}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Theme :</label>
                  <div class="control">
                    <div class="select is-small is-fullwidth">
                      <select v-model="form.theme">
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
                    <input class="input is-small" type="number" v-model="form.duration" />
                  </div>
                </div>
              </div>
            </div>
 
            <div class="field">
              <label class="label">Choose:</label>
              <div class="control">
                <label class="radio">
                  <input type="radio" name="answer" v-model="fromto" @click="showfromto()" />
                  From-To
                </label>
                <label class="radio">
                  <input type="radio" name="answer" v-model="month" @click="showmonths()" />
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
            <button class="button is-link  mon_boutton1" @click.prevent="next1()">Next</button>
          </fieldset>
        </div>
      </transition>
      <transition name="slide-fade">
        <div v-if="step === 2">
          <fieldset class="mon_cadre2">
              <div class="scroller_form">
 
        <div v-for="(item,idx) in parseInt(form.duration)" :key="idx" >
            <p>{{idx}}</p>
                <textarea
                  class="t1"
                  placeholder="Please describe the trip program you suggest"
                 v-bind:id="idx"  
                ></textarea>
                          
             <br>
            <br>
        </div>
        </div>
            <button class="button mon_boutton2 is-link is-outlined" @click.prevent="next2()">Next</button>
          </fieldset>
        </div>
      </transition>
      <transition name="slide-fade">
        <div v-if="step === 3">
          <fieldset class="mon_cadre3">
            <label class="label mon_titre">Step Three</label>
            <hr class="mon_ligne1" />
            <div class="field">
              <label class="label">Did you try this trip Alone or with a travel agency:</label>
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
 
            <div v-if="inputagencyshow">
              <div class="columns is-multiple">
                <div class="column is-6">
                  <div class="field">
                    <label class="label">Specify the agency name:</label>
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
                    <label class="label">Specify the agency number:</label>
                    <div class="control">
                      <input
                        class="input is-small is-fullwidth"
                        type="tel"
                        v-model="form.agencynumber"
                        v-if=" inputagencyshow"
                      />
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <label class="label">Specify the agency email:</label>
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
                    <label class="label" v-if="inputagencyshow">The Average price of the trip:</label>
                    <div class="control">
                      <input
                        class="input is-small is-fullwidth"
                        type="text"
                        v-model="form.price"
                        v-if="inputagencyshow"
                      />
                    </div>
                  </div>
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
                <label class="label" v-if="textshow">Please specify the Average price of the trip:</label>
                <div class="control">
                  <input
                    class="input is-small column is-6 is-fullwidth"
                    v-if="textshow"
                    type="text"
                    v-model="form.price"
                  />
                </div>
              </div>
            </div>
            <button
              class="button mon_boutton3 is-danger is-outlined"
              @click.prevent="prev()"
            >Previous</button>
            <button class="button mon_boutton3 is-link is-outlined" @click.prevent="submit()">Send</button>
          </fieldset>
        </div>
      </transition>
    </form>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  name: "formtrip",
  data() {
    return {
      form: {
        title: null,
        continent: null,
        country: null,
        theme: null,
        duration: null,
        from: null,
        to: null,
        program: [],
        try1: "kghj",
        inspiration: null,
        agencyname: null,
        agencynumber: null,
        agencyemail: null,
        owner:null,
        price: null
      },
      fromto: "",
      month: "",
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
      textshow: false,
      inputagencyshow: false,
      inputfromtoshow: false,
      monthshow: false
    };
  },
 
  methods: {
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
    submit() {
      return new Promise((rresolve, reject) => {
        axios
          .post("http://localhost:3000/api/v2/tripper/submitform", this.form)
          .then(data => {
             console.log("aziz")
            resolve(form);
          })
          .catch(error => {});
      });
      /* console.log(this.form.try1);
      if (this.form.try1 === "travel_agency") {
        if (
          this.form.agencyname === null ||
          this.form.agencynumber === null ||
          this.form.agencyemail === null ||
          this.form.price === null
        ) {
          alert("please complete the form");
          console.log(this.form.try1);
        } else alert("form added");
      } else if (this.form.try1 === "alone") {
        if (this.form.inspiration === null || this.form.price === null) {
          alert("please complete the form");
          console.log(this.form.try1);
        } else alert("form added");
      } else {
        alert("please complete the form");
        console.log(this.form.try1);
      }*/
 
      
    }
  },
 
 /* computed: {
    secondInputOptions() {
      return this.form.continent === "Africa" ? this.Africa : this.Europe;
    }
  }*/
};
</script>
 
<style scoped>
.mon_titre {
  padding-top: 15px;
  color: rgb(88, 88, 86);
}
 
.scroller_form {
  height: 460px;
  overflow-y: scroll;
    scrollbar-color: rebeccapurple green;
padding-right: 30px;
  scrollbar-width: thin;
 
}
 
.t1{
   width: 500px;
  height: 150px;
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
  width: 288px;
}
.w{
  width: 388px;
}
.ma_select:focus {
  border-block-end-style: solid;
  border-block-color: black;
}
.box-shadow-form {
  box-shadow: 2px 2px 6px 2px rgb(200, 209, 203);
}
</style>
 
 