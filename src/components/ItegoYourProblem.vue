<template>
    <section class="itego-your-problem">
        <div class="container">
            <div class="itego-your-problem__title">
                Расскажите нам о своей задаче и получите коммерческое предложение <br> со скидкой 50% на 1й месяц обслуживания
            </div>
            <form @submit.prevent="sendForm()" action="" class="itego-your-problem__form">
                <div class="itego-your-problem__contact-data">
                    <input v-model="formData.name" class="itego-your-problem__form-input" placeholder="Ваше имя" type="text">
                    <div v-if="phoneErrorMessage" class="itego-your-problem__error">{{ phoneErrorMessage }}</div>
                    <input v-model="formData.phone" @input="validatePhone" class="itego-your-problem__form-input" placeholder="Телефон" type="text">
                </div>
                <textarea v-model="formData.problem" class="itego-your-problem__form-textarea" placeholder="Проблема" name="" id=""></textarea>
                <div v-if="errorMessage" class="itego-your-problem__error">{{ errorMessage }}</div>
                <button class="itego-your-problem__form-btn">Отправить</button>
                <div class="itego-your-problem__confirm">
                    <input v-model="formData.consent" type="checkbox" name="" id="chkbx">
                    Согласие на обработку персональных данных
                </div>
                <div class="itego-your-problem__policy">
                    <router-link to="/privacy-policy">
                        Политика конфиденциальности itego
                    </router-link>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { serverAddres } from '../../config.js';
import axios from 'axios';

export default {
  name: 'ItegoYourProblem',
  data() {
        return {
            formData: {
                name: '',
                phone: '',
                problem: '',
                consent: false
            },
            errorMessage: '',
            phoneErrorMessage: '',
            policyAccepted: false
        }
    },
    methods: {
        validateForm() {
            this.errorMessage = '';

            if (!this.formData.name) {
                this.errorMessage = 'Пожалуйста, введите ваше имя.';
                return false;
            }
            if (this.formData.phone && !this.formData.phone.match(/^\d+$/)) {
                this.errorMessage = 'Пожалуйста, введите корректный номер телефона.';
                return false;
            }
            if (!this.formData.problem) {
                this.errorMessage = 'Пожалуйста, опишите вашу проблему';
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
            if (!this.validateForm()) {
                return;
            }
            try {
                const response = await axios.post(`${serverAddres}/send-email`, this.formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 200) {
                    this.$router.push('/thanks');
                } else {
                    this.errorMessage = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.';
                }
            } catch (error) {
                console.error('Error:', error);
                this.errorMessage = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.';
            }
        },
    }
}
</script>

<style lang="scss">
.itego-your-problem {
    background-color: #1565C0;
    padding: 120px 0;
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: white;
        margin-bottom: 40px;
    }
    &__form {
        display: flex;
        flex-direction: column;
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 18px;
        &-textarea {
            width: 100%;
            height: 150px;
        }
        &-input {
            width: 575px;
        }
        &-input, &-textarea {
            border: none;
            outline: none;
            padding: 23px 36px;
        }
        &-btn {
            cursor: pointer;
            background-color: #C7E7EF;
            margin-top: 32px;
            margin-bottom: 22px;
            align-self: center;
            border: none;
            outline: none;
            padding: 23px 36px;
            font-weight: 600;
            width: 570px;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
    &__contact-data {
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;
    }
    &__confirm {
        display: flex;
        align-items: center;
        color: white;
        align-self: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 14px;
        input {
            margin-right: 6px;
            border: 1px solid white;
        }
    }
    &__policy {
        align-self: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 14px;
        margin: 8px 0;
        text-decoration: underline;
        color: #ffffff;
        a {
            color: #ffffff;
        }
    }
    &__error {
        color: red;
        margin-bottom: 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
    }
}
</style>
