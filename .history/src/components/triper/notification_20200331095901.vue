<template>
  <div id="status">
    <fieldset class="cadre_status">
      <ul>
        <li class="message" v-for="(obj, idx) in rows" :key="idx">
                            <i class="fas fa-map-marker-alt"></i>

        <strong>{{obj.title}}</strong> <br>
         {{obj.contenu}}<br>
         {{obj.date}}
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
          title: "Reclamation admin",
          contenu: "On vous informe que votre trip est accepté",
          date: "23-03-2020",
        },
        {
          title: "Reclamation admin",
          contenu: "On vous informe que votre trip est à negocier",
          date: "30-03-2020",
        },
        {
          title: "Reclamation admin",
          contenu: "On vous informe que la séance de negociation du trip France proposé est pour le 04/04/2020",
          date: "02-04-2020",
        },
        
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
ul {
  list-style-type: none;
  background:white;
  padding: 20px;
}

ul li {
  background: #f3f4f5;
  margin: 5px;
}
</style>