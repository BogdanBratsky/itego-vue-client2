<template>
  <section class="itego-staff">
    <div class="container">
      <div class="itego-staff__title">
        Собственный штат высококвалифицированных IT-специалистов
      </div>
      <div class="itego-staff__subtitle">
        Сложные задачи решают уверенно и эффективно
      </div>

      <ItegoStaffPerson
        :name="staffList[currentIndex].name"
        :post="staffList[currentIndex].post"
        :superpower="staffList[currentIndex].superpower"
        :facts="staffList[currentIndex].facts"
        :photo="staffList[currentIndex].photo"
      />

      <div class="itego-staff__controls">
        <button class="itego-staff__circle-btn" @click="prevPerson">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div class="itego-staff__dots">
          <span
            v-for="(person, index) in staffList"
            :key="index"
            :class="['itego-staff__dot', { active: index === currentIndex }]"
            @click="currentIndex = index"
          ></span>
        </div>

        <button class="itego-staff__circle-btn" @click="nextPerson">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ItegoStaffPerson from './ItegoStaffPerson.vue';

export default {
  name: 'ItegoStaff',
  components: { ItegoStaffPerson },
  data() {
    return {
      currentIndex: 0,
      touchStartX: 0,
      touchEndX: 0,
      staffList: [
        {
          name: 'Алексей',
          post: 'Программист 1с',
          superpower: 'Напишет код любой сложности и он будет рабочим',
          facts: ['15 лет улучшает код в 1с', 'Работает по профессии', 'Сначала думает, потом делает :)'],
          photo: require('../assets/images/staff/3.jpg')
        },
        {
          name: 'Богдан',
          post: 'Специалист технической поддержки',
          superpower: 'Самый молодой джедай',
          facts: [
            'С 7 лет за компами',
            'В узких кругах известен как личный ремонтник',
            'С 5 лет изучает Английский язык',
            'Увлекается компьютерами, сетями и программированием'
          ],
          photo: require('../assets/images/staff/4.jpg')
        },
        {
          name: 'Александр',
          post: 'Специалист технической поддержки',
          superpower: 'Реаниматор ПК',
          facts: [
            'В 10 лет разобрал компьютер и не смог собрать, за что получил ремня',
            'Теперь может собрать всё что разобрал :)',
            '5 лет помогает пользователям с «оно само так…»',
            'Умеет хорошо готовить',
            'Говорит что, у него IQ 140 :)'
          ],
          photo: require('../assets/images/staff/1.jpg')
        },
        {
          name: 'Антон',
          post: 'Генеральный директор',
          superpower: 'Где бы ни появился - там всё начинает работать…',
          facts: [
            '19 лет трудится в IT',
            'Большой опыт в решении сложных задач',
            'С детства хотел работать в IT-сфере',
            'Увлекается плаванием и боксом'
          ],
          photo: require('../assets/images/staff/5.jpg')
        },
        {
          name: 'Владислав',
          post: 'Специалист технической поддержки',
          superpower: 'Всё записывает',
          facts: [
            'КМС по настольному теннису',
            'Знает несколько иностранных языков',
            'Увлекается программированием',
            'Любит путешествовать'
          ],
          photo: require('../assets/images/staff/2.jpg')
        },
        {
          name: 'Виталий',
          post: 'Специалист технической поддержки',
          superpower: 'Мастер на все руки',
          facts: [
            '10 лет решает проблемы с ПК',
            'Знает сети, как свои пальцы',
            'СКУД? Камеры? СКС? Легко!',
            'Завтра весь день не за ПК'
          ],
          photo: require('../assets/images/staff/6.jpg')
        }
      ]
    };
  },
  methods: {
    nextPerson() {
      this.currentIndex = (this.currentIndex + 1) % this.staffList.length;
    },
    prevPerson() {
      this.currentIndex = (this.currentIndex - 1 + this.staffList.length) % this.staffList.length;
    },
    onTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX;
    },
    onTouchEnd(e) {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    },
    handleSwipe() {
      const diff = this.touchEndX - this.touchStartX;
      if (Math.abs(diff) > 50) {
        diff < 0 ? this.nextPerson() : this.prevPerson();
      }
    }
  },
  mounted() {
    window.addEventListener('touchstart', this.onTouchStart, { passive: true });
    window.addEventListener('touchend', this.onTouchEnd, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener('touchstart', this.onTouchStart);
    window.removeEventListener('touchend', this.onTouchEnd);
  }
};
</script>

<style lang="scss" scoped>
.itego-staff {
  padding: 30px 0;
  background-color: #ffffff;
  text-align: center;

  &__title {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 45px;
    color: #1565C0;
    margin-bottom: 15px;
  }

  &__subtitle {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 41px;
  }

  &__controls {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  &__circle-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid #1565C0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #1565C0;
      svg {
        stroke: white;
      }
    }

    svg {
      stroke: #1565C0;
    }
  }

  &__dots {
    display: flex;
    gap: 10px;
  }

  &__dot {
    width: 10px;
    height: 10px;
    background: #ccc;
    border-radius: 50%;
    cursor: pointer;
    &.active {
      background: #1565C0;
    }
  }
}

@media screen and (max-width: 768px) {
  .itego-staff {
    &__title {
      font-size: 18px;
    }
    &__subtitle {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 425px) {
  .itego-staff {
    &__circle-btn {
      width: 36px;
      height: 36px;
    }
    &__subtitle {
      font-size: 12px;
    }
  }
}
</style>
