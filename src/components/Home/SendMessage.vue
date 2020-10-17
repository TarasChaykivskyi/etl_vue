<template>
  <section id="sendMassage" class="mt-5">
    <div class="container">
      <h2 class="text-center">Описовий лист</h2>
      <table border="1" cellpadding="2" cellspacing="0">
        <tr>
          <th></th>
          <th>ТИП ПІДСТАНЦІЇ</th>
          <th>Заповнюється замовником</th>
          <th>ПРИМІТКА</th>
        </tr>
        <tr>
          <td rowspan="7">Конструкція підстанції</td>
          <td>стаціонарна</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>пересувна</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1-но трансформ. тупікова</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1-но трансформ. прохідна</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1-но трансформ. мачтова</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1-но трансформ. столбова</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2-х трансформаторна</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="2">Потужність КТП, кВА</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Виконання вводу зі сторони ВН</td>
          <td>повітря</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>кабель</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Виконання виходу зі сторони НН</td>
          <td>повітря</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>кабель</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Номінальна напруга, кВ</td>
          <td>6</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="2">Розподільчий пристрій високовольтного вводу</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Розрядник</td>
          <td>РВО</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ОПН</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Роз’єднювач</td>
          <td>BB/TEL</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>РВЗ</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ВНА</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Трансформатор</td>
          <td>ТМ, ТМЗ, ТМГ, ТМФ, ТСЗ</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="2">Струмообмежуючийавт. вимикач</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Розрядник</td>
          <td>РВН</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Лічильник електроенергії</td>
          <td>активний</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>реактивний</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Прилади контролю</td>
          <td>вольтметр</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>амперметр</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Лінії, що відходять</td>
          <td>Лінії, що відходять</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>рубильник з запобіж. РПС</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Струм ліній, що відходять</td>
          <td>Лінія №1</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Лінія №2</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Лінія №3</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Лінія №4</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2" style="height: 50px">Додаткова апаратура
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <h5>Для більш докладного прорахунку потрібна однолінійна схема</h5>
      <form action="" class="container">
        <div>
          <label for="customer">ЗАМОВНИК</label>
          <input type="text" id="customer" name="customer" required>
        </div>
        <div>
          <div>
            <label for="person">КОНТАКТНА ОСОБА</label>
            <input type="text" id="person" name="person" required>
          </div>
          <div>
            <label for="phone">ТЕЛЕФОН</label>
            <input type="tel" id="phone" name="phone">
          </div>
        </div>
        <input type="submit" value="Відправити" id="sendMessage" required>
      </form>
    </div>
  </section>
</template>

<script>
export default {
name: "SendMessage"
}
</script>

<style scoped>
table {
  width: 100%;
  border: 1px solid #dee2e6;
  color: #212529;
}

table th, table td {
  border: 1px solid #dee2e6;
  padding: 0.75rem;
  vertical-align: top;
}

table tr:hover {
  color: #212529;
  background-color: rgba(0, 0, 0, 0.075);
}



form > div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

label:after {
   content: '*';
   display: inline-block;
   margin-left: 5px;
   color: red;
}


input {
  width: 100%;
  display: block;
  padding: 7px 12px;
}

textarea {
  resize: none;
  width: 100%;
}

form div div {
  width: 48%;
}


button {
  background: #0e2231;
  color: #fff;
  font-size: 18px;
  padding: 10px 30px;
  border-radius: 4px;
  display: block;
  margin: 30px auto;

}
</style>