<template>
<div id="status_demande">
 <fieldset class="cadre_status ">
      <div class="scroller_status">
    <table class="customers_status" id="montab">


  <tr>

    <th>Title</th>
    <th>Country</th>
    <th>From</th>
    <th>To</th>
     <th>Theme</th>
     <th>Date envois</th>
       <th>Status</th>
  </tr>
   
      <tbody>
    
      <tr v-for="(item,idx) in rowData" :key="idx" >
 <!-- <td>{{ item.trip.title}}</td>
<td>{{ item.trip.country }}</td>
   <td>{{ item.trip.blogger}}</td>
   <td>{{ item.trip.from }}
       <td>{{ item.trip.to }}</td>
        <td>{{ item.trip.theme }}</td>-->
          <td>{{ item.dateenvois}}</td>
           <td>{{ item.status }}</td>
</tr>
      </tbody>
   
  

</table>

     </div>

 </fieldset>
</div>
</template>


<script>
import axios from "axios";
import UserMixin from '@/mixins/user.mixin.js';
export default {
    name:"status_demande",
        mixins: [UserMixin],
    data(){
      return{
         my_object : {
        country:'',
        program:'',
        status:'',
        wallet:''
      },
         rowData:[] ,
    
      }
    },
    methods : {
      supp(){  document.getElementById("montab").deleteRow(0);
},


    },
     mounted(){
      
        this.$store.dispatch("demandestatus",this.user).then(data => {
          this.rowData = data
          (async () => {
            this.rowData.forEach(async e => {
              await axios
                .post("http://localhost:3000/api/v2/host/allinfotrip", {
                  id: e.tripid
                })
                .then(response => {
                  e.trip = response.data.data[0];
                });
            });
          })();
        
    })
        console.log("ok",this.rowData);
       /*
       this.$store.dispatch('demandestatus').then(data => {
       this.rowData = this.$store.getters.getCurrenttrips
       this.milieu=(this.rowData.length)/2
       this.rowData1 = this.rowData.slice(0,this.milieu)
       this.rowData2 = this.rowData.slice(this.milieu,this.rows.length)
       
     })*/
 },
}
</script>

<style scoped>
.cadre_status {
  position: absolute;
  left: 350px;
  top: 150px;
  width: 980px;
  background-color: white;
  border: 0px solid rgb(145, 142, 142);
}
.scroller_status {
  height: 380px;
  overflow-y: scroll;
    scrollbar-color: rebeccapurple rgb(229, 235, 229);

  scrollbar-width: thin;

}

.customers_status {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
    right:50%; left: 50%;  /* à 50%/50% du parent référent */
/*transform: translate(-50%, -50%); /* décalage de 50% de sa propre taille */
}
 .customers_status {
  border: 1px solid #ddd;
}
 .customers_status th {
  border: 1px solid #ddd;
}

.customers_status tr:nth-child(even){background-color: rgb(179, 211, 232)}

.customers_status tr:hover {background-color: rgb(222, 224, 228);}

.customers_status th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #00008B;
  color: white;
}
.box-shadow-form {
  box-shadow: 2px 2px 6px 2px rgb(200, 209, 203);
}

.btn {
  background-color:  rgb(111, 154, 209);
  border: none;
   display:inline-block;
  margin-left: 5px;
   font-size: 13px;
    padding: 5px 8px;
   
  color: white;}

  .btn:hover {
  background-color: rgb(103, 36, 228);
}

.btn1 {
  background-color: rgb(209, 60, 97);
  border: none;
   display:inline-block;
  margin-left: 5px;
   font-size: 13px;
    padding: 5px 8px;
   
  color: white;}

  .btn1:hover {
  background-color: red;
}

</style>