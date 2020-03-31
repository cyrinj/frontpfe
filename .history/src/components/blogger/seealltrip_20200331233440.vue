<template>
    <div id="seealltrip">
            <fieldset class="cadre_status ">

          <div class="columns is-multiple">
              <div class="column is-6">
                 <ul v-for="item in rowData1" :key="item.id">
                     {{item.title}}
                 </ul>
                 <div class="column is-6">
                  <ul v-for="item in rowData2" :key="item.id">
                     {{item.title}}
                 </ul>
                 </div>
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
             milieu:null,
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
                     title : "t3"
                 }
             ]
         }
     },

     mounted(){
      this.milieu = this.rowData.length / 2;
      this.rowData1 = this.rowData.slice(0, this.milieu);
      this.rowData2 = this.rowData.slice(this.milieu, this.rows.length);
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
  overflow: auto;
  padding-top: 15px;
  scrollbar-color: rebeccapurple rgb(56, 228, 113);
  scrollbar-width: thin;
}
</style>