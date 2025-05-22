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

            <div class="itego-staff__next-btn" @click="nextPerson">
                <div class="itego-staff__next-btn-img">
                    <img src="../assets/images/interface0/arrow2.svg" alt="">
                </div>
                следующий специалист
            </div>
        </div>
    </section>
</template>

<script>
import ItegoStaffPerson from './ItegoStaffPerson.vue';

export default {
  name: 'ItegoStaff',
  components: {
    ItegoStaffPerson
  },
  data() {
    return {
      currentIndex: 0,
      staffList: [
        {
          name: 'Антон',
          post: 'Технический директор',
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
            'Любит путешествовать',
          ],
          photo: require('../assets/images/staff/2.jpg')
        },
        {
          name: 'Алексей',
          post: 'Программист 1с',
          superpower: 'Напишет код любой сложности и он будет рабочим',
          facts: [
            '15 лет улучшает код в 1с',
            'Работает по профессии',
            'Сначала думает, потом делает :)',
          ],
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
            'Увлекается компьютерами, сетями и программированием',
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
            'Говорит что, у него IQ 140'
          ],
          photo: require('../assets/images/staff/1.jpg')
        },
        {
          name: 'Виталий',
          post: 'Специалист технической поддержки',
          superpower: '',
          facts: [
            '10 лет решает проблемы с ПК',
            'Знает сети, как свои пальцы',
            'СКУД? Камеры? СКС? Легко!',
            'Завтра весь день не за ПК',
          ],
          photo: require('../assets/images/staff/6.jpg')
        },
      ]
    };
  },
  methods: {
    nextPerson() {
      this.currentIndex = (this.currentIndex + 1) % this.staffList.length;
    }
  }
}
</script>

<style lang="scss">
.itego-staff {
    position: relative;
    padding: 30px 0;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
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
    &__next-btn {
        margin-top: 50px;
        align-self: flex-end;
        user-select: none;
        cursor: pointer;
    }
}
</style>

<style lang="scss">
@media screen and (max-width: 768px) {
    .itego-staff {
        &__title {
            font-size: 18px;
        }
    }
}
// @media screen and (max-width: 525px) {
//     .itego-staff {
//         &__title {
//             font-size: 20px;
//         }
//     }
// }
@media screen and (max-width: 320px) {
  .itego-staff {
    &__title {
      font-size: 18px;
      margin-bottom: 16px;
    }
    &__subtitle {
      font-size: 10px;
      margin-bottom: 28px;
    }
    &__next-btn {
      margin-top: 50px;
      align-self: flex-end;
      user-select: none;
      cursor: pointer;
      font-size: 10px;
      img {
        width: 50%;
      }
    } 
  }
}
</style>