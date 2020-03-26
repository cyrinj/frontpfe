<template>
  <div id="wallet">
    <fieldset class="cadre_wallet">
      <div class="field">
        <label class="label label_wallet">
          Coins : 200
          <span class="icon has-text-warning e2">
            <i class="fas fa-coins"></i>
          </span>
        </label>
      </div>

      <br />
      <div class="columns is-multiple">
        <div class="column is-5">
          <div class="field">
            <div class="select is-small">
              <select class="select_convertir">
                <option value disabled selected hidden>Devis</option>
                <option class="options_activity">Dinar</option>
                <option class="options_activity">Dollar</option>
                <option class="options_activity">Euro</option>
              </select>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <button class="button boutton_convertir" @click.prevent="transform()">
            <span class="icon has-text-link">
              <i class="fas fa-lg fa-arrows-alt-v"></i>
            </span>
          </button>
        </div>
      </div>
      <div class="field">
        <label class="label label_wallet">
         => 350 DT
        </label>
      </div>
       <label class="label rib">
         <br>
          RIB :  <input type="text" class="ribinput" />
       </label>
                     
        <button class="button is-link is-outlined boutton_walletrib" >Send</button>

    </fieldset>
  </div>
</template> 


<script>
export default {
  data() {
    return {
      my_object: {
        country: "",
        program: "",
        status: "",
        wallet: ""
      },
      rowData: [],
      rows: [
        { country: 1, program: "xxxxxx", status: "ok", wallet: "20" },
        { country: 2, program: "yyyyyy", status: "no", wallet: "//" },
        { country: 5, program: "zzzzzz", status: "//", wallet: "//" },
        { country: 6, program: "zzzzzz", status: "//", wallet: "//" },
        { country: 7, program: "zzzzzz", status: "//", wallet: "//" },
        { country: 8, program: "zzzzzz", status: "//", wallet: "//" },
        { country: 3, program: "zzzzzz", status: "//", wallet: "//" }
      ]
    };
  },
  mounted() {
    for (var i = 0; i < this.rows.length; i++) {
      this.my_object.country = this.rows[i].country;
      this.my_object.program = this.rows[i].program;
      this.my_object.status = this.rows[i].status;
      this.my_object.wallet = this.rows[i].wallet;
      this.rowData.push(this.my_object);
      console.log(this.my_object);
    }
  }
};
</script>

<style scoped>
.cadre_wallet {
  position: absolute;
  left: 440px;
  top: 110px;
  width: 450px;
  height: 400px;
  background-color: rgb(244, 248, 245);
  padding: 15px 10px 15px 10px;
  border: 0px solid rgb(65, 63, 63);
}
.label_wallet {
  margin-top: 30px;
  margin-bottom: 15px;
  margin-left:50px;
  padding-left: 20px;
  font-size: 21px;
  border: 1px solid rgb(214, 206, 206);
  width: 175px;
}

.boutton_convertir {
  height: 30px;
  background-color: rgb(244, 248, 245);
}

.select_convertir {
  background-color: rgb(244, 248, 245);
  margin-left: 50px;
  width:110px
}
.boutton_walletrib{
  margin-top: 15px;
  margin-left: 50px;
  width: 75%;
}
.rib{
  margin-left: 50px;
}

.ribinput{
  margin-left: 10px;
  width: 72%;
  background-color: rgb(244, 248, 245) ;
    border: 1px solid rgb(214, 206, 206);

}

.scroller {
  height: 300px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
  margin-top: 30px;
}

#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  /* position: absolute; /* postulat de départ */
  /* top: 50%; left: 50%; /* à 50%/50% du parent référent */
  /* transform: translate(-50%, -50%); /* décalage de 50% de sa propre taille */
}

table {
  height: 50px;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(56, 228, 113);
  color: white;
}

body {
  height: 100%;
}

section {
  height: 100%;
  background: red;
  height: 200px;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
}

.is-narrow {
  height: 100%;
  background: red;
  height: 100%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;

  width: 220px;
}

.last-of-type {
  background: white;
  flex: 2 1 auto;
}

.xe {
  border-style: none none solid none;
  border-width: 1px;
  border-block-end-color: rgb(228, 223, 223);
  margin-bottom: 25px;
  margin-top: 25px;
  margin-left: 25px;
  font-size: 16px;
  width: 60%;
  background: white;
}

.xe:focus {
  border-block-end-style: solid;
  border-block-end-color: rgb(56, 228, 113);
  border-width: 1px;
}
</style>
<!--<template>
  <div id="wallet">
    <form>
   
        
        
          <fieldset class="kb">
                <button @click="fou9()">
    fou9
  </button>
      <button @click="louta()">
    louta
  </button>
  <transition name="slide-fade">
    <p v-if="show">bonjour</p>
    
  </transition>

          </fieldset>
     
    

    
    </form>
  </div>
</template> 

