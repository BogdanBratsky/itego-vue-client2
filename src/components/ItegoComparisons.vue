<template>
  <section id="prices" class="itego-comparisons">
    <div class="container">
      <div class="itego-comparisons__title">
        Превосходство IT-аутсорсинга над штатным специалистом
      </div>

      <div class="itego-comparisons__table-wrapper">
        <table class="itego-comparisons__table">
          <thead>
            <tr>
              <th></th>
              <th>Штатный специалист</th>
              <th>Команда Itego</th>
            </tr>
          </thead>
          <tbody>
            <tr class="itego-comparisons__table-gray">
              <td class="itego-comparisons__table-title">Работает без выходных, больничных и отпусков</td>
              <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt="" /></td>
              <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt="" /></td>
            </tr>
            <tr>
              <td class="itego-comparisons__table-title">Работает без рабочего места и офиса</td>
              <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt="" /></td>
              <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt="" /></td>
            </tr>
            <tr class="itego-comparisons__table-gray">
              <td class="itego-comparisons__table-title">Повышение квалификации берет на себя</td>
              <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt="" /></td>
              <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt="" /></td>
            </tr>
            <tr>
              <td class="itego-comparisons__table-title">Готов работать за результат</td>
              <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt="" /></td>
              <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt="" /></td>
            </tr>
            <tr class="itego-comparisons__table-gray">
              <td class="itego-comparisons__table-title">Устраняет проблемы в любое время 24/7</td>
              <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt="" /></td>
              <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt="" /></td>
            </tr>
            <tr>
              <td class="itego-comparisons__table-title">Решает вопросы из разных областей IT</td>
              <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt="" /></td>
              <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt="" /></td>
            </tr>
            <tr class="itego-comparisons__table-gray">
              <td class="itego-comparisons__table-title">
                Стоимость за работу в год
              </td>
              <td class="itego-comparisons__table-r">
                от 1 020 000 руб
                <img class="itego-comparisons__question" @click="showTable" src="../assets/images/q.svg" alt="">
              </td>
              <td class="itego-comparisons__table-g">от 500 000 руб</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="itego-comparisons__btn-wrapper">
        <div @click="showForm" class="itego-comparisons__btn">
          Узнать точную стоимость
        </div>
      </div>
    </div>

    <TablePopUp v-if="isOpenTable" @closeTable="showTable" />
    <ItegoModalForm v-if="isOpen" @close="showForm" />
  </section>
</template>

<script>
import ItegoModalForm from './ItegoModalForm.vue'
import TablePopUp from './TablePopUp.vue'

export default {
  name: 'ItegoComparisons',
  data() {
    return {
      isOpen: false,
      isOpenTable: false
    }
  },
  components: {
    ItegoModalForm,
    TablePopUp
  },
  methods: {
    showForm() {
      this.isOpen = !this.isOpen
      document.body.style.overflow = this.isOpen ? 'hidden' : 'auto'
    },
    showTable() {
      this.isOpenTable = !this.isOpenTable
      document.body.style.overflow = this.isOpenTable ? 'hidden' : 'auto'
    }
  }
}
</script>

<style lang="scss">
.itego-comparisons {
  padding: 100px 0;
  background-color: white;

  &__title {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 45px;
    color: #1565C0;
    margin-bottom: 40px;
    text-align: center;
  }

  &__table-wrapper {
    overflow-x: auto;
    width: 100%;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 18px;
    table-layout: fixed;
    min-width: 600px;

    th, td {
      padding: 20px;
      text-align: center;
    }

    th {
      font-weight: bold;
    }

    &-gray {
      background-color: #F5F5F5;
    }

    &-title {
      text-align: left;
    }

    &-r {
      color: #C0382B;
    }

    &-g {
      color: #27AF60;
    }
  }

  &__question {
    cursor: pointer;
    margin-left: 6px;
  }

  &__btn-wrapper {
    cursor: pointer;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &__btn {
    margin-top: 60px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #1565C0;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 18px;
    padding: 17px 65px;
    border-radius: 0;
  }
}

/* ✅ Адаптивность */

@media (max-width: 1024px) {
  .itego-comparisons__title {
    font-size: 36px;
  }

  .itego-comparisons__table {
    font-size: 16px;
  }

  .itego-comparisons__btn {
    font-size: 16px;
    padding: 15px 50px;
  }
}

@media (max-width: 768px) {
  .itego-comparisons {
    padding: 60px 0;
  }

  .itego-comparisons__title {
    font-size: 28px;
  }

  .itego-comparisons__table {
    font-size: 14px;
    min-width: 500px;
  }

  .itego-comparisons__btn {
    font-size: 14px;
    padding: 12px 40px;
  }
}

@media (max-width: 480px) {
  .itego-comparisons {
    padding: 40px 0;
  }

  .itego-comparisons__title {
    font-size: 22px;
  }

  .itego-comparisons__table {
    font-size: 13px;
    min-width: 450px;
  }

  .itego-comparisons__btn {
    font-size: 12px;
    padding: 10px 30px;
  }
}

@media (max-width: 319px) {
  .itego-comparisons__title {
    font-size: 18px;
    line-height: 1.2;
  }

  .itego-comparisons__table {
    font-size: 11px;
    min-width: 100%;

    th, td {
      padding: 8px;
    }
  }

  .itego-comparisons__btn {
    font-size: 11px;
    padding: 8px 20px;
  }
}
</style>
