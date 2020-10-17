<template>
  <div class="station-container">
    <div v-for="item in 27"
         :key="item"
         :style="{backgroundImage: 'url(' + require('@/assets/images/kktp/kktp'+ item +'.jpg') + ')'}">
    </div>
  </div>
</template>

<script>
export default {
name: "Ktp"
}
</script>

<style scoped>
.station-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.station-container div {
  margin: 10px 10px ;
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>



































