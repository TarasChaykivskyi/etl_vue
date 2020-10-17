<template>
  <section id="service" class="mt-5">
    <div class="container">
      <h2 class="text-center">Обслуговування</h2>
      <p class="mb-4">"Ми пропонуємо Вам електро-обслуговування нашими спеціалістами Ваших об"єктів ( аптеки, школи, офісні приміщення, банківські відділення , тощо). Обслуговуваня енергооб"єктів Замовника - як правило вимагає утримувати висококлваліфікований штат працівників - укомплектований та такий, що пройшов спеціальне навчання та підготовку - це значна стаття витрат, проте з іншого боку це дозволяє збільшити термін експлуатації Ваших мереж та обладнання, забезпечити безпеку персоналу. Тому ми пропонуємо Вам обслуговуватись в нас, це обійдеться Замовнику значно дешевше ніж постійно утримувати електротехнічний персонал - без втрати ефективності, безпеки та якості обслуговування"</p>
      <b-table bordered hover :items="items" :fields="fields"></b-table>

      <div class="p-4 container-images">
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service1.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service2.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service3.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service4.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service5.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service6.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service7.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service8.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service9.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service10.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service11.jpg') + ')'}"></div>
        <div class="kv-image" :style="{backgroundImage: 'url(' + require('@/assets/images/service12.jpg') + ')'}"></div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Service",
  data() {
    return {
      fields: [
        { key: 'N', label: '№' },
        { key: 'field_1', label: 'Перелік робіт' },
        { key: 'field_2', label: 'Періодичність' },
        { key: 'field_3', label: 'Примітка' },
      ],
      items: [
        { N: 1, field_1: 'Технічний огляд ел.уст., фотозвіт', field_2: '1 раз на міс.', field_3: '' },
        { N: 2, field_1: 'Зняття показників лічильника', field_2: '1 раз на міс.', field_3: '' },
        { N: 3, field_1: 'Огляд систем заземлення', field_2: '1 раз на міс.', field_3: '' },
        { N: 4, field_1: 'Перевірка кабельних мереж і розподільного обладнання на відповідність навантаження струмоприймачів', field_2: '1 раз на міс.', field_3: '' },
        { N: 5, field_1: 'Визначення стану контактних груп в розподільних щитах', field_2: '1 раз на міс.', field_3: '' },
        { N: 6, field_1: 'Заміна несправних електроламп, стартерів, дроселів, патронів, вимикачів, авт.вимикачів та іншого несправного обладнання', field_2: 'За необхідності', field_3: 'За дод.угодою' },
        { N: 7, field_1: 'Виконання перемикань', field_2: 'За необхідності', field_3: '' },
        { N: 8, field_1: 'Технічний огляд сист.освітлення', field_2: '1 раз в квартал', field_3: '' },
        { N: 9, field_1: 'Ведення журналів', field_2: '1 раз на міс.', field_3: '' },
        { N: 10, field_1: 'Електромонтаж, реконструкція', field_2: 'За необхідності', field_3: 'За дод.угодою' },
        { N: 11, field_1: 'Технічні консультаці', field_2: 'За необхідності', field_3: '' },
        { N: 12, field_1: 'Технічний звіт ( протоколи вимірів з мокрою печаткою)', field_2: 'За необхідності', field_3: 'За дод.угодою' },
        { N: 13, field_1: 'Зняття струмових навантажень', field_2: '1 раз на рік', field_3: '' },
      ]
    }
  }
}
</script>

<style scoped>
  .container-images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .container-images .kv-image {
    width: 14%;
    height: 130px;
    background-size: cover;
    background-position: center;
    margin: 10px;
  }

</style>