<template>
    <section id="questions" class="itego-questions">
        <div class="container">
            <div class="itego-questions__wrapper">
                <div class="itego-questions__info">
                    <div class="itego-questions__title">Остались вопросы?</div>
                    <div class="itego-questions__subtitle"><b>Оставьте заявку</b>, и мы ответим!</div>
                    <form @submit.prevent="sendForm()" action="" class="itego-questions__form">
                        <div class="itego-questions__form-wrapper">
                            <div class="itego-questions__form-left">
                                <div class="itego-questions__form-left-row">
                                    <input v-model="formData.name" type="text" placeholder="Имя">
                                    <input v-model="formData.email" type="text" placeholder="E-mail">
                                </div>
                                <input v-model="formData.wish" type="text" placeholder="Пожелания">
                            </div>
                            <div class="itego-questions__form-right">
                                <div v-if="phoneErrorMessage" class="itego-your-problem__error">{{ phoneErrorMessage }}</div>
                                <input v-model="formData.phone" @input="validatePhone" type="text" placeholder="Телефон">
                                <div v-if="errorMessage" class="itego-questions__error">{{ errorMessage }}</div>
                                <button>Оставить заявку</button>
                            </div>
                        </div>
                        <div class="itego-questions__policy">
                            <router-link to="/privacy-policy">
                                Политика конфиденциальности itego
                            </router-link>
                        </div>
                        <div class="itego-questions__form-confirm">
                            <input v-model="formData.consent" type="checkbox">
                            Согласие на обработку персональных данных
                        </div>
                    </form>
                </div>
                <img class="itego-questions__img" src="../assets/images/men.svg">
            </div>
        </div>
    </section>
</template>

<script>
import { serverAddres } from '../../config.js';
import axios from 'axios';

export default {
    name: 'ItegoQuestions',
    data() {
        return {
            formData: {
                name: '',
                phone: '',
                email: '',
                wish: '',
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
            if (!this.formData.email) {
                this.errorMessage = 'Пожалуйста, введите ваш email';
                return false;
            }
            if (!this.formData.wish) {
                this.errorMessage = 'Пожалуйста, напишите ваши пожелания';
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
.itego-questions {
    background-color: #1565C0;
    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: white;
        margin-bottom: 40px;
    }
    &__subtitle {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 24px;
        color: white;
        margin-bottom: 40px;
    }
    &__form {
        &-wrapper {
            display: flex;
        }
        input, button {
            padding: 12px 20px;
            border: none;
            outline: none;
        }
        input::placeholder {
            font-family: "Montserrat", sans-serif;
            font-weight: 300;
        }
        &-left {
            display: flex;
            flex-direction: column;
            width: 444px;
            margin-right: 10px;
            &-row {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                input {
                    width: 217px;
                }
            }
        }
        &-right {
            width: 216px;
            input {
                width: 100%;
                margin-bottom: 10px;
            }
            button {
                cursor: pointer;
                width: 100%;
                background-color: #C7E7EF;
                font-family: "Montserrat", sans-serif;
                font-weight: 600;
            }
        }
        &-confirm {
            display: flex;
            align-items: center;
            font-family: "Montserrat", sans-serif;
            font-weight: 300;
            margin-top: 6px;
            color: white;
            input {
                border-radius: 10px;
                margin-right: 6px;
            }
        }
    }
    &__policy {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 14px;
        margin-top: 12px;
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

<style lang="scss">
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 425px) {
}
@media screen and (max-width: 320px) {
    .itego-questions {
        border-top: 1px solid white;
        &__wrapper {
            display: flex;
            flex-direction: column;
            // justify-content: space-between;
            // align-items: center;
        }
        &__title {
            font-size: 18px;
            margin-bottom: 40px;
        }
        &__subtitle {
            font-size: 8px;
            color: white;
            margin-bottom: 40px;
        }
        &__form {
            &-wrapper {
                display: block;
            }
            input, button {
                padding: 12px 20px;
                border: none;
                outline: none;
            }
            input::placeholder {
                font-family: "Montserrat", sans-serif;
                font-weight: 300;
            }
            &-left {
                display: block;
                width: 280px;
                margin-right: 10px;
                &-row {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 10px;
                    input {
                        width: 217px;
                    }
                }
            }
            &-right {
                display: block;
                width: 280px;
                input {
                    width: 100%;
                    margin-bottom: 10px;
                }
                button {
                    cursor: pointer;
                    width: 100%;
                    background-color: #C7E7EF;
                    font-family: "Montserrat", sans-serif;
                    font-weight: 600;
                }
            }
            &-confirm {
                display: flex;
                align-items: center;
                font-family: "Montserrat", sans-serif;
                font-weight: 300;
                margin-top: 6px;
                color: white;
                input {
                    border-radius: 10px;
                    margin-right: 6px;
                }
            }
        }
        &__img {
            display: none;
        }
        &__policy {
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-size: 14px;
            margin-top: 12px;
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
}
</style>