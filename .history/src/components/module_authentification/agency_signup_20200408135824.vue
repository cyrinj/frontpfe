<template>
  <div id="agency_signup">
     
                
             
    <div class="content">
      <section class="hero is-fullheight">
        <div class="container has-text-centered">
          <br />
          <div class="column is-4 is-offset-4">
            <h3 class="subtitle has-text-black">
              Subscribe to Wantotrip
              <span class="icon has-text-info">
                <i class="fas fa-crown espace"></i>
              </span>
            </h3>
              <hr class="login-hr" />
              <div v-if="step === 1">
                <div class="box">
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
                        class="input"
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
                </div>
              </div>
            
 <div v-if="step === 2">
                <div class="box">
                    <label class="llb">Click on the country name to delete it from your list </label>
                 <br>
                     <div id="cont" class="m is-grouped is-grouped-multiline">
                      
                  </div>
                 
  <label class="llb">Countries</label>    
                  <div class="control">
                    <input
                      class="dtn"
                      id="bb"
                      v-model="ddd"
                      list="countries"
                      v-on:keyup.enter="submitkey"
                    />
                    <datalist id="countries">
                      <option v-for="(option,idx) in countries" :key="idx">{{option}}</option>
                    </datalist>
                  </div> 
                
                    <button
                    class="button previous is-rounded is-danger"
                    @click.prevent="prev()"
                  >Previous</button>
                  <button class="button next1 is-rounded is-info" @click.prevent="next2()">Next</button> 
                  </div>
                  </div>
              <div v-if="step === 3">
                <div class="box">
                  <div class="select">
                    <select class="select">
                      <option class="op">Agecny</option>
                      <option class="op">Local Guid</option>
                    </select>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input
                        id="backupemail"
                        class="input"
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
                        class="input"
                        type="text"
                        placeholder="Website"
                        v-model="user.website"
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
                        placeholder="Facebook"
                        v-model="user.facebook"
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
                    class="button previous is-rounded is-danger"
                    @click.prevent="prev()"
                  >Previous</button>
                  <button class="button next1 is-rounded is-info" @click.prevent="submit()">Send</button>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { registerService } from "@/api/auth.service.js";

