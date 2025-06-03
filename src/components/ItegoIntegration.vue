<template>
  <section class="itego-integration">
    <div class="container">
      <div class="itego-integration__title">
        Как проходит внедрение IT-аутсорсинга в бизнес
      </div>
      <div class="itego-integration__cards">
        <div class="itego-integration__cards-a-row">
          <div class="itego-integration__a-card">
            <div class="card-number">01</div>
            Оставьте заявку, и наш менеджер свяжется с вами в удобное для Вас время, и ответит на все имеющиеся у Вас вопросы
          </div>
          <div class="itego-integration__a-card">
            <div class="card-number">02</div>
            Подписываем договор на сотрудничество и начинаем работы по обслуживанию и поддержке вашей инфраструктуры
          </div>
        </div>
        <div class="itego-integration__cards-b-row">
          <div class="itego-integration__b-card">
            <div class="card-number">03</div>
            Решаем текущие наболевшие проблемы
          </div>
          <div class="itego-integration__b-card">
            <div class="card-number">04</div>
            Проводим аудит всей инфраструктуры и выявляем глубокие проблемы
          </div>
          <div class="itego-integration__b-card">
            <div class="card-number">05</div>
            Составляем подробный отчет со сметой и рекомендациями по оптимизации
          </div>
        </div>
        <div class="itego-integration__cards-a-row">
          <div class="itego-integration__a-card">
            <div class="card-number">06</div>
            Проводим обучение по системе контроля заявок ServiceDesk
          </div>
          <div class="itego-integration__a-card">
            <div class="card-number">07</div>
            Отвечаем на вопросы, консультируем по алгоритмам взаимодействия и начинаем обслуживание в штатном порядке
          </div>
        </div>
        <div @click="showForm" class="itego-integration__btn">
          Начать внедрение IT-аутсорсинга
        </div>
      </div>
    </div>
  </section>

  <ItegoModalForm v-if="isOpen" @close="showForm" />
</template>

<script>
import ItegoModalForm from './ItegoModalForm.vue'

export default {
  name: 'ItegoIntegration',
  data() {
    return {
      isOpen: false,
    }
  },
  components: {
    ItegoModalForm,
  },
  methods: {
    showForm() {
      this.isOpen = !this.isOpen
      document.body.style.overflow = this.isOpen ? 'hidden' : 'auto'
    },
  },
}
</script>

<style lang="scss">
.itego-integration {
  background-color: white;
  padding: 62px 0;

  &__title {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 45px;
    color: #1565C0;
    margin-bottom: 57px;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    gap: 40px;

    &-a-row,
    &-b-row {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
    }

    .card-number {
      color: #1565C0;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 45px;
      margin-bottom: 12px;
    }
  }

  &__a-card,
  &__b-card {
    padding: 25px 25px 65px 25px;
    border: 3px solid #1565C0;
    box-sizing: border-box;
    width: 100%;
    max-width: 570px;
    flex: 1 1 45%;
  }

  &__b-card {
    max-width: 370px;
    flex: 1 1 30%;
  }

  &__btn {
    cursor: pointer;
    background-color: #1565C0;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 18px;
    align-self: center;
    padding: 20px 38px;
    max-width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  .itego-integration__title {
    font-size: 32px;
  }

  .itego-integration__cards-a-row,
  .itego-integration__cards-b-row {
    flex-direction: column;
    align-items: stretch;
  }

  .itego-integration__a-card,
  .itego-integration__b-card {
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .itego-integration {
    padding: 30px 0;

    &__title {
      font-size: 20px;
      margin-bottom: 30px;
    }

    &__cards {
      gap: 30px;

      .card-number {
        font-size: 24px;
      }
    }

    &__a-card,
    &__b-card {
      padding: 20px;
      font-size: 12px;
    }

    &__btn {
      display: flex;
      justify-content: center;
      font-size: 14px;
      padding: 12px 0;
      width: 100%;
    }
  }
}

@media screen and (max-width: 320px) {
  .itego-integration__a-card,
  .itego-integration__b-card {
    font-size: 11px;
    padding: 16px;
  }

  .itego-integration__cards .card-number {
    font-size: 20px;
  }
}
</style>
