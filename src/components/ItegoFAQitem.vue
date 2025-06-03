<template>
  <article class="faq-item">
    <button class="faq-item__title" @click="toggleText">
      {{ title }}
      <img :class="{ rotated: isTextVisible }" src="../assets/images/plus.svg" alt="+" />
    </button>
    <transition name="accordion">
      <div v-if="isTextVisible" class="faq-item__text">
        {{ text }}
      </div>
    </transition>
  </article>
</template>

<script>
export default {
  name: 'ItegoFAQitem',
  props: {
    title: String,
    text: String,
  },
  data() {
    return {
      isTextVisible: false,
    };
  },
  methods: {
    toggleText() {
      this.isTextVisible = !this.isTextVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-item {
  padding: 20px 0;
  border-bottom: 2px solid #1565C0;

  &__title {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
    width: 100%;
    text-align: left;

    img {
      width: 40px;
      height: 40px;
      transition: transform 0.3s ease;
    }

    .rotated {
      transform: rotate(45deg);
    }
  }

  &__text {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 18px;
    overflow: hidden;
    margin-top: 16px;
    line-height: 1.5;
    color: #333;
  }
}

/* Анимация раскрытия блока */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.4s ease;
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
</style>

<style lang="scss">
@media screen and (max-width: 768px) {
  .faq-item {
    padding: 14px 0;

    &__title {
      font-size: 16px;

      img {
        width: 20px;
        height: 20px;
      }
    }

    &__text {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 375px) {
  .faq-item {
    &__title {
      font-size: 14px;
    }

    &__text {
      font-size: 13px;
    }
  }
}
</style>
