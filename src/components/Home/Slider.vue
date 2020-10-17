<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide :img-src="require('@/assets/images/home-slider1.jpg')"></b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/images/home-slider2.jpg')"></b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/images/home-slider3.jpg')"></b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/images/home-slider4.jpg')"></b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/images/home-slider5.jpg')"></b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
.carousel-item {
  height: 470px;
}
</style>