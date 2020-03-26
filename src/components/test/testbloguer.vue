<template>
<div id="testbloguer">
  <fieldset  class="cadre_status box-shadow-form">
   <div class="left">
      left div
      <button id="left-button" @click="swipeLeft">
        swipe left
      </button>
    </div>
     <div class="center" id="content" ref="content">
      <textarea
                  class=" internal "
                  placeholder="Please describe the trip program you suggest"
                ></textarea>
                 <textarea
                  class=" internal"
                  placeholder="Please describe the trip program you suggest"
                ></textarea>
                 <textarea
                  class=" internal"
                  placeholder="Please describe the trip program you suggest"
                ></textarea>
                 <textarea
                  class=" internal "
                  placeholder="Please describe the trip program you suggest"
                ></textarea>
     </div>
    <div class="right">
    <button id="right-button" @click="swipeRight">
        swipe right
      </button>
      right div
    </div>
  </fieldset>
</div>
  <!--  <div class="content">
 <fieldset v-show="AFFICHE" class="cadre_status box-shadow-form">
   
     <div class="scroller_status">

      <div class="columns is-multiple">
        
                 <div class="column is-6">
                    <ul v-for="item in rowData1" :key="item.id" >
                     <img src="../../assets/okk.png">
                    <input v-model=" item.country">
                    <button v-on:click="recuperer(item)">ok</button>     
                    </ul>
      </div> 
        <div class="column is-6">
                          <button @click="retour()">retour</button>

                    <ul v-for="item in rowData2" :key="item.id" >
                     <img src="../../assets/okk.png">
                    <input v-model=" item.country">
                    <button v-on:click="recuperer(item)">ok</button>     
                    </ul>
      </div> 
          </div>
        
     
     </div> 
   
 </fieldset> 
   <information v-show="affiche" :pass="j" :pass1="val"></information> 
          <router-view></router-view>

</div>
</div>-->
</template>


<script>
import information from '@/components/test/information'

export default {
    name:"testbloguer",
     components:{
    'information':information,
  },
  methods:{
        scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      // Condition to check if scrolling is required
      if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) 
      {
        // Get the start timestamp
        const startTime =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime();
        
        function scroll(timestamp) {
          //Calculate the timeelapsed
          const timeElapsed = timestamp - startTime;
          //Calculate progress 
          const progress = Math.min(timeElapsed / duration, 1);
          //Set the scrolleft
          element.scrollLeft = scrollPos + scrollPixels * progress;
          //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
          if (timeElapsed < duration) {
            //Request for animation
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }
        //Call requestAnimationFrame on scroll function first time
        window.requestAnimationFrame(scroll);
      }
    },
    swipeLeft() {
      const content = this.$refs.content;
      this.scrollTo(content, -300, 800);
    },
    swipeRight() {
      const content = this.$refs.content;
      this.scrollTo(content, 300, 800);
    },
    retour(){

        this.affiche=false
       // this.sh=false
        console.log(this.affiche)},
    recuperer(item){
  //   var inputVal = document.getElementById("i").value;
  //   this.j=inputVal
     this.j=item;
     this.affiche=true
     this.val=true
  
  //   console.log("dfsd",this.sh)
    // this.AFFICHE=false
      // this.$destroy();
              // remove the element from the DOM
          //    this.$el.parentNode.removeChild(this.$el);
   //  console.log(this.j.country)
    }
  },
    data(){
      return{
        affiche:false,
        AFFICHE:true,
        j:'',
        val:'',
        item:{},
         my_object : {
        country:'',
        program:'',
        status:'',
        wallet:'',
        milieu:5,
        
      },
      o:"aaa",
         rowData1:[] ,
         rowData2:[],
       rows: [
      {id:"1",country: "tunisia", program:"455456", status: 'accepted', wallet: '20' },
      {id:"2", country: "marooc", program: "yyyyyy", status: 'refused', wallet: '//' },
      {id:"3", country: "chine", program: "zzzzzz", status: '//', wallet: '//'},
     {id:"4", country: "senegal", program: "zzzzzz", status: '//', wallet: '//'},
    {id:"5", country: "algeria", program: "zzzzzz", status: 'accepted', wallet: '//'},
         {id:"6", country: "usa", program: "zzzzzz", status: '//', wallet: '//'},
     {id:"7", country: "phelepine", program: "zzzzzz", status: '//', wallet: '//'},
       {id:"8", country: "mali", program: "zzzzzz", status: '//', wallet: '//'},

 
    ]
      }
    },
     mounted(){
 
    this.milieu=(this.rows.length)/2
  //  console.log(this.milieu)
       this.rowData1 = this.rows.slice(0,this.milieu)
       this.rowData2 = this.rows.slice(this.milieu,this.rows.length)
 },
}

</script>

<style scoped>

.cadre_status {
  position: absolute;
  left: 340px;
  top: 100px;
  width: 870px;
  background-color: white;
  height: 450px;
  padding: 5px 50px 30px 50px;
  border: 0px solid rgb(145, 142, 142);
}
.scroller_status {
  height: 440px;
  overflow-x: hidden;
    scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;

}

.left{
 float: left; 
 width: 30%;
 height: 200px;
 border: 1px solid black;
}

.internal{
 width: 99%;
 height: 100%;
 border: 1px solid black;
 display: inline-block;
}

.center{
 float: left; 
 width: 38.9%;
 height: 200px;
 border: 1px solid black;
 margin: 1px;
 overflow: hidden;
 white-space: nowrap;
}

.right{
 float: right; 
 width: 30%;
 height: 200px;
 border: 1px solid black;
}

</style>



