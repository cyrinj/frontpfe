<template>
  <div id="status">
    <fieldset class="cadre_status box-shadow-form">
     <ul >
        <li  v-for="(obj, idx) in rows" :key="idx">
          <p>
            <span>{{ obj.country }}</span>
           
          </p>
        </li>
     </ul>
    </fieldset>
  </div>
</template>

<script>
import { tripstatusService } from "@/api/tripper.service.js";

import axios from "axios";
export default {

  name: "status",
  data() {
    return {
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
    update(item) {
      this.$router.push({
        name: "updatetrip",
        params: { objtrip: item }
      });
    },

    supprimer(item) {
      var r = confirm("Do you want to delete the trip");
      if (r == true) {
        this.$store.dispatch("tripdelete", item).then(data => {
          // console.log("aziz")
        });
      }
    }
  },
  /* watch : {
               rowData:function(val) {
                  this.trips = val;
                  this.rowData = val 
               },
               
            },*/
  mounted() {
   //this.$store.dispatch("tripstatus").then(data => {

     // this.rowData = data;
     /* this.milieu = this.rowData.length / 2;
      this.rowData1 = this.rowData.slice(0, this.milieu);
      this.rowData2 = this.rowData.slice(this.milieu, this.rows.length);*/
  //  });
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

.mon_cadre {
  position: absolute;
  left: 410px;
  top: 200px;
  width: 780px;
  background-color: rgb(244, 248, 245);
  height: 460px;
  padding: 5px 90px 10px 90px;
  border: 1px solid rgb(235, 229, 229);
}

.chat-box-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 10px;
  padding-right: 10px;
}
.chat-box-list-container {
  overflow-y: scroll;
  scrollbar-color: rgb(208, 207, 228) rgb(226, 233, 226);
  height: 280px;
  scrollbar-width: thin;
}

.me {
  float: right;
  background-color: rgb(159, 163, 221);
}

.notme {
  float: left;
  background-color: rgb(140, 226, 140);
}

span {
  padding: 8px;

  border-radius: 4px;
  max-width: 20%;
  color: white;
}

.chat-box {
  position: absolute;
  left: 500px;
  top: 200px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 10px;
  border: 1px solid rgb(212, 206, 240);
  width: 50vw;
  height: 50vh;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  align-items: space-between;
  justify-content: space-between;
}
.chat-inputs {
  display: flex;
}

textarea {
  width: 100%;
  padding-left: 15px;
  overflow: hidden;
  border: none;
  resize: none;
}
button {
  background: white;

  border: none;
  display: inline-block;
  margin-left: 635px;
  font-size: 15px;
  padding: 5px 8px;
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

.soustext {
  height: 31px;
  background-color: white;
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
</style>