<template>
<div id="grid">
 <fieldset class="cadre_status ">
      <div class="scroller_status">
    <table class="customers_status" id="montab">


  <tr>

    <th>Title</th>
    <th>Country</th>
    <th>Theme</th>
    <th>Status</th>
  </tr>
   
      <tbody>
    
      <tr v-for="(item,idx) in rowData" :key="idx" >
  <td>{{ item.title}}</td>
  <td>{{ item.country }}</td>
   <td>{{ item.theme }}</td>
   <td>{{ item.status }} <button class="btn" @click="update(item)"><i class="fa fa-calendar-check"></i></button> <button class="btn1" @click="supprimer(item)"><i class="fa fa-trash"></i></button> </td>

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
    name:"grid",
    data(){
      return{
         my_object : {
        country:'',
        program:'',
        status:'',
        wallet:''
      },
         rowData:[] ,
       rows: [
      {country: "Africa", program: "xxxxxx", status: 'accepted', wallet: 'photography' },
      { country: "South Amarica", program: "yyyyyy", status: 'refused', wallet: 'fitness' },
      { country: "Africa", program: "zzzzzz", status: '//', wallet: 'adventure'},
     { country: "Europe", program: "zzzzzz", status: '//', wallet: 'sport'},
    { country: "Africa", program: "zzzzzz", status: 'accepted', wallet: 'fitnes'},
         { country: "Asia", program: "zzzzzz", status: '//', wallet: 'sport'},
     { country: "Asia", program: "zzzzzz", status: '//', wallet: 'yoga'},
  
 
    ]
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
update(item){
  
   this.$router.push({
                name: "updatetrip",
                params: { objtrip: item }
              });
},
supprimer(item){
 
 var r = confirm("Do you want to delete the trip");
 if(r==true){
   
          this.$store.dispatch('tripdelete',item).then(data => {
           // console.log("aziz")
     })     
      ;
      }
}
    },
     mounted(){
       this.$store.dispatch('tripstatus').then(data => {
       this.rowData = this.$store.getters.getCurrenttrips
       this.milieu=(this.rowData.length)/2
       this.rowData1 = this.rowData.slice(0,this.milieu)
       this.rowData2 = this.rowData.slice(this.milieu,this.rows.length)
       
     })
 },
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
    scrollbar-color: #9e7cc0 rgb(229, 235, 229);

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
  background-color: #9e7cc0;
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