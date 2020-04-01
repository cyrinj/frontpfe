<template>
  <div id="status">
    <fieldset class="cadre_status">
      <ul>
        <li class="message" v-for="(obj, idx) in rows" :key="idx">
          <div class="eb3ed">
                   
    <span class="titlestyle">  <strong>{{obj.title}} </strong> </span>
        <span class="contenustyle">  : {{obj.contenu}}</span>  </div>   
        <div class="supp"> <button class="br" @click="supprimer(obj)"><i class="fa fa-trash"></i></button>  
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
    

      this.rows = data;})

    

  }
};
</script>

<style scoped>
.titlestyle{
     color: rgb(32, 5, 5);
}
.contenustyle{
  color: rgb(78, 16, 133);
     font-size: 15px;

}
.datestyle{
   margin-left: 695px;
   font-size: 13px;
}
.cadre_status {
  position: absolute;
  left: 410px;
  top: 120px;
  width: 850px;
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
    padding-top: 10px;
   padding-left: 1px;
  background: #f3f4f5;
  margin: 5px;
}

.eb3ed{
  width: 600px;
  display: inline-block;
       margin-left: 10px;

}

.supp{
  display: inline-block;
 
  width : 60px;
  margin-left: 10px;
}
</style>