<template>
  <div id="seealltrips">
    <fieldset class="cadre_status">
        <div class="columns is-multiple">
        <div class="column is-6 ">
          <div class="centreee">
          <ul v-for="item in rowData1" :key="item.id">
            <button class="container" @click="showme(item)">
              <img :src="item.image" />
        
              
              <div class="top-left">{{item.title}} <br>{{item.theme}}<br> {{item.from}}-{{item.to}}</div>
            </button>
          </ul>
          </div>
        </div>
                <div class="column is-6">
          <ul v-for="item in rowData2" :key="item.id">
            <button class="container" @click="showme(item)">
              <img :src="item.image" />

                           <div class="top-left">{{item.title}} <br>{{item.theme}}<br> {{item.from}}-{{item.to}}</div>

            </button>
          </ul>
        </div>

        </div>
    </fieldset>
  </div>
</template>

<script>

export default {
  name: "seealltrips",
  data() {
    return {
      rowData1: [],
      rowData2: [],
     

      milieu: null,
      milieu2: null,
      rowData: [
        {
          id:"1",
          continent : "Europe",
          country:"France",
          image:
          "http://localhost:3000/uploads/5e7392d2b331251c1b872619/trip.jpg",
          title: "Know more about life in Bali ",
          from: "15 Juin",
          to: "20 Juin",
          theme: "A",
          pourcentage:null,
            program: [
        "On this day, we will meet at our hotel in Moshi which is situated in a quiet location in the foothills of Kilimanjaro. There, we will have our trip briefing and welcoming ceremony. Night at the Hotel. ",
        "An early start of the first day will allow us to take some time for any adjustments to our packing before leaving for the park gate. From the gate (1800m) the path climbs with a gradual gradient and a never-tiring route in a forest full of flowers. A last ramp leads to the lovely rocky rise and metal constructions of the Machame Hut (3000m).(B,L,D) Climb 1200 meters walking time: 4 to 5 hours ",
        "On this day, we will enjoy our path rising with a charming route along a lava ridge that offers splendid views of the Kibo and Meru peaks before crossing a number of clearings surrounded by very high, tree-like heathers. A stony stretch with the odd zigzag leads to the edge of the remarkable lava plateau of Shira. Along those paths, we will move to our camp (3840 meters) near a large cave. (B,L,D) Climb 840 meters, walking time: 4 to 5 hours. ",
        "This adventure that used to be quite tiring at first, explains why hikers who started from Machame suffer from the altitude less on the final stage to the Kibo summit. Also, Zigzagging up and down on any mountain is the best way to get acclimatized. High up, we will encounter the walls of Western Breach. Once at the ridge at the base of the Lava Tower (4600m) a rather steep leads to the Barranco Hut (3950m), a splendid view of the Breach Wall and the Heim and Decken glaciers. (B,L,D) Climb 760 meters, descend 650 meters, walking time: 7 to 8 hours. ",
        "A long but spectacular day which will give us a changing vista of the summit. We will start by crossing the valley and scrambling up the Barranco wall by a series of easy rocky ledges. Once at the top, we will amaze our eyes by the wonderful views of the Heim glacier. Then, we will reach Karanga Valley (4000m) followed by a short climb to the Karanga campsite. The final stretch of the approach will follow a rocky wind-beaten ridge close under the south flank of Kibo that crosses a large desolate bowl before climbing up onto the obvious ridge to the Barafu Hut (4500 meters) and our camp. (B,L,D) Climb 850 meters; descend 200m, walking time: 7 to 8 hours."
    ],
        },
        {id:"2",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/trip.jpg",

          title: "Discover Kilimanjaro with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Aziz",
          price: "1500",
          theme: "Adventure",
        },
        {
          id:"3",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/trip.jpg",

          title: "Discover Kilimanjaro with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Aziz",
          price: "1500",
          theme: "Adventure",
        },
        {
          id:"4",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/trip.jpg",

          title: "Discover Kilimanjaro with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Aziz",
          price: "1500",
          theme: "Adventure",
        },
        {
          id:"5",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/trip.jpg",

          title: "Discover Kilimanjaro with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Aziz",
          price: "1500",
          theme: "Adventure"
        },
        {
          id:"6",
          image:
            "http://localhost:3000/uploads/5e7392d2b331251c1b872619/trip.jpg",

          title: "Discover Kilimanjaro with Rahalista ",
          from: "15 Juin",
          to: "20 Juin",
          blogger: "Aziz",
          price: "1500",
          theme: "Adventure"
        }
      ]
    };
  },

  mounted() {
   //  this.$store.dispatch("tripsaccepted").then(data => {

    //  this.rowData = data;
     /* this.milieu = this.rowData.length / 2;
      this.rowData1 = this.rowData.slice(0, this.milieu);
      this.rowData2 = this.rowData.slice(this.milieu, this.rows.length);*/
  //  });
    this.milieu = this.rowData.length / 2;
    this.rowData1 = this.rowData.slice(0, this.milieu);
    this.rowData2 = this.rowData.slice(this.milieu,  this.rowData.length);
  
  
  },

  methods:{
    showme(item) {
      //console.log("thisseeall",item)
      this.$router.push({
        name: "demande_blogger",
        params: { objtrip : item}
      });
        },

  }
};
</script>

<style scoped>
.centreee{
 margin-left: auto;
  margin-right: auto;
}
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