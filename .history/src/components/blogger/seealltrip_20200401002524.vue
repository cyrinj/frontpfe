<template>
    <div id="seealltrip">
            <fieldset class="cadre_status ">

          <div class="columns is-multiple">
              <div class="column is-4">
                 <ul v-for="item in rowData1" :key="item.id">
                     <div class="container">
                 <img src="@/assets/ok.jpg">
                  <div class="bottom-left">{{item.title}}<br>{{item.from}}-{{item.to}}</div>
  <div class="top-left">{{item.price}}</div>
  <div class="top-right">{{item.bloggername}}</div>
                     </div>
                 </ul>
              </div>
                 <div class="column is-4">
                  <ul v-for="item in rowData2" :key="item.id">
                          <div class="bottom-left">{{item.title}}<br>{{item.from}}-{{item.to}}</div>
  <div class="top-left">{{item.price}}</div>
  <div class="top-right">{{item.bloggername}}</div>
                 </ul>
                 </div>
             <div class="column is-4">
                  <ul v-for="item in rowData3" :key="item.id">
    <div class="bottom-left">{{item.title}}<br>{{item.from}}-{{item.to}}</div>
  <div class="top-left">{{item.price}}</div>
  <div class="top-right">{{item.bloggername}}</div>
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
  left: 350px;
  top: 120px;
  width: 950px;
  background-color: white;
  height: 505px;
  border: 1px solid rgb(235, 229, 229);
 padding-right: 32px;
 padding-right: 32px;
 padding-top: 20px;
}
.container {
  position: relative;
  text-align: center;
  color: white;
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>