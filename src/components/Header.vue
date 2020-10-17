<template>

  <div>
    <b-alert show class="top-header">
      <span>м. Біла Церква, вул. Рибна, 8</span>
      <span>etl-bc@ukr.net</span>
      <span>+38-(063)-145-64-49</span>
    </b-alert>

    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand class="kv-logo" href="/">
        <router-link to="/" style="color: #ffffff; text-decoration: none">
          <h3>ФОП "Омельченко С.М."</h3>
          <span>Електротехнічні рішення</span>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse" style="background: #fff; color: #000;">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Головна</b-nav-item>
          <b-nav-item to="bktp">Блочні (бетонні) трансформаторні підстанції (БКТП)</b-nav-item>
          <b-nav-item to="ktp">Комплексні трансформаторні підстанції (КТП),0.4/10/35 КВ</b-nav-item>
          <b-nav-item to="/#sendMassage">Описовий лист</b-nav-item>
          <b-nav-item to="electrical-laboratory">Електротехнічна лабораторія до 1000 В</b-nav-item>
          <b-nav-item to="/#service">Обслуговування</b-nav-item>
          <b-nav-item to="/#aboutUs">Про нас</b-nav-item>
          <b-nav-item to="/#project">Проектування</b-nav-item>
          <b-nav-item to="certificate">Свідоцтва та сертифікати</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

</template>






<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .top-header {
    border: none;
    display: flex;
    justify-content: space-between;
    background-color: #6a78a0;
    height: 35px;
    align-items: center;
    color: #fff;
    margin-bottom: 0;
  }
</style>