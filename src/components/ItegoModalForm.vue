<template>
    <form @submit.prevent="sendForm()" action="" class="itego-form">
        <div 
            class="itego-form__cancel"
            @click="close"
        >
            &#10006;
        </div>
        <div class="itego-form__title">
            Оставьте свои данные
        </div>
        <div class="itego-form__label">Ваше имя:</div>
        <input v-model="formData.name" class="itego-form__input" placeholder="Имя" type="text">
        <div class="itego-form__label">Ваш телефон:</div>
        <input v-model="formData.phone" @input="validatePhone" class="itego-form__input" placeholder="Телефон" type="text">
        <div v-if="phoneErrorMessage" class="itego-form__error">{{ phoneErrorMessage }}</div>
        <div class="itego-form__label">Или ваша почта:</div>
        <input v-model="formData.email" class="itego-form__input" placeholder="E-mail" type="text">
        <!-- <div class="itego-form__label">Ваши пожелания:</div>
        <textarea v-model="formData.message" class="itego-form__input" placeholder="Пожелания" type="text"></textarea> -->
        <div class="itego-form__policy">
            <router-link to="/privacy-policy" target="_blank">
                Политика конфиденциальности itego
            </router-link>
        </div>
        <div class="itego-form__chkbx">
            <input v-model="formData.consent" type="checkbox">
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
                // message: '',
                consent: false
            },
            errorMessage: '',
            phoneErrorMessage: '',
        }
    },
    computed: {
        isFormValid() {
            return this.formData.name && (this.formData.phone || this.formData.email) && this.formData.consent && !this.errorMessage;
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
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.background {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000;
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
    background-color: white;
    border: 1px solid #000000;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
    min-width: 320px;
    border-radius: 2px;
    // overflow-y: auto;
    &__cancel {
        user-select: none;
        cursor: pointer;
        color: #ebebeb;
        position: absolute;
        top: 0;
        right: -40px;
        font-size: 30px;
        &:hover {
            color: #fff7f7;
            transition: 0.7s;
        }
    }
    &__title {
        align-self: center;
        color: #1565C0;
        text-align: center;
        font-size: 25px;
        margin: 30px 0;
    }
    &__label {
        margin-bottom: 8px;
    }
    &__input {
        outline: none;
        border: 1px solid #7a7a7a;
        padding: 11px;
        margin-bottom: 26px;
        width: 100%;
    }
    &__policy {
        margin-bottom: 8px;
        a {
            text-decoration: underline;
        }
    }
    &__chkbx {
        input {
            cursor: pointer;
            width: 12px;
            margin-right: 8px;
        }
        font-size: 14px;
        display: flex;
        align-items: center;
        margin-bottom: 40px;
    }
    &__error {
        color: red;
        margin-bottom: 20px;
    }
    &__btn {
        cursor: pointer;
        font-size: 20px;
        border: none;
        border-radius: 2px;
        padding: 10px;
        background-color: #1565C0;
        color: white;
        margin-bottom: 40px;
        &:disabled {
            background-color: #d3d3d3;
            cursor: not-allowed;
        }
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
    .itego-form {
        z-index: 101;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        // padding: 0 40px;
        background-color: white;
        border: 1px solid #000000;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
        width: 200px;
        border-radius: 2px;
        // overflow-y: auto;
        &__cancel {
            user-select: none;
            cursor: pointer;
            color: #ebebeb;
            position: absolute;
            top: 0;
            right: -40px;
            font-size: 30px;
            &:hover {
                color: #fff7f7;
                transition: 0.7s;
            }
        }
        &__title {
            align-self: center;
            color: #1565C0;
            text-align: center;
            font-size: 10px;
            margin: 30px 0;
        }
        &__label {
            margin-bottom: 6px;
        }
        &__input {
            outline: none;
            border: 1px solid black;
            padding: 11px;
            margin-bottom: 26px;
            width: 100%;
        }
        &__policy {
            margin-bottom: 8px;
            a {
                text-decoration: underline;
            }
        }
        &__chkbx {
            input {
                cursor: pointer;
                width: 12px;
                margin-right: 8px;
            }
            font-size: 14px;
            display: flex;
            align-items: center;
            margin-bottom: 40px;
        }
        &__error {
            color: red;
            margin-bottom: 20px;
        }
        &__btn {
            cursor: pointer;
            font-size: 20px;
            border: none;
            border-radius: 2px;
            padding: 10px;
            background-color: #1565C0;
            color: white;
            margin-bottom: 40px;
        }
    }
}
</style>