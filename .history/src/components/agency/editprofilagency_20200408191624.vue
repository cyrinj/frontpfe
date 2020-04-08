<template>
  <div>
    <div v-if="step === 1">
      <div class="box">
        <form>
          <div class="columns is-multiple bn">
            <div class="column is-6">
              <label class="mylabel">Username</label>
              <div class="field">
                <div class="control">
                  <input
                    id="username"
                    class="input is-small"
                    type="text"
                    placeholder="Agency name"
                    v-model="user.username"
                  />
                </div>
              </div>
              <label class="mylabel">Email</label>
              <div class="field">
                <div class="control">
                  <input
                    id="email"
                    class="input is-small"
                    type="email"
                    placeholder="Your Email"
                    v-model="user.email"
                  />
                </div>
              </div>

              <label class="mylabel">Sequrity question</label>
              <div class="field">
                <div class="control">
                  <input
                    id="securityquestion"
                    class="input is-small"
                    type="text"
                    placeholder="Security question"
                    v-model="user.securityquestion"
                  />
                </div>
              </div>
              <label class="mylabel">Response</label>
              <div class="field">
                <div class="control">
                  <input
                    id="response"
                    class="input is-small"
                    type="text"
                    placeholder="Response"
                    v-model="user.response"
                  />
                </div>
              </div>
            </div>
            <div class="column is-6">
              <label class="mylabel">Country</label>
              <div class="field">
                <div class="control">
                  <input class="dtn" id="bb" v-model="user.pays" list="countries" name="countriess" readonly />
                  <datalist id="countries">
                    <option v-for="(option,idx) in countries" :key="idx">{{option}}</option>
                  </datalist>
                </div>
              </div>
              <label class="mylabel">Email</label>
              <div class="field">
                <div class="control">
                  <input
                    id="email"
                    class="input is-small"
                    type="email"
                    placeholder="Your Backup Email"
                    v-model="user.backupemail"
                  />
                </div>
              </div>
              <label class="mylabel">Adress</label>
              <div class="field">
                <div class="control">
                  <input
                    id="response"
                    class="input is-small"
                    type="text"
                    placeholder="Adress"
                    v-model="user.adresse"
                  />
                </div>
              </div>
              <label class="mylabel">Telephone</label>
              <div class="field">
                <div class="control">
                  <input
                    id="response"
                    class="input is-small"
                    type="text"
                    placeholder="Telephone"
                    v-model="user.telephone"
                  />
                </div>
              </div>
            </div>
          </div>
          <button class="button is-info is-rounded next1" @click="moreInfo()">More Informations</button>
        </form>
      </div>
    </div>

    <div v-if="step === 2">
      <div class="box">
        <form>
           <!--  <div class="columns is-multiple  bn">
              <div class="column is-6">
                <label class="mylabel">Website</label>
                  <div class="field">
                    <div class="control">
                      <input
                        id="username"
                        class="input is-small"
                        type="text"
                        placeholder="Website url"
                        v-model="user.URL.Website"
                       
                      />
                    </div>
                  </div>
                   <label class="mylabel">Facebook</label>
                  <div class="field">
                    <div class="control">
                      <input
                        id="facebook"
                        class="input is-small"
                        type="text"
                        placeholder="Facebook url"
                        v-model="user.URL.facebook"
                        
                      />
                    </div>
                  </div>
                
                  
              </div>
              <div class="column is-6">
                
                    <label class="mylabel">Trip advisor</label>
                  <div class="field">
                    <div class="control">
                      <input
                        id="email"
                        class="input is-small"
                        type="text"
                        placeholder="Your Trip Advisor"
                        v-model="user.URL.tripadvisor"
                        required
                      />
                    </div>
                  </div>
                    <label class="mylabel">Status</label>
                  <div class="field">
                    <div class="control ">
                      <input
                        id="response"
                        class="input is-small"
                        type="text"
                        placeholder="Status"
                        v-model="user.status"
                        required
                      />
                    </div>
                  </div>
                   
               </div>-->
                </div>
     <button class="button is-info is-rounded next1" @click="moreInfo()">More </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import UserMixin from "@/mixins/user.mixin.js";

export default {
  mixins: [UserMixin],
  data() {
    return {
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
      ],
      step: 1
    };
  },
  mounted() {
    console.log("my user", this.user);
  },

  methods: {
    moreInfo() {
      this.step++;
    }
  }
};
</script>


<style scoped>
.box {
  position: absolute;
  left: 550px;
  top: 150px;
  width: 500px;
}

.mylabel {
  font-size: 13px;
}

.dtn {
  width: 100%;
  height: 29px;
}
.hey {
  border-style: none none solid none;
  border-width: 1px;
  border-block-end-color: rgb(250, 247, 247);

  color: rgb(82, 79, 79);
}
.next1 {
  float: right;
}
</style>