<template>
    <section class="itego-form">
        <div class="itego-form__title-bkg">
            <div class="container">
                <div class="itego-form__wrapper">
                    <div class="itego-form__title">
                        Закажите <br> бесплатный аудит всей инфраструктуры предприятия
                    </div>
                    <form @submit.prevent="sendForm()" action="" class="itego-form__form">
                        <input v-model="formData.name" id="name" name="name" placeholder="Ваше имя" type="text">
                        <input v-model="formData.email" id="email" name="email" placeholder="Ваш e-mail" type="text">
                        <div v-if="phoneErrorMessage" class="itego-form__error">{{ phoneErrorMessage }}</div>
                        <input v-model="formData.phone" @input="validatePhone" id="phone" name="phone" placeholder="Телефон" type="text">
                        <div v-if="errorMessage" class="itego-form__error">{{ errorMessage }}</div>
                        <button type="submit">Отправить</button>
                        <div class="itego-form__policy">
                            <router-link to="/privacy-policy">
                                Политика конфиденциальности itego
                            </router-link>
                        </div>
                        <div class="itego-form__form-confirm">
                            <input v-model="formData.consent" type="checkbox" name="" id="chkbx">
                            Согласие на обработку персональных данных
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { serverAddres } from '../../config.js';
import axios from 'axios';

export default {
  name: 'ItegoForm',
  data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                message: '',
                consent: false
            },
            errorMessage: '',
            phoneErrorMessage: '',
            policyAccepted: false
        }
    },
    props: {
        computerValue: {
            type: Number,
            required: true
        },
        serverValue: {
            type: Number,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        }
    },
    mounted() {
        this.generateMessage();
    },
    methods: {
        generateMessage() {
            if (this.computerValue > 0 || this.serverValue > 0 || this.totalPrice > 0) {
                this.formData.message = `Количество компьютеров: ${this.computerValue}, Количество серверов: ${this.serverValue}, Общая стоимость: ${this.totalPrice} руб.`;
            } else {
                this.formData.message = '';
            }
        },
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
            if (this.formData.phone && !this.formData.phone.match(/^\d+$/)) {
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
                    // Отправка события в Метрику
                    if (typeof ym === 'function') {
                        ym(97757702, 'reachGoal', 'formSubmit'); // Замена YOUR_METRIKA_ID на ваш ID Метрики
                    }

                    // Ручное сообщение о просмотре страницы
                    if (typeof ym === 'function') {
                        ym(97757702, 'hit', '/thanks'); // Сообщаем Метрике о "загрузке" страницы
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
    }
}
</script>

<style lang="scss">
.itego-form {
    background-color: white;
    padding-bottom: 206px;
    &__title-bkg {
        padding-top: 85px;
        padding-bottom: 106px;
        background-color: #1565C0;
    }
    &__wrapper {
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: white;
        width: 553px;
    }
    &__form {
        position: absolute;
        top: -34px;
        right: 0;
        padding: 32px;
        background-color: #C7E7EF;
        width: 560px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 5px #b8b8b8;
        input {
            border: 3px solid #1565C0;
            outline: none;
            margin-bottom: 25px;
            padding: 20px 30px;
            &::placeholder {
                font-family: "Montserrat", sans-serif;
                font-weight: 400;
                // font-size: 18px;
                color: black;
            }
        }
        button {
            cursor: pointer;
            background-color: #1565C0;
            font-family: "Montserrat", sans-serif;
            font-weight: 300;
            color: white;
            padding: 24px 0;
            outline: none;
            border: none;
            margin-bottom: 13px;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
        &-confirm {
            display: flex;
            align-items: center;
            color: #434343;
            font-family: "Montserrat", sans-serif;
            font-weight: 300;
            font-size: 14px;
            input {
                margin: 0;
                margin-right: 6px;
            }
        }
    }
    &__policy {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 14px;
        margin: 8px 0;
        text-decoration: underline;
        color: #1565C0;
    }
    &__error {
        color: red;
        margin-bottom: 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
    }
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 1150px) {
    .itego-form {
        background-color: white;
        padding: 0;
        &__title-bkg {
            padding: 0;
            background-color: #1565C0;
        }
        &__wrapper {
            display: flex;
            flex-direction: column;
        }
        &__title {
            margin: 30px 0;
            width: 100%;
        }
        &__form {
            position: relative;
            top: 0;
            right: 0;
            padding: 32px;
            background-color: #C7E7EF;
            width: 500px;
            display: flex;
            flex-direction: column;
            box-shadow: none;
            align-self: center;
            margin-bottom: 30px;
            input {
                border: 3px solid #1565C0;
                outline: none;
                margin-bottom: 25px;
                padding: 18px 16px;
                width: 100%;
                &::placeholder {
                    // font-size: 18px;
                    color: black;
                }
            }
        }
        &-confirm {
            input {
                width: 13px;
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .itego-form {
        background-color: white;
        &__title-bkg {
            padding: 0;
            background-color: #1565C0;
        }
        &__wrapper {
            display: flex;
            flex-direction: column;
        }
        &__title {
            font-size: 18px;
            color: white;
            width: 100%;
            margin: 20px 0;
        }
        &__form {
            position: relative;
            top: 0;
            right: 0;
            padding: 0;
            background-color: inherit;
            width: 100%;
            display: flex;
            flex-direction: column;
            box-shadow: none;
            input {
                border: none;
                outline: none;
                margin-bottom: 25px;
                padding: 18px 16px;
                width: 100%;
                &::placeholder {
                    // font-size: 18px;
                    color: black;
                }
            }
            button {
                cursor: pointer;
                background-color: #C7E7EF;
                color: black;
                font-weight: 500;
                padding: 16px 0;
                outline: none;
                border: none;
                margin-bottom: 13px;
                box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            }
            &-confirm {
                display: flex;
                align-items: center;
                color: white;
                font-size: 14px;
                input {
                    width: 10px;
                    margin: 0;
                    margin-right: 6px;
                }
            }
        }
        &__policy {
            font-size: 14px;
            margin: 8px 0;
            text-decoration: underline;
            color: white;
            a {
                color: white;
            }
        }
        &__error {
            color: red;
            margin-bottom: 20px;
        }
    }
}
@media screen and (max-width: 425px) {
}
@media screen and (max-width: 320px) {
    
}
</style>