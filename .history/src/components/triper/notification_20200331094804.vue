<template>
  <div id="status">
    <fieldset class="cadre_status box-shadow-form">
      <ul>
        <li class="message" v-for="(obj, idx) in rows" :key="idx">
         {{obj.country}}
        </li>
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
ul {
  background: #3399ff;
  padding: 20px;
}

ul li {
  background: #cce5ff;
  margin: 5px;
}
</style>