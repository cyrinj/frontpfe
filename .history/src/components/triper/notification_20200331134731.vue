<template>
  <div id="status">
    <fieldset class="cadre_status">
      <ul>
        <li class="message" v-for="(obj, idx) in rows" :key="idx">
          <div class="eb3ed">
                     <i class="fas fa-bell has-text-danger"></i>
    <span class="titlestyle"> <strong>{{obj.title}} </strong> </span>
        <span class="contenustyle">  : {{obj.contenu}}</span>  </div>   
        <div class="supp">       <i class="fas fa-bell has-text-danger"></i>
</div>

      <span class="datestyle">{{obj.date}}</span>  
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
//import { getnotifService } from "@/api/tripper.service.js";
export default {

  name: "status",
  data() {
    return {
        tablenotif:[],
        rows: [
        {
          title: "Trip wallet",
          contenu: "On vous informe que votre trip est accepté",
          date: "23-03-2020",
        },
        {
          title: "Trip negociation",
          contenu: "On vous informe que votre trip est à negocier",
          date: "30-03-2020",
        },
        {
          title: "Reclamation admin",
          contenu: "On vous informe que la séance de negociation du trip France proposé est pour ce lundi",
          date: "02-04-2020",
        },

         {
          title: "Trip wallet",
          contenu: "On vous informe que votre trip est accepté",
          date: "23-03-2020",
        },
        {
          title: "Trip negociation",
          contenu: "On vous informe que votre trip est à negocier",
          date: "30-03-2020",
        }, {
          title: "Trip wallet",
          contenu: "On vous informe que votre trip est accepté",
          date: "23-03-2020",
        },
        {
          title: "Trip negociation",
          contenu: "On vous informe que votre trip est à negocier",
          date: "30-03-2020",
        }, {
          title: "Trip wallet",
          contenu: "On vous informe que votre trip est accepté",
          date: "23-03-2020",
        },
        {
          title: "Trip negociation",
          contenu: "On vous informe que votre trip est à negocier",
          date: "30-03-2020",
        },
        
      ]
    };
  },
  methods: {
   

   
  },
  
 /* mounted() {
     getnotifService().then(data=>{
       this.tablenotif=data
     })
  }*/
};
</script>

<style scoped>
.titlestyle{
     color: rgb(32, 5, 5);
     text-decoration: underline;

}
.contenustyle{
  color: rgb(78, 16, 133);
     font-size: 15px;

}
.datestyle{
   margin-left: 685px;
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
ul {
  list-style-type: none;
  background:white;
  margin-right: 30px;
}

ul li {
    padding-top: 10px;
   padding-left: 8px;
  background: #f3f4f5;
  margin: 5px;
}

.eb3ed{
  width: 700px;
  display: inline-block;
  border: solid;
}

.supp{
  display: inline-block;
  border: solid;
  width : 10px
}
</style>