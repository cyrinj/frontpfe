<template>
    <div>
            <div class="cadre_status">
            </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
    background-color: black;
    width: 300px;
    position: absolute;
    left: 300px;
    top: 50px;
}
.cadre_status {
  position: absolute;
  left: 410px;
  top: 120px;
  width: 850px;
  background-color: white;
  height: 505px;
  border: 1px solid rgb(235, 229, 229);
  overflow: auto;
  padding-top: 15px;
  scrollbar-color: rebeccapurple rgb(56, 228, 113);
  scrollbar-width: thin;
}

</style>