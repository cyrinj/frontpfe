<template>
<div id="status_demande">
 <fieldset class="cadre_status ">
      <div class="scroller_status">
    <table class="customers_status" id="montab">


  <tr>

    <th>Title</th>
    <th>Country</th>
    <th>Blogger</th>
      <th>From</th>
    <th>To</th>
     <th>Theme</th>
     <th>Date envois</th>
       <th>Status</th>
  </tr>
   
      <tbody>
    
      <tr v-for="(item,idx) in rowData" :key="idx" >
  <td>{{ item.trip.title}}</td>
  <td>{{ item.trip.country }}</td>
   <td>{{ item.trip.blogger}}</td>
   <td>{{ item.trip.from }}
       <td>{{ item.trip.to }}</td>
        <td>{{ item.trip.theme }}</td>
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
export default {
    name:"status_demande",
    data(){
      return{
         my_object : {
        country:'',
        program:'',
        status:'',
        wallet:''
      },
         rowData:[{trip:  {
          id:"1",
          country:"France",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/france.jpg",
          title: "Discover France with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Rahalista",
          price: "1500",
          theme: "Adventure",
            program: [
        "On this day, we will meet at our hotel in Moshi which is situated in a quiet location in the foothills of Kilimanjaro. There, we will have our trip briefing and welcoming ceremony. Night at the Hotel. ",
        "An early start of the first day will allow us to take some time for any adjustments to our packing before leaving for the park gate. From the gate (1800m) the path climbs with a gradual gradient and a never-tiring route in a forest full of flowers. A last ramp leads to the lovely rocky rise and metal constructions of the Machame Hut (3000m).(B,L,D) Climb 1200 meters walking time: 4 to 5 hours ",
        "On this day, we will enjoy our path rising with a charming route along a lava ridge that offers splendid views of the Kibo and Meru peaks before crossing a number of clearings surrounded by very high, tree-like heathers. A stony stretch with the odd zigzag leads to the edge of the remarkable lava plateau of Shira. Along those paths, we will move to our camp (3840 meters) near a large cave. (B,L,D) Climb 840 meters, walking time: 4 to 5 hours. ",
        "This adventure that used to be quite tiring at first, explains why hikers who started from Machame suffer from the altitude less on the final stage to the Kibo summit. Also, Zigzagging up and down on any mountain is the best way to get acclimatized. High up, we will encounter the walls of Western Breach. Once at the ridge at the base of the Lava Tower (4600m) a rather steep leads to the Barranco Hut (3950m), a splendid view of the Breach Wall and the Heim and Decken glaciers. (B,L,D) Climb 760 meters, descend 650 meters, walking time: 7 to 8 hours. ",
        "A long but spectacular day which will give us a changing vista of the summit. We will start by crossing the valley and scrambling up the Barranco wall by a series of easy rocky ledges. Once at the top, we will amaze our eyes by the wonderful views of the Heim glacier. Then, we will reach Karanga Valley (4000m) followed by a short climb to the Karanga campsite. The final stretch of the approach will follow a rocky wind-beaten ridge close under the south flank of Kibo that crosses a large desolate bowl before climbing up onto the obvious ridge to the Barafu Hut (4500 meters) and our camp. (B,L,D) Climb 850 meters; descend 200m, walking time: 7 to 8 hours."
    ],
         }, dateenvois:"10 Juin", status : "accepted"}] ,
    
      }
    },
    methods : {
      supp(){  document.getElementById("montab").deleteRow(0);
},
afterdelete(){
         return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/v2/tripper/alltripsbyuser", this.user)
          .then(data => {
           // console.log(data.data.data)
            this.rowData = data.data.data
             this.milieu=(this.rowData.length)/2
  //  console.log(this.milieu)
       this.rowData1 = this.rowData.slice(0,this.milieu)
       this.rowData2 = this.rowData.slice(this.milieu,this.rows.length)
          //  console.log(this.rowData1.result)
                          console.log(this.rowData)

            // console.log(this.rows)
            resolve(data.data.data);
          })
          .catch(error => {});
      });
   // this.rowData = this.rows
          /*   for(var i= 0; i < this.rows.length ; i++)
{
     this.my_object.country=this.rows[i].country;
     this.my_object.program=this.rows[i].program;
     this.my_object.status=this.rows[i].status;
     this.my_object.wallet=this.rows[i].wallet;
     this.rowData.push(this.my_object)

}*/
},


    },
   /*  mounted(){
       this.$store.dispatch('demandestatus').then(data => {
       this.rowData = this.$store.getters.getCurrenttrips
       this.milieu=(this.rowData.length)/2
       this.rowData1 = this.rowData.slice(0,this.milieu)
       this.rowData2 = this.rowData.slice(this.milieu,this.rows.length)
       
     })
 },*/
}
</script>

<style scoped>
.cadre_status {
  position: absolute;
  left: 410px;
  top: 150px;
  width: 780px;
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
   text-decoration: underline;
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