<script>
export default {
  name: "wallet",
  data() {
    return {
      form: {
        continent: null,
        country: null,
        theme: null,
        duration: null,
        from: null,
        to: null,
        program: null,
        try1: "kghj",
        inspiration: null,
        agencyname: null,
        agencynember: null,
        agencyemail: null,
        price: null
      },
      fromto: "",
      month: "",
      firstInputOption: ["Africa", "Europe"],
      Africa: ["Tunisia", "Algeria", "Marooc"],
      europe: "",
      Europe: ["Itali", "France", "Espagne"],
      msg: "Welcome to Your Vue.js PWA",
      step: 1,
      textshow: false,
      inputagencyshow: false,
      inputfromtoshow: false,
      monthshow: false,
      show:true
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
    fou9(){
        this.show=false
    },
     louta(){
        this.show=true
    },
    next2() {
      this.step++;
    },
    prev() {
      this.step--;
    },
    submit() {
      console.log(this.form.try1);
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
      }
    }
  },

  computed: {
    secondInputOptions() {
      return this.form.continent === "Africa" ? this.Africa : this.Europe;
    }
  }
};
</script>

<style scoped>
.step{
  padding-top: 15px;
  color: rgb(88, 88, 86);
}
.box-shadow-y {
  box-shadow: 0px 2px 10px rgba(27, 134, 23, 0.25);
}
.z {
  position: absolute;
  top: 91px;
  left: 311px;
  width: 1200px;
  height: 474px;
  background-color: royalblue;
}

.jk {
  background-color: tomato;
  height: 472px;
}

.kb {
  position: absolute;
  left: 440px;
  top: 150px;
  width: 690px;
  background-color:rgb(248, 244, 244);
  height: 300px;
  padding: 5px 90px 10px 90px;
  border: 0px solid rgb(65, 63, 63);
}
.kb2 {
  position: absolute;
  left: 440px;
  top: 80px;
  width: 690px;
  background-color: white;
  height: 480px;
  padding: 5px 90px 10px 90px;
  border: 0px solid rgb(145, 142, 142);
}

.kb3 {
  position: absolute;
  left: 440px;
  top: 80px;
  width: 690px;
  background-color: white;
  height: 400px;
  padding: 5px 90px 10px 90px;
  border: 0px solid rgb(145, 142, 142);
}

.slide-fade-enter-active {
  transition: all 1.5s;}
.slide-fade-leave-active {
  transition: all 1.5s;}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-43px);
}


.f {
  background-color: tomato;
}

.r {
  top: 10px;
  height: 450px;
}

.but {
  margin-top: 25px;
}

.w {
  width: 243px;
}

.x {
  margin-top: 13px;
}
.x3 {
  margin-top: 20px;
}

.hr2{
  margin-bottom:30px;
}

.lm{
  margin-top: 40px;
  padding-bottom: 40px;
}
.t22{
  margin-top: 30px;
}

.ze:focus {
  border-block-end-style: solid;
  border-block-color: black;
}
</style>




<template>
  <div id="wallet">
    <form>
      <transition name="slide-fade">
        <div v-if="step === 1">
        
          <fieldset class="kb">
                              <label class="label step">Step One</label>
               <hr>
            <div class="columns is-multiple">
              <div class="column is-6">
          

<select class="xe" name="pets" id="pet-select" autocomplete="off">
    <option value="">Continent</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>

               
            
<select class="xe" name="thems" id="theme-select">

                              <option value="">Theme</option>
          
                        <option value="1">Fitness</option>
                        <option value="2">Photography</option>
                        <option value="3">Videography</option>
                        <option value="4">Hiking</option>
                        <option value="5">Wellness</option>
                        <option value="6">Food</option>
                        <option value="7">Skiing</option>
                        <option value="8">Adventure</option>
                        <option value="9">Exploration</option>
                      </select>
                    
                 
              </div>
              <div class="column is-6">
               
                    <input class="xe" type="text" v-model="form.country" list="Africa" />
                    <datalist class="datalist xe" id="Africa">
                      <option v-for="option in secondInputOptions" :key="option">{{option}}</option>
                    </datalist>
                  
               
               
                    <input class="xe" type="number" placeholder="Number of days" v-model="form.duration" />
                 
              </div>
            </div>

           
              <label>Choose:</label>
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
           
            <div v-if="inputfromtoshow">
              <div class="columns is-multiple">
                <div class="column is-6">
                                        <label>From</label>
           <br>
                        <select class="w xe" name="to" v-model="form.from" required>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">August</option>
                          <option value="8">September</option>
                          <option value="9">October</option>
                          <option value="8">November</option>
                          <option value="9">December</option>
                        </select>
                </div>
                <div class="column is-6">
                 
                    <label>To</label>
                <br>
                        <select class="w xe" name="to" v-model="form.to" required>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">August</option>
                          <option value="8">September</option>
                          <option value="9">October</option>
                          <option value="8">November</option>
                          <option value="9">December</option>
                        </select>
                      
                </div>
              </div>
            </div>
            <div v-else>
              
                <label v-if="monthshow">Month</label>
                <br>
                    <select class="w xe" name="month" v-model="form.month" required>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">August</option>
                      <option value="8">September</option>
                      <option value="9">October</option>
                      <option value="8">November</option>
                      <option value="9">December</option>
                    </select>
            </div>
            <button class="button is-link is-outlined but" @click.prevent="next1()">Next</button>
          </fieldset>
        </div>
      </transition>
      <transition name="slide-fade">
        <div v-if="step === 2">
          <fieldset class="kb2">
             <label class="label step">Step Two</label>
               <hr class="hr2">
            <div class="field">
              <div class="control">
                <textarea
                  class="textarea is-fullwidth"
                  placeholder="Please describe the trip program you suggest"
                  rows="10"
                  v-model="form.program"
                ></textarea>
              </div>
            </div>

            <button class="button x is-danger is-outlined" @click.prevent="prev()">Previous</button>
            <button class="button x is-link is-outlined" @click.prevent="next2()">Next</button>
          </fieldset>
        </div>
      </transition>
      <transition name="slide-fade">
        <div v-if="step === 3">
          <fieldset class="kb3">
              <label class="label step">Step Three</label>
               <hr>
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
              <div class="columns is-multiple lm">
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
              <br />
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
            <button class="button x3 is-danger is-outlined" @click.prevent="prev()">Previous</button>
            <button class="button x3 is-link is-outlined" @click.prevent="submit()">Send</button>
          </fieldset>
        </div>
      </transition>
    </form>
  </div>
