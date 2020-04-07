<template>
  <div id="seealltrip">
    <fieldset class="cadre_status">
      <div class="columns is-multiple">
        <div class="column is-4">
          <ul v-for="item in rowData1" :key="item.id">
            <div class="infos">
               <div >    <i class="fas fa-heart has-text-danger"></i>      {{item.title}}</div>
           
             <div >  <i class="fas fa-user-shield   has-text-link"></i> {{item.blogger}}</div>
            <div >    <i class="fas fa-map-marker-alt has-text-warning"></i>  {{item.from}}-{{item.to}}</div>
          
        
           </div>
            <button class="container" @click="showme(item)">
             <img :src="item.pictures.cover" />
            </button>
          </ul>
    </div>
      <div class="column is-4">
          <ul v-for="item in rowData2" :key="item.id">
              <div class="infos">
               <div >    <i class="fas fa-heart has-text-danger"></i>      {{item.title}}</div>
           
              <div >  <i class="fas fa-user-shield   has-text-link"></i> {{item.blogger}}</div>
            <div >    <i class="fas fa-map-marker-alt has-text-warning"></i>  {{item.from}}-{{item.to}}</div>
          
        
           </div>
            <button class="container" @click="showme(item)">
               <img :src="item.pictures.cover" />

         <!--     <div class="bottom-left">{{item.from}}-{{item.to}}</div>
              <div class="top-left">{{item.title}}</div>
              <div class="bottom-right">{{item.blogger}}</div>-->
            </button>
          </ul>
        </div>
        <div class="column is-4">
          <ul v-for="item in rowData3" :key="item.id">
             <div class="infos">
               <div >    <i class="fas fa-heart has-text-danger"></i>      {{item.title}}</div>
           
             <div >  <i class="fas fa-user-shield   has-text-link"></i> {{item.blogger}}</div>
            <div >    <i class="fas fa-map-marker-alt has-text-warning"></i>  {{item.from}}-{{item.to}}</div>
          
        
           </div>
            <button class="container" @click="showme(item)">
              <img :src="item.pictures.cover" />

             
            </button>
          </ul>
        </div>
      </div>

     
    </fieldset>
  </div>
</template>

<script>

export default {
  name: "seealltrip",
  data() {
    return {
      rowData1: [],
      rowData2: [],
      rowData3: [],

      milieu1: null,
      milieu2: null,
      rowData: [
     
      ]
    };
  },

  mounted() {
     this.$store.dispatch("tripsproposés").then(data => {

      this.rowData = data;
     
     this.milieu1 = this.rowData.length / 3;
    this.milieu2 = (this.rowData.length / 3) * 2;
    this.rowData1 = this.rowData.slice(0, this.milieu1);
    this.rowData2 = this.rowData.slice(this.milieu1, this.milieu2);
    this.rowData3 = this.rowData.slice(this.milieu2, this.rowData.length);
    });
   
  
  },

  methods:{
    showme(item) {
      //console.log("thisseeall",item)
      this.$router.push({
        name: "demande_agency",
        params: { objtrip : item}
      });
        },

  }
};
</script>

<style scoped>
.infos{
  margin-left: 10px;
   font-size: 14px;
}
.cadre_status {
  position: absolute;
  left: 365px;
  top: 100px;
  width: 950px;
  background-color: white;
  height: 505px;
  padding-right: 32px;
  padding-right: 32px;
  padding-top: 20px;
  overflow-y: scroll;
  scrollbar-color: rgb(208, 207, 228) rgb(226, 233, 226);
  scrollbar-width: thin;
     box-shadow: 4px 2px 10px rgb(216, 223, 216);
 border-top-left-radius: 20px;
   border-bottom-left-radius: 20px;
}
.container {
  position: relative;
  text-align: center;
  color: white;
  background-color: white;
  border: none;
   cursor:pointer;
       display: block;
  margin-left: auto;
  margin-right: auto;
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
    background-color: rgb(255, 251, 251);
  color: rgb(39, 35, 35);
  border-radius: 5px;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
  background-color: rgb(216, 209, 209);
  color: white;
    border-radius: 5px;

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
    background-color: rgb(89, 66, 151);
  color: white;
    border-radius: 5px;

}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bu{
  width: 300px;
  height: 300px;
}
</style>