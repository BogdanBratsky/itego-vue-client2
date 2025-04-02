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
  
          <div class="itego-outsourcing__cards">
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
      ]
    };
  },
  computed: {
    repeatedFirstColumn() {
      return [...this.firstColumn, ...this.firstColumn];
    },
    repeatedSecondColumn() {
      return [...this.secondColumn, ...this.secondColumn];
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
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  &__item {
    background-color: #1565C0;
    padding: 22px 30px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
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
  }

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
      color: #1565C0; // если хочешь цветной маркер
      line-height: 1.2;
    }
  }

  &__cards {
    display: flex;
    gap: 20px;
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

  // Градиент сверху
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, white, transparent);
    pointer-events: none;
    z-index: 1;
  }

  // Градиент снизу
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, white, transparent);
    pointer-events: none;
    z-index: 1;
  }
}

.scroll-down {
  animation: scrollDown 25s linear infinite;
}

.scroll-up {
  animation: scrollUp 25s linear infinite;
}

@keyframes scrollDown {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes scrollUp {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0%);
  }
}

/* 👇 Адаптив */
@media screen and (max-width: 1090px) {
  .itego-outsourcing-blocks__item {
    font-size: 10px;
  }
}

@media screen and (max-width: 880px) {
  .itego-outsourcing-blocks__item {
    padding: 12px 18px;
  }
}

@media screen and (max-width: 1024px) {
  .itego-outsourcing__card {
    padding: 30px;
  }

  .first-column {
    margin: 0;
    .itego-outsourcing__card:last-child {
      background: white;
    }
  }

  .second-column {
    .itego-outsourcing__card:first-child {
      background: white;
    }
  }

  .itego-outsourcing__cards {
    flex-direction: column;
  }
}

@media screen and (max-width: 768px) {
  .itego-outsourcing {
    padding: 30px 0;
    margin: 0;

    &__title {
      font-size: 30px;
    }

    &__wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__list {
      font-size: 16px;
    }

    &__cards {
      flex-direction: row;
      width: 100%;
      overflow-x: scroll;
    }

    &__card {
      white-space: nowrap;
      text-align: center;
      font-size: 10px;
      padding: 8px 12px;
      margin-right: 5px;
    }

    .first-column,
    .second-column {
      display: flex;
      height: auto;
      width: auto;
      animation: none;
      overflow: visible;
    }

    .scroll-wrapper {
      flex-direction: row;
      animation: none;
    }
  }

  .itego-outsourcing-blocks {
    padding: 0 0 10px;

    &__items {
      flex-direction: column;
      align-items: stretch;
    }

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 10px;
      padding: 22px 30px;
      font-size: 10px;
      text-align: center;
    }
  }
}

@media screen and (max-width: 425px) {
  .itego-outsourcing {
    &__title {
      font-size: 20px;
    }

    &__list {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 320px) {
  .itego-outsourcing {
    &__title {
      font-weight: 700;
      font-size: 20px;
      color: #1565C0;
      margin-bottom: 12px;
    }

    &__list {
      font-size: 13px;
    }
  }
}
</style>
