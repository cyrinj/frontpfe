<template>
    <div id="seealltrip">
            <fieldset class="cadre_status ">

          <div class="columns is-multiple">
              <div class="column is-4">
                 <ul v-for="item in rowData1" :key="item.id">
                                         <img src="@/assets/ok.jpg">

                 </ul>
              </div>
                 <div class="column is-4">
                  <ul v-for="item in rowData2" :key="item.id">
                                                              <img src="@/assets/ok.jpg">

                 </ul>
                 </div>
             <div class="column is-4">
                  <ul v-for="item in rowData3" :key="item.id">
                         <img src="@/assets/ok.jpg">

                 </ul>
                 </div>

        </div>
            </fieldset>
    </div>
</template>

<script>
export default {
    name:"seealltrip",
     data(){
         return{
             rowData1:[],
             rowData2:[],
              rowData3:[],

             milieu1:null,
             milieu2:null,
             rowData : [
                 {
                     title : "t1"
                 },
                 {
                     title : "t2"
                 },
                 {
                     title : "t3"
                 },
                  {
                     title : "t4"
                 },
                  {
                     title : "t5"
                 },
                  {
                     title : "t6"
                 }
             ]
         }
     },

     mounted(){
     this.milieu1 = this.rowData.length / 3;
      this.milieu2 = (this.rowData.length / 3)*2
      this.rowData1 = this.rowData.slice(0, this.milieu1);
      this.rowData2 = this.rowData.slice(this.milieu1, this.milieu2);
      this.rowData3 = this.rowData.slice(this.milieu2, this.rowData.length);
      console.log("d1",this.rowData1)
            console.log("d2",this.rowData2)
                  console.log("d3",this.rowData3)

     }
}
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
 
}
</style>