<template>
  <div>
    <div class="cadre_status">
      <div class="cadre_top">
        <div class="text_top">
          <strong>
            <p class="w1">Wantotrip wallet</p>
          </strong>
         
          <strong>
            <p class="w3">{{mycoin}} WTP</p>
          </strong>
        </div>
        <div class="after_top">
          <span>Currency</span>
          <span class="amount">Amount</span>
        </div>
          <div class="euro">
          <span>
            <i class="fas fa-lira-sign fa-lg has-text-link"></i> &nbsp;
            <strong>Dinar</strong>
          </span>
          <span class="chiffre_euro">{{mycoin}}</span>
        </div>
        <div class="euro">
          <span>
            <i class="fas fa-euro-sign fa-lg has-text-link"></i> &nbsp;
            <strong>Euro</strong>
          </span>
          <span class="chiffre_euro">{{cheuro}}</span>
        </div>
        <div class="euro">
          <span>
            <i class="fas fa-dollar-sign fa-lg has-text-link"></i> &nbsp;
            <strong>Dollar</strong>
          </span>
          <span class="chiffre_euro">{{chdolar}}</span>
        </div>

        
     
  
    <select class="select" v-model="currency">
      <option selected>Dinar Tunisien</option>
      <option>Euro</option>
      <option>Dollar</option>
     <option>Lira</option>
  <option>	BDT Taka</option>
    <option>BSD Dollar bahaméen</option> 
     <option>AMD Dram arménien</option>
      <option>AFN Nouvel afghani afghan</option>
      <option>ALL Lek albanais</option>	
    </select>

     <div class="euro">
          <span>
            <i class="fas fa-dollar-sign fa-lg has-text-link"></i> &nbsp;
            <strong>Dollar</strong>
          </span>
          <span class="chiffre_euro">{{chdolar}}</span>
        </div>

    <br>
    <button @click="conver()" class="button cv  is-rounded">Convert</button>
       <div class="cadre_fin">
       </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { getwalletService} from "@/api/tripper.service.js";

export default {
    data(){
        return {
           mycoin:150000,
           cheuro:null,
           chdolar:null,
           currency:'Dinar'
        }
    },

    mounted(){
     /*   getwalletService().then(data=>{
            this.mycoin=data.montant
        })*/
        this.cheuro= this.mycoin*3
        this.chdolar=this.mycoin*2
    },
    methods:{
      /*  convert(){
                this.$router.push({
                name: "payement",
                param : this.currency
              });
        }*/
    }
};
</script>

<style scoped>
.cadre_status {
  position: absolute;
  left: 620px;
  top: 115px;
  width: 390px;
  background-color: rgb(242, 242, 248);
  height: 500px;
  border-radius: 30px;
}

.cadre_top {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
 width: 390px;
  background-color: rgb(136, 31, 162);
  height: 90px;

}

.text_top {
  margin-top: 5px;
}

.w1 {
  margin-left: 100px;
  color: rgb(245, 238, 238);
  font-size: 25px;
}
.w2 {
  color: white;
  margin-left: 161px;
  margin-top: 7px;
}

.w3 {
  margin-left: 120px;
  color: rgb(255, 254, 254);
  font-size: 25px;
}

.after_top {
  width:  390px;
  background-color: rgb(242, 242, 248);
  height: 25px;
  margin-top: 30px;
  margin-bottom: 15px;
  padding-left: 10px;
  margin-bottom: 10px;
}

.euro {
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 5px;
  width: 350px;
  background-color: white;
  height: 37px;
  margin-top: 6px;
  padding-left: 30px;
  font-size: 20px;
  padding-top: 2px;
  padding-right: 30px;
  margin-bottom: 10px;
}

.chiffre_euro {
  float: right;
}

.select{
    
    margin-left: 20px;
    width: 90%;
    border: none;
    margin-bottom: 10px;
    height: 37px;
      border-radius: 5px;

}


.button{
    width: 60%;
    margin-left: 80px;
}

.amount{
    margin-left: 245px;
}

.cadre_fin{
    height: 20px;
    background-color: rgb(235, 233, 245);
    margin-top:18px ;
     border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.cv{
  background-color: rgb(136, 31, 162);
  color: white;
  margin-top: 10px;
}
</style>