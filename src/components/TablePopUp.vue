<template>
  <section class="comparisons">
    <div 
      class="comparisons__cancel"
      @click="closeTable"
    >
      &#10006;
    </div>
    <div class="comparisons__scroll-wrapper">
      <table class="comparisons__table">
        <tr class="comparisons__table-header">
          <td>Расходы из рассчета за год</td>
          <td>Штатный сотрудник</td>
          <td>Команда itego</td>
        </tr>
        <tr class="comparisons__table-body">
          <td>Зарплата</td>
          <td>600 000</td>
          <td>500 000</td>
        </tr>
        <tr class="comparisons__table-body">
          <td>Налоги</td>
          <td>258 000</td>
          <td>0</td>
        </tr>
        <tr class="comparisons__table-body">
          <td>Рабочее место (ПК)</td>
          <td>50 000</td>
          <td>0</td>
        </tr>
        <tr class="comparisons__table-body">
          <td>Больничный</td>
          <td>25 000</td>
          <td>0</td>
        </tr>
        <tr class="comparisons__table-body">
          <td>Аренда и доп. расходы сотрудника</td>
          <td>30 000</td>
          <td>0</td>
        </tr>
        <tr class="comparisons__table-body">
          <td>Повышение квалификации</td>
          <td>30 000</td>
          <td>0</td>
        </tr>
        <tr class="comparisons__table-body">
          <td>ПО для удаленного доступа</td>
          <td>27 000</td>
          <td>0</td>
        </tr>
        <tr class="comparisons__table-footer">
          <td>Всего</td>
          <td>1 020 000</td>
          <td style="color: red">500 000</td>
        </tr>
      </table>
    </div>
  </section>

  <div @click="closeTable" class="background"></div>
</template>

<script>
export default {
  name: 'TablePopUp',
  props: ['close'],
  methods: {
    closeTable() {
      this.$emit('closeTable');
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.6;
  width: 100%;
  height: 100vh;
}

.comparisons {
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 90%;
  max-width: 1000px;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);

  &__cancel {
    user-select: none;
    cursor: pointer;
    color: #ebebeb;
    position: absolute;
    top: 10px;
    right: -35px;
    font-size: 30px;

    &:hover {
      color: #fff;
      transition: 0.7s;
    }
  }

  &__scroll-wrapper {
    overflow-x: auto;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;

    tr:nth-child(2n) {
      background-color: #f9f9ff;
    }

    td {
      padding: 16px 25px;
      color: #3d3d3d;
      text-align: left;
    }

    &-header td {
      font-weight: bold;
      font-size: 1.2rem;
    }

    &-footer td {
      font-weight: bold;
    }
  }
}

/* 📱 Адаптивность под разные размеры экранов */
@media screen and (max-width: 1024px) {
  .comparisons {
    max-width: 90%;
  }

  .comparisons__table {
    font-size: 0.95rem;

    &-header td {
      font-size: 1.1rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .comparisons__cancel {
    font-size: 24px;
    right: -28px;
  }

  .comparisons__table {
    font-size: 0.85rem;

    &-header td {
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 480px) {
  .comparisons {
    padding: 10px;
  }

  .comparisons__cancel {
    font-size: 22px;
    right: -24px;
  }

  .comparisons__table {
    font-size: 0.75rem;

    td {
      padding: 8px;
    }

    &-header td {
      font-size: 0.9rem;
    }
  }
}
</style>
