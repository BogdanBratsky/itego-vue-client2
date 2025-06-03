<template>
  <section id="about" class="itego-outsourcing-blocks">
    <div class="container">
      <nav class="itego-outsourcing-blocks__items">
        <div class="itego-outsourcing-blocks__item">ИТ-обслуживание</div>
        <div class="itego-outsourcing-blocks__item">Аренда серверов</div>
        <div class="itego-outsourcing-blocks__item">Поддержка 1с</div>
        <div class="itego-outsourcing-blocks__item">Резервное копирование данных</div>
        <div class="itego-outsourcing-blocks__item">ИТ-аутсорсинг</div>
      </nav>
    </div>
  </section>

  <section class="itego-outsourcing">
    <div class="container">
      <div class="itego-outsourcing__title">
        Когда нужен IT-аутсорсинг
      </div>
      <div class="itego-outsourcing__wrap">
        <div class="itego-outsourcing__list">
          <ul>
            <li>Не хватает квалифицированных сотрудников внутри компании</li>
            <li>Персонал часто жалуется на плохую работу техники и ПО, а системный администратор не справляется</li>
            <li>Ограничен бюджет на найм и содержание компетентного IT-отдела</li>
            <li>Отсутствует возможность быстрого реагирования на изменения в технологиях</li>
            <li>Нет времени и ресурсов на постоянный контроль качества работы IT-отдела и его оптимизацию</li>
            <li>Возникли сложности с масштабированием IT-инфраструктуры</li>
            <li>У сотрудников не хватает специализированных знаний в определенных областях IT</li>
            <li>Повышение риска утечки конфиденциальной информации из-за несанкционированного доступа</li>
            <li>Недостаточная защита от кибератак и вредоносного программного обеспечения</li>
          </ul>
        </div>

        <div class="itego-outsourcing__cards" :class="{ 'mobile-mode': isMobile }">
          <!-- Desktop: две анимированные колонки -->
          <template v-if="!isMobile">
            <div class="first-column">
              <div class="scroll-wrapper scroll-down">
                <div
                  class="itego-outsourcing__card"
                  v-for="(item, index) in repeatedFirstColumn"
                  :key="'first-' + index"
                >
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="second-column">
              <div class="scroll-wrapper scroll-up">
                <div
                  class="itego-outsourcing__card"
                  v-for="(item, index) in repeatedSecondColumn"
                  :key="'second-' + index"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </template>

          <!-- Mobile: одна горизонтальная строка -->
          <template v-else>
            <div class="scroll-wrapper horizontal-scroll">
              <div
                class="itego-outsourcing__card"
                v-for="(item, index) in mergedColumns"
                :key="'merged-' + index"
              >
                {{ item }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ItegoOutsourcing',
  data() {
    return {
      firstColumn: [
        'Сервер тормозит',
        'Медленный интернет',
        'Забыли оплатить хостинг',
        'ЭЦП не работает',
        'Медленно работает 1с',
        'Не отправляются письма',
        'Сис-админ куда-то делся',
        '1С не загружается',
        'Wi-Fi отваливается',
        'Программы зависают',
        'Компьютер не включается'
      ],
      secondColumn: [
        'Сервер зашифровался',
        'Кто настроит почту',
        'Отчет не отправился',
        'Телефония глючит',
        'Принтер не печатает',
        'Наши данные в безопасности?',
        'Камеры не показывают',
        'Не открывается общая папка',
        'Забыли пароль от…',
        'Сайты не открываются',
        'А где наши пароли?'
      ],
      isMobile: false
    };
  },
  computed: {
    repeatedFirstColumn() {
      return [...this.firstColumn, ...this.firstColumn];
    },
    repeatedSecondColumn() {
      return [...this.secondColumn, ...this.secondColumn];
    },
    mergedColumns() {
      return [...this.firstColumn, ...this.secondColumn];
    }
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener('resize', this.checkIsMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIsMobile);
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  }
};
</script>

<style lang="scss" scoped>
.itego-outsourcing-blocks {
  background-color: #C7E7EF;
  padding: 65px 0;
  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    color: white;
  }
  &__item {
    background-color: #1565C0;
    padding: 22px 30px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
  }
}

.itego-outsourcing {
  margin: 56px 0;
  &__title {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 45px;
    color: #1565C0;
    margin-bottom: 61px;
    text-align: center;
  }

  &__wrap {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 40px;
  }

  &__list {
    max-width: 517px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px;
    ul {
      list-style: none;
      padding-left: 0;
    }
    li {
      position: relative;
      padding-left: 25px;
      margin-bottom: 20px;
    }
    li::before {
      content: '●';
      position: absolute;
      left: 0;
      top: 0;
      color: #1565C0;
      line-height: 1.2;
    }
  }

  &__cards {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    justify-content: center;

    &.mobile-mode {
      overflow-x: auto;
      padding: 10px;
    }
  }

  &__card {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
    margin: 0 10px 20px 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    background: white;
    min-width: 220px;
    text-align: center;
    white-space: normal;
    scroll-snap-align: start;
  }
}

.first-column,
.second-column {
  width: 240px;
  height: 600px;
  overflow: hidden;
  position: relative;

  .scroll-wrapper {
    display: flex;
    flex-direction: column;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100px;
    pointer-events: none;
    z-index: 1;
  }
  &::before {
    top: 0;
    background: linear-gradient(to bottom, white, transparent);
  }
  &::after {
    bottom: 0;
    background: linear-gradient(to top, white, transparent);
  }
}

.scroll-down {
  animation: scrollDown 25s linear infinite;
}
.scroll-up {
  animation: scrollUp 25s linear infinite;
}

@keyframes scrollDown {
  0% { transform: translateY(0%); }
  100% { transform: translateY(-50%); }
}
@keyframes scrollUp {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0%); }
}

.horizontal-scroll {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
}

@media screen and (max-width: 1090px) {
  .itego-outsourcing-blocks {
    &__items {
      width: 100%;
    }
    &__item {
      width: 100%;
    }
  }
}

@media screen and (max-width: 425px) {
  .itego-outsourcing__title {
    font-size: 20px;
  }
  .itego-outsourcing__list {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .itego-outsourcing__list {
    font-size: 13px;
  }
  .itego-outsourcing__card {
    font-size: 12px;
    padding: 16px;
    min-width: 160px;
  }
}
</style>
