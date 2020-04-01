<template>
  <div id="demande_agency">
    <fieldset class="cadre_status box-shadow-form">
      <div class="columns is-multiple l">
        <div class="column">
            <div>
              <div>
                <h3 class="titre">
                  {{item.title}}
                  <button class="btn" @click="update(item)">
                    <i class="fa fa-calendar-check"></i>
                  </button>
                </h3>
                <br />
                 <span class="icon has-text-warning ei">
                  <i class="fas fa-user-shield"></i>
                </span>
                {{item.blogger}}
                <br />
              
                <span class="icon has-text-success ei">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                {{item.country}}
                <br />
                <span class="icon has-text-info ei">
                  <i class="fas fa-calendar-alt"></i>
                </span>
                {{item.from}} - {{item.to}}
                <br />
                <span class="icon has-text-danger ei">
                  <i class="fas fa-heart"></i>
                </span>
                {{item.theme}}
                <br />

                <hr />
                <ul class="b" v-for="(item1,id1) in item.program" :key="item1.id1">
                  <li>
                    <p>
                      <strong>Day {{id1+1}}</strong>
                    </p>
                    {{item1}}
                  </li>
                  <hr />
                </ul>
                <br />
               
              </div>
            
            </div>
              <textarea
                  class="t1"
                  placeholder="Describe the day you suggest"
                   
                ></textarea>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { tripstatusService } from "@/api/tripper.service.js";

import axios from "axios";
export default {

  name: "demande_agency",
   props: ['objtrip'],
  data() {
    return {
        item:null,
      affiche_delete: true,
      affiche_oui: false,
      affiche_non: false,
      my_object: {
        country: "",
        program: "",
        status: "",
        wallet: "",
        supp: true,
        oui: "false"
      },
      rowData1: [],
      rowData2: [],
      milieu: 0,

      rowData: [],
      rows: [
        {
          country: "Africa",
          program: "xxxxxx",
          status: "accepted",
          wallet: "photography"
        },
        {
          country: "South Amarica",
          program: "yyyyyy",
          status: "refused",
          wallet: "fitness"
        },
        {
          country: "Africa",
          program: "zzzzzz",
          status: "//",
          wallet: "adventure"
        },
        { country: "Europe", program: "zzzzzz", status: "//", wallet: "sport" },
        {
          country: "Africa",
          program: "zzzzzz",
          status: "accepted",
          wallet: "fitnes"
        },
        { country: "Asia", program: "zzzzzz", status: "//", wallet: "sport" },
        { country: "Asia", program: "zzzzzz", status: "//", wallet: "yoga" }
      ]
    };
  },
  methods: {
   

   
  },
  /* watch : {
               rowData:function(val) {
                  this.trips = val;
                  this.rowData = val 
               },
               
            },*/
  mounted() {
   // this.$store.dispatch("tripstatus").then(data => {
     //console.log("ggg",this.objtrip)
      this.item = this.objtrip;
     // console.log("whta",his.item, this.objtrip)
     /* this.milieu = this.rowData.length / 2;
      this.rowData1 = this.rowData.slice(0, this.milieu);
      this.rowData2 = this.rowData.slice(this.milieu, this.rows.length);*/
   // });
  }
};
</script>

<style scoped>
.b {
  list-style-type: square;
}
.cadre_status1 {
  position: absolute;
  left: 410px;
  top: 120px;
  width: 800px;
  background-color: white;
  padding-top: 15px;
}

.cadre_status {
  position: absolute;
  left: 410px;
  top: 120px;
  width: 850px;
  background-color: white;
  height: 505px;
  border: 1px solid rgb(235, 229, 229);
  overflow: auto;
  padding-top: 15px;
  scrollbar-color: rebeccapurple rgb(56, 228, 113);
  scrollbar-width: thin;
}

.ei {
  display: inline-block;
}
.et {
  display: inline-block;
}

table {
  border: 1px red;
}
/*.internal {
  width: 665px;
  height: 400px;
  border: 1px  rgb(230, 224, 224);
  display: inline-block;
  border-style: solid none solid solid; 
  padding-left: 20px;
  
}*/
/*.scroller_trip {
 
  height: 400px;
  overflow-y: scroll;
  scrollbar-color: rgb(198, 193, 204) rgb(86, 170, 86);
  scrollbar-width: thin;

}*/

.l {
  padding-left: 20px;
  padding-left: 20px;

  width: 800px;
}

.malabel {
  color: rgb(63, 138, 94);
  text-decoration: underline;
  margin-right: 10px;
  font-weight: bold;
}

.titre {
  text-decoration: underline;
  display: inline-block;
}

.g {
  text-align: center;
  height: 25px;
  display: inline-block;
  margin-left: 60px;
  padding: 8px;
}

.btn {
  background-color: rgb(111, 154, 209);
  border: none;
  display: inline-block;
  margin-left: 60px;
  font-size: 13px;
  padding: 5px 8px;

  color: white;
}

.btn:hover {
  background-color: rgb(103, 36, 228);
}

.btn1 {
  background-color: rgb(209, 60, 97);
  border: none;
  display: inline-block;
  margin-left: 5px;
  font-size: 13px;
  padding: 5px 8px;

  color: white;
}

.btn1:hover {
  background-color: red;
}
.t1{
   width: 602px;
   height: 280px;
   border: 2px solid rgb(224, 224, 216);
    overflow:hidden;
    margin-left:110px;
}
 
</style>