<template>
  <div id="status">
    <fieldset class="cadre_status">
      <ul>
        <li class="message" v-for="(obj, idx) in rows" :key="idx">
          <div class="eb3ed">
                   
    <span class="titlestyle">  <strong>{{obj.title}} </strong> </span>
        <div class="thedate"> <span>{{obj.date_suggestion[0]}}{{obj.date_suggestion[1]}}{{obj.date_suggestion[2]}}{{obj.date_suggestion[3]}}{{obj.date_suggestion[4]}}{{obj.date_suggestion[5]}}{{obj.date_suggestion[6]}}{{obj.date_suggestion[7]}}{{obj.date_suggestion[8]}}{{obj.date_suggestion[9]}}</span> </div></div>   
        <div class="supp">       
<button class="br" @click="update(obj)"><i class="fa fa-calendar-check has-text-danger"></i></button>  
<button class="br" @click="supprimer(obj)"><i class="fa fa-trash"></i></button>
</div>

        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
//import { getnotifService,  notifdeleteService } from "@/api/tripper.service.js";
export default {

  name: "status",
  data() {
    return {
        tablenotif:[],
        rows: []
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
        this.$store.dispatch("tripdraftdelete", item).then(data => {
          // console.log("aziz")
        });
      }
    }
  /*    supprimer(item) {
      var r = confirm("Do you want to delete the trip");
      if (r == true) {
         notifdeleteService(item).then(data => {
          // console.log("aziz")
        });
      }
    }   */
  },
  
 mounted() {
    
      this.$store.dispatch("tripsdrafts").then(data => {
    
    console.log("fff",data)
      this.rows = data;})

      console.log("ffff",this.rows)

  }
};
</script>

<style scoped>
.titlestyle{
     color: rgb(32, 5, 5);
     font-size: 13px;
}
.contenustyle{
  color: rgb(78, 16, 133);
     font-size: 15px;

}
.datestyle{
 
   font-size: 6px;
}
.cadre_status {
  position: absolute;
   margin-left: 500px;
  width:750px;
  top: 120px;
  border-radius: 20px;
    box-shadow: 4px 2px 10px rgb(216, 223, 216);

  background-color: white;
  height: 505px;
  border: 1px solid rgb(235, 229, 229);
  padding-top: 15px;
  scrollbar-color: rgb(241, 240, 243) rgb(56, 228, 113);
  scrollbar-width: thin;
    overflow-y: scroll;

}
.br{
  border: none;
  color: rgb(185, 179, 179);
  background-color:  #f3f4f5;
}
ul {
  list-style-type: none;
  background:white;
  margin-right: 30px;
}

ul li {
    padding-top: 1px;
   padding-left: 1px;
  background: #f3f4f5;
  margin: 5px;
  height: 30px;
}

.eb3ed{
  width:575px;
  display: inline-block;
       margin-left: 10px;

}

.supp{
  display: inline-block;
 
  width : 60px;
  margin-left: 10px;
}

.thedate{
    float:right
}
</style>