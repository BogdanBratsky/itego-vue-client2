<template>
  <form @submit.prevent="sendForm()" class="itego-form">
    <div class="itego-form__cancel" @click="close">&#10006;</div>
    <div class="itego-form__title">Оставьте свои данные</div>

    <div class="itego-form__label">Ваше имя:</div>
    <input v-model="formData.name" class="itego-form__input" placeholder="Имя" type="text" />

    <div class="itego-form__label">Ваш телефон:</div>
    <input
      v-model="formData.phone"
      @input="validatePhone"
      class="itego-form__input"
      placeholder="Телефон"
      type="text"
    />
    <div v-if="phoneErrorMessage" class="itego-form__error">{{ phoneErrorMessage }}</div>

    <div class="itego-form__label">Или ваша почта:</div>
    <input v-model="formData.email" class="itego-form__input" placeholder="E-mail" type="text" />

    <div class="itego-form__policy">
      <router-link to="/privacy-policy" target="_blank">Политика конфиденциальности itego</router-link>
    </div>

    <div class="itego-form__chkbx">
      <input v-model="formData.consent" type="checkbox" />
      Я разрешаю обработку моих персональных данных
    </div>

    <div v-if="errorMessage" class="itego-form__error">{{ errorMessage }}</div>

    <button class="itego-form__btn" type="submit" :disabled="!isFormValid">Отправить</button>
  </form>

  <div @click="close" class="background"></div>
</template>

<script>
import { serverAddres } from '../../config.js';
import axios from 'axios';

export default {
  name: 'ItegoModalForm',
  props: ['close'],
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        consent: false
      },
      errorMessage: '',
      phoneErrorMessage: ''
    };
  },
  computed: {
    isFormValid() {
      return (
        this.formData.name &&
        (this.formData.phone || this.formData.email) &&
        this.formData.consent &&
        !this.errorMessage
      );
    }
  },
  methods: {
    validateForm() {
      this.errorMessage = '';
      if (!this.formData.name) {
        this.errorMessage = 'Пожалуйста, введите ваше имя.';
        return false;
      }
      if (!this.formData.email && !this.formData.phone) {
        this.errorMessage = 'Пожалуйста, введите ваш телефон или почту.';
        return false;
      }
      if (this.formData.phone && !/^\d+$/.test(this.formData.phone)) {
        this.errorMessage = 'Пожалуйста, введите корректный номер телефона.';
        return false;
      }
      if (!this.formData.consent) {
        this.errorMessage = 'Пожалуйста, разрешите обработку персональных данных.';
        return false;
      }
      return true;
    },
    validatePhone(event) {
      const value = event.target.value;
      if (!/^\d*$/.test(value)) {
        this.phoneErrorMessage = 'Пожалуйста, вводите только цифры.';
      } else {
        this.phoneErrorMessage = '';
      }
      this.formData.phone = value.replace(/\D/g, '');
    },
    async sendForm() {
      if (!this.validateForm()) return;
      try {
        const response = await axios.post(`${serverAddres}/send-email`, this.formData);
        if (response.status === 200) {
          if (typeof ym === 'function') {
            ym(97757702, 'reachGoal', 'formSubmit');
            ym(97757702, 'hit', '/thanks');
          }
          this.$router.push('/thanks');
          this.$emit('close');
        } else {
          this.errorMessage = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.';
        }
      } catch (error) {
        console.error('Error:', error);
        this.errorMessage = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.';
      }
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped lang="scss">
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

.itego-form {
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background: #fff;
  border: 1px solid #000;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 400px;
  border-radius: 4px;

  &__cancel {
    user-select: none;
    cursor: pointer;
    color: #999;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    &:hover {
      color: #333;
      transition: 0.3s;
    }
  }

  &__title {
    align-self: center;
    color: #1565C0;
    text-align: center;
    font-size: 20px;
    margin: 30px 0 20px;
  }

  &__label {
    margin-bottom: 6px;
    font-size: 14px;
  }

  &__input {
    outline: none;
    border: 1px solid #7a7a7a;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 14px;
    border-radius: 2px;
  }

  &__policy {
    margin-bottom: 8px;
    font-size: 12px;
    a {
      text-decoration: underline;
      color: #1565C0;
    }
  }

  &__chkbx {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-bottom: 20px;
    input {
      cursor: pointer;
      width: 14px;
      margin-right: 8px;
    }
  }

  &__error {
    color: red;
    font-size: 12px;
    margin-bottom: 20px;
  }

  &__btn {
    cursor: pointer;
    font-size: 16px;
    border: none;
    border-radius: 2px;
    padding: 10px;
    background-color: #1565C0;
    color: white;
    margin-bottom: 30px;
    transition: background-color 0.3s;
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
}

@media screen and (max-width: 425px) {
  .itego-form {
    padding: 0 16px;
    max-width: 90%;

    &__title {
      font-size: 18px;
    }

    &__btn {
      font-size: 14px;
    }
  }
}
</style>
