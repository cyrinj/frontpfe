<template>
  <div id="seealltrip">
    <fieldset class="cadre_status">
      <div class="columns is-multiple">
        <div class="column is-4">
          <ul v-for="item in rowData1" :key="item.id">
            <button class="container" @click="showme(item)">
              <img :src="item.image" />
        
              <div class="centered">{{item.from}}-{{item.to}}</div>
              <div class="top-left">{{item.title}}</div>
              <div class="bottom-right">{{item.blogger}}</div>
            </button>
          </ul>
          
      
              
              
         
        </div>
        <div class="column is-4">
          <ul v-for="item in rowData2" :key="item.id">
            <button class="container" @click="showme(item)">
              <img :src="item.image" />

              <div class="bottom-left">{{item.from}}-{{item.to}}</div>
              <div class="top-left">{{item.title}}</div>
              <div class="bottom-right">{{item.blogger}}</div>
            </button>
          </ul>
        </div>
        <div class="column is-4">
          <ul v-for="item in rowData3" :key="item.id">
            <button class="container" @click="showme(item)">
              <img :src="item.image" />

              <div class="bottom-left">{{item.from}}-{{item.to}}</div>
              <div class="top-left">{{item.title}}</div>
              <div class="bottom-right">{{item.blogger}}</div>
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
        {
          id:"1",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/france.jpg",
          title: "Discover Kilimanjaro with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Aziz",
          price: "1500"
        },
        {id:"2",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/espagne.jpg",

          title: "Discover Kilimanjaro with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Aziz",
          price: "1500"
        },
        {
          id:"3",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/indonisia.jpg",

          title: "Discover Kilimanjaro with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Aziz",
          price: "1500"
        },
        {
          id:"4",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/peru.jpg",

          title: "Discover Kilimanjaro with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Aziz",
          price: "1500"
        },
        {
          id:"5",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/bresil.jpg",

          title: "Discover Kilimanjaro with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Aziz",
          price: "1500"
        },
        {
          id:"6",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/marooc.jpg",

          title: "Discover Kilimanjaro with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Aziz",
          price: "1500"
        }
      ]
    };
  },

  mounted() {
    this.milieu1 = this.rowData.length / 3;
    this.milieu2 = (this.rowData.length / 3) * 2;
    this.rowData1 = this.rowData.slice(0, this.milieu1);
    this.rowData2 = this.rowData.slice(this.milieu1, this.milieu2);
    this.rowData3 = this.rowData.slice(this.milieu2, this.rowData.length);
  
  },

  methods:{
    showme(item) {
      //console.log("thisseeall",item)
      this.$router.push({
        name: "demande_agency",
        params: { item : item}
      });
    },

  }
};
</script>

<style scoped>
.cadre_status {
  position: absolute;
  left: 365px;
  top: 100px;
  width: 950px;
  background-color: white;
  height: 505px;
  border: 1px solid rgb(235, 229, 229);
  padding-right: 32px;
  padding-right: 32px;
  padding-top: 20px;
  overflow-y: scroll;
  scrollbar-color: rgb(208, 207, 228) rgb(226, 233, 226);
  scrollbar-width: thin;
}
.container {
  position: relative;
  text-align: center;
  color: white;
  background-color: white;
  border: none;
   cursor:pointer;
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

.bu{
  width: 300px;
  height: 300px;
}
</style>