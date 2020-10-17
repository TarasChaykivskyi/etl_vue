<template>
  <div class="sertification-container mt-5">
    <div v-for="item in 4"
         :key="item">
      <img :src="require('@/assets/images/sertificate'+ item +'.jpg')" alt="">
    </div>
  </div>
</template>

<script>
export default {
name: "Certificate"
}
</script>

<style scoped>

 .sertification-container img {
  display: block;
  margin: 0 auto 40px;
}

</style>






