</template>

<script>
export default {
  name: "wallet",
  data() {
    return {
      form: {
        continent: null,
        country: null,
        theme: null,
        duration: null,
        from: null,
        to: null,
        program: null,
        try1: "kghj",
        inspiration: null,
        agencyname: null,
        agencynember: null,
        agencyemail: null,
        price: null
      },
      fromto: "",
      month: "",
      firstInputOption: ["Africa", "Europe"],
      Africa: ["Tunisia", "Algeria", "Marooc"],
      europe: "",
      Europe: ["Itali", "France", "Espagne"],
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
      this.step++;
    },
    prev() {
      this.step--;
    },
    submit() {
      console.log(this.form.try1);
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
      }
    }
  },

  computed: {
    secondInputOptions() {
      return this.form.continent === "Africa" ? this.Africa : this.Europe;
    }
  }
};
</script>

<style scoped>
.step{
  padding-top: 15px;
  color: rgb(88, 88, 86);
}
.box-shadow-y {
  box-shadow: 0px 2px 10px rgba(27, 134, 23, 0.25);
}
.z {
  position: absolute;
  top: 91px;
  left: 311px;
  width: 1200px;
  height: 474px;
  background-color: royalblue;
}

.jk {
  background-color: tomato;
  height: 472px;
}

.kb {
  position: absolute;
  left: 440px;
  top: 85px;
  width: 690px;
  background-color: white;
  height: 480px;
  padding: 5px 90px 10px 90px;
  border: 0px solid rgb(145, 142, 142);
}
.kb2 {
  position: absolute;
  left: 440px;
  top: 80px;
  width: 690px;
  background-color: white;
  height: 480px;
  padding: 5px 90px 10px 90px;
  border: 0px solid rgb(145, 142, 142);
}

.kb3 {
  position: absolute;
  left: 440px;
  top: 80px;
  width: 690px;
  background-color: white;
  height: 400px;
  padding: 5px 90px 10px 90px;
  border: 0px solid rgb(145, 142, 142);
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
  transform: translateX(1000px);
}
.slide-fade-leave {
  transition: all 0.3s ease;
  transform: translateX(1000px);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(1000px);
  opacity: 0;
}

.f {
  background-color: tomato;
}

.r {
  top: 10px;
  height: 450px;
}

.but {
  margin-top: 25px;
}

.w {
  width: 50px;
}
.xe {
  border-style: none none solid none;
  border-width: 1px;
  border-block-end-color: rgb(228, 223, 223);
  margin-bottom: 25px;
   margin-top: 25px;
   margin-left: 25px;
   font-size: 16px;
   width: 60%;
   background: white;
       }

   

.xe:focus {
  border-block-end-style: solid;
  border-block-end-color: rgb(56, 228, 113);
      border-width: 1px;

}
.x {
  margin-top: 13px;
}
.x3 {
  margin-top: 20px;
}

.hr2{
  margin-bottom:30px;
}



.lm{
  margin-top: 40px;
  padding-bottom: 40px;
}
.t22{
  margin-top: 30px;
}

.ze:focus {
  border-block-end-style: solid;
  border-block-color: black;
}

.formfield-select {
	position: relative;
}

.formfield-select--container {
	position: relative; 
	
	background-color: #fff;
	border: #777 1px solid;
	margin: 0 0 1.5em 0;
	
	overflow: hidden; 
	/* 
		Le select natif pourra 
		dépasser sans être vu 
	*/
}

.formfield-select--container select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	width: 110%; 
	/* 
		On est sûr de ne plus voir
		la flèche native 
	*/
	
	height: auto;
	border: 0; 
	margin: 0;
	padding: .75em;
	border-radius: 0;
	

	overflow: hidden;
	text-overflow: ellipsis;
	/* 
		On empêche le texte d'aller
		jusqu'au bout s'il est trop long
	*/

}
</style>





  





  


-->