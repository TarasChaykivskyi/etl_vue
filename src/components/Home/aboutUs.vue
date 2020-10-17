<template>
  <section id="aboutUs" class="mt-5">
    <div class="container">
      <h2 class="text-center">Про нас</h2>
      <p class="text">ФОП «Омельченко С.М.» створено у 2013 році, свою діяльність розпочали з створення власної атестованої електротехнічної лабораторії до 1000 В. Згодом приступили до проектної діяльності та електромонтажу. На даний момент ФОП «ОМЕЛЬЧЕНКО С.М.» є складовою частиною в групи компаній, що працюють в сфері енергетики та забезпечують комплексне вирішення питань щодо енерго- забезпечення та електро-постачання об’єктів до 35 кВ включно. Ми зможемо Вам запропонувати електротехнічні рішення.</p>
      <div class="about-bottom-container">
        <b-container fluid class="p-4 ">
          <b-row>
            <b-col>
              <b-img thumbnail fluid :src="require('@/assets/images/service1.jpg')" alt="Image 1"></b-img>
              <span>Електротехнічна лабораторія до 1000 В</span>
            </b-col>
            <b-col>
              <b-img thumbnail fluid :src="require('@/assets/images/service2.jpg')" alt="Image 2"></b-img>
              <span>Обслуговування</span>
            </b-col>
            <b-col>
              <b-img thumbnail fluid :src="require('@/assets/images/service3.jpg')" alt="Image 3"></b-img>
              <span>Проектування</span>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "aboutUs",
}
</script>

<style scoped>
img {
  width: 100%;
  height: 200px;
}

.about-bottom-container span {
  text-align: center;
  font-size: 20px;
  display: block;
  font-weight: bold;
}
</style>