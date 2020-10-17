<template>
<div>
  <Slider />
  <Service />
  <Projects />
  <SendMessage />
  <AboutUs />
</div>
</template>

<script>
import Slider from "@/components/Home/Slider";
import Service from "@/components/Home/Service";
import Projects from "@/components/Home/Projects";
import SendMessage from "@/components/Home/SendMessage";
import AboutUs from "@/components/Home/aboutUs";

export default {
  name: "Home",
  components: {
    AboutUs,
    Slider,
    Service,
    Projects,
    SendMessage
  }
}
</script>
