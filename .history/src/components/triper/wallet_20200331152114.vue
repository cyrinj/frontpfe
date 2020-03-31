<template>
    <div>
            <div class="cadre_status">
                 <div class="cadre_top">
                <div class="text_top">
                  <strong><p class="w1">My wallet</p></strong>  <br>
                    <p class="w2">Total value</p>
               <strong ><p class="w3">15.000.00 WTP</p></strong>     
                </div>
                <div class="after_top">
                <span> Currency</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span> Amount</span>
                </div>
                <div class="euro">
                    <br>
                  <span > <i class="fas fa-euro-sign fa-lg has-text-success"></i>
</span>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.cadre_status {
  position: absolute;
  left: 500px;
  top: 120px;
  width: 500px;
  background-color: rgb(251, 246, 246);
  height: 505px;
  border: 1px solid rgb(235, 229, 229);
}

.cadre_top {
  
  width: 500px;
  background-color: rgb(123, 107, 214);
  height: 165px;
  border: 1px solid rgb(235, 229, 229);
}

.text_top{
    margin-top: 5px;
    color : white
   
}

.w1{
    margin-left: 170px;
   color: white;
   font-size: 30px;
}
.w2{
    color: white;
    margin-left: 215px;
}

.w3{
    margin-left: 135px;
   color: white;
   font-size: 30px;
}

.after_top {
  
  width: 495px;
  background-color: rgb(107, 214, 169);
  height: 25px;
  border: 1px solid rgb(235, 229, 229);
  margin-top: 10px;
  padding-left: 10px;
}

.euro {
  
  width: 495px;
  background-color: rgb(63, 17, 192);
  height: 80px;
  border: 1px solid rgb(235, 229, 229);
  margin-top: 8px;
  padding-left: 15px;
}



</style>