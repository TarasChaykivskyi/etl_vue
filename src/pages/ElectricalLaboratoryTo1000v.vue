<template>
  <div class="electrical-labolatory mt-5 container">
    <div v-for="item in 3"
         :key="item"
         :style="{backgroundImage: 'url(' + require('@/assets/images/electrical-labolatory'+ item +'.jpg') + ')'}">
    </div>
  </div>
</template>

<script>
export default {
name: "ElectricalLaboratoryTo1000v"
}
</script>

<style scoped>
.electrical-labolatory {
  display: flex;
  justify-content: space-between;
}
.electrical-labolatory > div {
  width: 31%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>












































