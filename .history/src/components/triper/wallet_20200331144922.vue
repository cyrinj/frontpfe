<template>
    <div>
            <div class="cadre_status">
                 <div class="cadre_top">
                <div class="text_top">
                    <p>My wallet</p>
                    <p>Total value</p>
                    <p>15.000.00</p>
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
  height: 150px;
  border: 1px solid rgb(235, 229, 229);
}

.text_top{
    color : white
}

</style>