export default {
        name:"agency_signup",
  data() {
    return {
      url: "http://localhost:3000",
      user: {},
      reach: [],
      email: "",
      password: "",
      confirmpassword: "",
      step: 1,
      ddd: "",
      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua & Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia & Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central Arfrican Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote D Ivoire",
        "Croatia",
        "Cuba",
        "Curacao",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Polynesia",
        "French West Indies",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauro",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Pierre & Miquelon",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "St Kitts & Nevis",
        "St Lucia",
        "St Vincent",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor L'Este",
        "Togo",
        "Tonga",
        "Trinidad & Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks & Caicos",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Virgin Islands (US)",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ]
    };
  },
  methods: {
    myFunction1() {
      var inpObjpassword = document.getElementById("password");
      var inpObjemail = document.getElementById("email");
      var inpObjbackupemail = document.getElementById("backupemail");
      var inpObjconfirmpassword = document.getElementById("confirmpassword");
      var inpObjusername = document.getElementById("username");
      var inpObjsecurityquestion = document.getElementById("securityquestion");
      var inpObjresponse = document.getElementById("response");

      if (this.user.email == null || this.user.email == "") {
        inpObjemail.setCustomValidity("Please enter your email");
      } else {
        inpObjemail.setCustomValidity("");
      }

      if (this.user.password == null || this.user.password == "") {
        inpObjpassword.setCustomValidity("Please enter your password");
      } else if (this.validate() == false) {
        inpObjpassword.setCustomValidity(
          "Password : A-Z,a-z,$!*/-+,0-9,length>8"
        );
      } else {
        inpObjpassword.setCustomValidity("");
      }

      if (this.user.username == null || this.user.username == "") {
        inpObjusername.setCustomValidity("Please enter your username");
      } else {
        inpObjusername.setCustomValidity("");
      }

      if (
        this.user.securityquestion == null ||
        this.user.securityquestion == ""
      ) {
        inpObjsecurityquestion.setCustomValidity(
          "Please enter your security question"
        );
      } else {
        inpObjsecurityquestion.setCustomValidity("");
      }

      if (this.user.response == null || this.user.response == "") {
        inpObjresponse.setCustomValidity("Please enter your response");
      } else {
        inpObjresponse.setCustomValidity("");
      }

      if (this.confirmpassword == null || this.confirmpassword == "") {
        inpObjconfirmpassword.setCustomValidity("Please enter your password");
      } else if (this.confirmpassword != this.user.password) {
        inpObjconfirmpassword.setCustomValidity(
          "Please write the same password"
        );
      } else {
        inpObjconfirmpassword.setCustomValidity("");
      }

      if (
        this.user.password == null ||
        this.user.password == "" ||
        this.user.email == null ||
        this.user.email == "" ||
        this.user.username == null ||
        this.user.username == "" ||
        this.user.securityquestion == null ||
        this.user.securityquestion == "" ||
        this.user.response == null ||
        this.user.response == ""
      ) {
        return false;
      } else {
        return true;
      }
    },
    myFunction() {
      var inpObjstatus = document.getElementById("status");
      var inpObjwebsite = document.getElementById("website");
      var inpObjfacebook = document.getElementById("facebook");
      var inpObjtripadvisor = document.getElementById("tripadvisor");

      if (this.user.URL.website == null || this.user.URL.website == "") {
        inpObjwebsite.setCustomValidity("Please enter your url website");
      } else {
        inpObjwebsite.setCustomValidity("");
      }

      if (this.user.URL.facebook == null || this.user.URL.facebook == "") {
        inpObjfacebook.setCustomValidity("Please enter your url facebook");
      } else {
        inpObjfacebook.setCustomValidity("");
      }

      if (
        this.user.URL.tripadvisor == null ||
        this.user.URL.tripadvisor == ""
      ) {
        inpObjtripadvisor.setCustomValidity("Please enter your response");
      } else {
        inpObjtripadvisor.setCustomValidity("");
      }

      if (
        this.user.URL.website == null ||
        this.user.URL.website == "" ||
        this.user.URL.facebook == null ||
        this.user.URL.facebook == "" ||
        this.user.URL.tripadvisor == null ||
        this.user.URL.tripadvisor == ""
      ) {
        return false;
      } else {
        return true;
      }
    },
    submitkey() {
      var x = document.getElementById("cont");
      var datalist = this.ddd;
      this.ddd = "";
      var aEl = document.createElement("button");
      aEl.setAttribute("id", datalist);
      aEl.href = "/news_events/";
      var spanEl = document.createElement("span");
      spanEl.classList.add("picon-p-add-news");
      aEl.appendChild(spanEl);
      aEl.insertAdjacentText("beforeend", datalist);
      aEl.onclick = this.cv;
      aEl.style.color = "blue";
      aEl.style.backgroundColor = "white";
      aEl.style.height = "30px";
      aEl.style.border = "solid";
       aEl.style.borderWidth ="0.2px"
      aEl.style.borderColor = "whitesmoke";
      aEl.style.display = "inline-block";
      // aEl.addEventListener("click", this.cv(datalist));
      x.appendChild(aEl);
      this.reach.push(datalist);
      console.log("mytable", this.reach);
    },
    cv(datalist) {
      var x = document.getElementById(datalist.explicitOriginalTarget.id);
      for (var i = 0; i < this.reach.length; i++) {
        if (this.reach[i] == datalist.explicitOriginalTarget.id) {
          this.reach.splice(i, 1);
          break;
        }
      }
      x.remove();
      console.log("mytable", this.reach);
    },
    validate() {
      var msg;
      var str = this.user.password;
      if (
        str.match(/[0-9]/g) &&
        str.match(/[A-Z]/g) &&
        str.match(/[a-z]/g) &&
        str.match(/[^a-zA-Z\d]/g) &&
        str.length >= 8
      ) {
        return true;
      } else {
        return false;
      }
    },
    next1() {
      //  var x = this.myFunction1();

      //  if(x==true)
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
};
</script>

<style scoped>
hr.login-hr {
  background-color: rgb(182, 185, 194);
}

.llb{
    font-size: 13.5px;
    float: left;
      
      margin-bottom: 10px;

}
.dtn {
    width: 100%;
    border-radius: 3px;
    height:37px;
   
     background-color: rgb(246, 244, 244);
     margin-bottom: 13px;
}
.m {
         background-color: rgb(246, 244, 244);

    border: solid;
    border-width: 0.5px;
    border-color: whitesmoke;
  height: 200px;
  overflow-y: scroll;
  scrollbar-color: rgb(208, 207, 228) rgb(172, 216, 172);
 width: 325px;
  scrollbar-width: thin;
  overflow:hidden;
  margin-bottom: 10px;
  
}
.container {
  width: 1200px;
}

.input {
  background-color: rgb(246, 244, 244);
  color: rgb(0, 0, 0);
}

.espace {
  margin-left: 20px;
}

.next1 {
  float: right;
}

.previous {
  float: left;
}
.op {
  width: 90%;
}
.select {
  float: left;
  width: 100%;
  margin-bottom: 12px;
  background-color: rgb(246, 244, 244);
  color: rgb(133, 133, 127);
}
</style>

