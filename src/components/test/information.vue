<template>
     <fieldset  class="cadre_info">
          {{pass.country}}
         {{pass.program}}

     </fieldset>
</template>

<script>
export default {
    props:['pass','pass1'],
    data(){
        return{
          sh:''
        }
    },
     mounted() {
        // this.sh=pass1
        // console.log(sh)
     },
     methods:{
    retour(){

        this.affiche=false
       // this.sh=false
        console.log(this.affiche)
  //   var inputVal = document.getElementById("i").value;
  //   this.j=inputVal
  
    // this.AFFICHE=false
     //  this.$destroy();
              // remove the element from the DOM
            // this.$el.parentNode.removeChild(this.$el);
   //  console.log(this.j.country)
    }
  },
}
</script>
<style scoped>
.cadre_info {
 position: absolute;
  left: 340px;
  top: 100px;
  width: 400px;
  background-color: white;
  height: 450px;
  padding: 5px 50px 30px 50px;
  border: 0px solid rgb(145, 142, 142);
}
</style>