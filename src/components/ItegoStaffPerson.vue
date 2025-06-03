<template>
  <section class="itego-staff-person">
    <div class="itego-staff-person__info">
      <div class="itego-staff-person__name">{{ name }}</div>
      <div class="itego-staff-person__post">{{ post }}</div>
      <div class="itego-staff-person__superpower">Суперсила: {{ superpower }}</div>
      <ul class="itego-staff-person__facts">
        <li v-for="(fact, index) in facts" :key="index">• {{ fact }}</li>
      </ul>
    </div>
    <div class="itego-staff-person__photo-section">
      <img :src="photo" :alt="name" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ItegoStaffPerson',
  props: {
    name: String,
    post: String,
    superpower: String,
    facts: Array,
    photo: String
  }
}
</script>

<style lang="scss">
.itego-staff-person {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  &__info {
    text-align: left;
  }
  &__name {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 9px;
  }
  &__post {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 22px;
  }
  &__superpower {
    font-weight: 300;
    font-size: 18px;
    font-style: italic;
    margin-bottom: 27px;
  }
  &__facts {
    line-height: 40px;
    li {
      padding-left: 10px;
      font-weight: 400;
      font-size: 18px;
    }
  }
  &__photo-section {
    width: 462px;
    height: 477px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .itego-staff-person {
    &__facts {
      line-height: 30px;
      li {
        padding-left: 6px;
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .itego-staff-person {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    &__photo-section {
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__info {
      align-self: unset;
      text-align: center;
    }

    &__name {
      font-size: 16px;
      margin-top: 21px;
    }

    &__post {
      font-size: 14px;
    }

    &__superpower {
      font-size: 14px;
      margin-bottom: 14px;
    }

    &__facts {
      line-height: 30px;

      li {
        padding-left: 6px;
        font-size: 14px;
      }
    }
  }
}

@media screen and (max-width: 525px) {
  .itego-staff-person {
    &__photo-section {
      width: 320px;
      height: 320px;
    }
  }
}

@media screen and (max-width: 320px) {
  .itego-staff-person {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    &__photo-section {
      width: 280px;
      height: 177px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__info {
      text-align: center;
    }

    &__name {
      font-size: 10px;
      margin-top: 21px;
    }

    &__post,
    &__superpower {
      font-size: 8px;
    }

    &__facts {
      line-height: 20px;

      li {
        padding-left: 6px;
        font-size: 8px;
      }
    }
  }
}
</style>
