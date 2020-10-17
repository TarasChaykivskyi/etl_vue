<template>
  <section id="project" class="mt-5">
    <div class="container">
      <h2 class="text-center">Проектування</h2>
      <p class="text">Роботи по проектуванню і супроводженню проекту для промислових, житлових і комерційних об’єктів:</p>
      <ul>
        <li>
          <p class="text">Комплексна розробка та погодження всіх розділів проекту зовнішнього електропостачання 0,4 – 35 кВ.</p>
          <ul class="mb-3">
            <li>Мережі 0,4 – 35 кВ</li>
            <li>ТП 0,4 – 35 кВ</li>
            <li>РП 0,4 – 35 кВ</li>
            <li>Релейний захист 0,4 – 35 кВ</li>
            <li>Системи телемеханіки 0,4 – 35 кВ</li>
            <li>АСКОЕ</li>
          </ul>
        </li>
        <li>
          <p class="text">Комплексна розробка та погодження проекту внутрішнього електропостачання 0,4 кВ.</p>
          <ul class="mb-3">
            <li>Розробка мереж живлення обладнання</li>
            <li>Розробка, прорахунок систем освітлення</li>
            <li>Заземлення</li>
            <li>Зрівнення потенціалів</li>
          </ul>
        </li>
        <li>
          <p class="text">Комплексна розробка та погодження всіх розділів проекту сонячних електростанцій різного призначення і потужності.</p>
        </li>
        <li>
          <p class="text">Проект блискавкозахисту.</p>
        </li>
        <li>
          <p class="text">Зовнішнє освітлення.</p>
        </li>
      </ul>
      <p class="text">Наші спеціалісти мають багаторічний досвід та всі необхідні сертифікати, що дають дозвіл на розробку погодження і супровід проектів. Всі перелічені роботи можуть виконуватись як в комплексі, так і окремо. Для всіх перелічених робіт є можливість супроводження будівництва та здійснення авторського нагляду.</p>


      <div class="p-4 container-images">
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/project1.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/project2.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/project3.jpg') + ')'}"></div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style scoped>
.container-images {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.container-images .kv-image {
  width: 30%;
  height: 180px;
  background-size: cover;
  background-position: center;
  margin: 10px;
}
</style>