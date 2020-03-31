<template>
    <div class="seealltrip">
          <div class="columns is-multiple">
              <div class="column is-6">
                 <ul v-for="item in rowData1" :key="item.id">
                     {{item.title}}
                 </ul>
                  <ul v-for="item in rowData2" :key="item.id">
                     {{item.title}}
                 </ul>
              </div>

        </div>

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

</style>