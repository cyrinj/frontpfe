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
        <br>
        <div class="euro">
          <span>
            <i class="fas fa-euro-sign fa-lg has-text-success"></i> &nbsp;
            <strong>Euro</strong>
          </span>
          <span class="chiffre_euro">{{cheuro}}</span>
        </div>
        <div class="euro">
          <span>
            <i class="fas fa-dollar-sign fa-lg has-text-success"></i> &nbsp;
            <strong>Dollar</strong>
          </span>
          <span class="chiffre_euro">{{chdolar}}</span>
        </div>
     
  
    <select class="select">
      <option selected>Dinar</option>
      <option>Euro</option>
      <option>Dollar</option>
     <option>Lira</option>

    </select>

    <br>
    <button class="button is-info is-outlined is-rounded">Rounded</button>
  
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
           chdolar:null
        }
    },

    mounted(){
     /*   getwalletService().then(data=>{
            this.mycoin=data.montant
        })*/
        this.cheuro= this.mycoin*3
        this.chdolar=this.mycoin*2
    }
};
</script>

<style scoped>
.cadre_status {
  position: absolute;
  left: 500px;
  top: 100px;
  width: 390px;
  background-color: rgb(251, 246, 246);
  height: 540px;
  border-radius: 30px;
}

.cadre_top {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
     
  width: 390px;
  background-color: rgb(123, 107, 214);
  height: 130px;
}

.text_top {
  margin-top: 5px;
}

.w1 {
  margin-left: 130px;
  color: white;
  font-size: 28px;
}
.w2 {
  color: rgb(241, 235, 235);
  margin-left: 161px;
}

.w3 {
  margin-left: 110px;
  color: white;
  font-size: 28px;
}

.after_top {
  width:  390px;
  background-color: rgb(251, 246, 246);
  height: 25px;
  margin-top: 20px;
  padding-left: 10px;
  margin-bottom: 10px;
}

.euro {
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 5px;
  width: 350px;
  background-color: white;
  height: 40px;
  margin-top: 6px;
  padding-left: 30px;
  font-size: 20px;
  padding-top: 5px;
  padding-right: 30px;
}

.chiffre_euro {
  float: right;
}

.select{
    margin-top: 10px;
    margin-left: 20px;
    width: 92%;
    border: none;
    margin-bottom: 70px;
}


.button{
    width: 60%;
    margin-left: 100px;
}
.amount{
    margin-left: 245px;
}
</style>