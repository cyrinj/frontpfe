<template>
  <div>
    <div class="cadre_status">
      <div class="cadre_top">
        <div class="text_top">
          <strong>
            <p class="w1">My wallet</p>
          </strong>
          <p class="w2">Total value</p>
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
            <i class="fas fa-lira-sign fa-lg has-text-info"></i> &nbsp;
            <strong>Dinar</strong>
          </span>
          <span class="chiffre_euro">{{mycoin}}</span>
        </div>
        <div class="euro">
          <span>
            <i class="fas fa-euro-sign fa-lg has-text-info"></i> &nbsp;
            <strong>Euro</strong>
          </span>
          <span class="chiffre_euro">{{cheuro}}</span>
        </div>
        <div class="euro">
          <span>
            <i class="fas fa-dollar-sign fa-lg has-text-info"></i> &nbsp;
            <strong>Dollar</strong>
          </span>
          <span class="chiffre_euro">{{chdolar}}</span>
        </div>
     
  
    <select class="select" v-model="currency">
      <option selected>Dinar</option>
      <option>Euro</option>
      <option>Dollar</option>
     <option>Lira</option>

    </select>

    <br>
    <button @click="conver()" class="button is-info is-light is-outlined is-rounded">Convert</button>
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
  background-color: rgb(88, 65, 223);
  height: 125px;
}

.text_top {
  margin-top: 5px;
}

.w1 {
  margin-left: 152px;
  color: rgb(255, 254, 254);
  font-size: 20px;
}
.w2 {
  color: white;
  margin-left: 161px;
  margin-top: 7px;
}

.w3 {
  margin-left: 115px;
  color: rgb(255, 254, 254);
  font-size: 28px;
}

.after_top {
  width:  390px;
  background-color: rgb(242, 242, 248);
  height: 25px;
  margin-top: 20px;
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
    margin-bottom: 70px;
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
    height: 15px;
    background-color: rgb(238, 237, 245);
    margin-top:15px ;
     border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
</style>