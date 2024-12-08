<template>
    <section id="questions" class="itego-questions">
        <div class="container">
            <div class="itego-questions__wrapper">
                <div class="itego-questions__info">
                    <div class="itego-questions__title">Остались вопросы?</div>
                    <div class="itego-questions__subtitle"><b>Оставьте заявку</b>, и мы ответим!</div>
                    <form @submit.prevent="sendForm()" action="" class="itego-questions__form">
                        <div class="itego-questions__form-wrapper">
                            <div class="itego-questions__form-top">
                                <input v-model="formData.name" type="text" placeholder="Имя">
                                <input v-model="formData.email" type="text" placeholder="E-mail">
                                <input v-model="formData.phone" @input="validatePhone" type="text" placeholder="Телефон">
                            </div>
                            <div class="itego-questions__form-bottom">
                                <textarea  v-model="formData.wish" type="text" placeholder="Пожелания"></textarea>
                            </div>
                        </div>
                        <div v-if="phoneErrorMessage" class="itego-your-problem__error">{{ phoneErrorMessage }}</div>
                        <div v-if="errorMessage" class="itego-questions__error">{{ errorMessage }}</div>
                        <button type="submit">Оставить заявку</button>
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
                <img class="itego-questions__img" src="../assets/images/men.png">
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
        position: relative;
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
            flex-direction: column;
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
        textarea {
            padding: 12px 20px;
            border: none;
            outline: none;
            width: 100%;
            height: 90px;
        }
        &-top {
            margin-bottom: 10px;
            input {
                width: 200px;
            }
            input:not(:last-child) {
                margin-right: 10px;
            }
        }
        button {
            margin-top: 10px;
            cursor: pointer;
            width: 100%;
            background-color: #C7E7EF;
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
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
@media screen and (max-width: 1100px) {
    .itego-questions {
        &__title {
            margin-top: 80px;
        }
        &__img {
            width: 300px;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
}
@media screen and (max-width: 1024px) {
    .itego-questions {
        border-top: 1px solid white;
        &__wrapper {
            width: 100%;
            textarea {
                width: 100%;
                margin-top: 0;
                margin-bottom: 10px;
            }
        }
        &__info {
            width: 100%;
        }
        &__title {
            font-size: 18px;
            margin-top: 30px;
            margin-bottom: 10px;
        }
        &__subtitle {
            font-size: 8px;
            color: white;
            margin-bottom: 20px;
        }
        &__form {
            &-wrapper {
                width: 100%;
            }
            input, button {
                width: 100%;
                padding: 12px 20px;
                border: none;
                outline: none;
            }
            input::placeholder, textarea::placeholder {
                font-size: 10px;
            }
            &-top {
                margin: 0;
                input {
                    margin-bottom: 10px;
                }
            }
            &-confirm {
                display: flex;
                align-items: center;
                margin-top: 6px;
                color: white;
                font-size: 10px;
                margin-bottom: 60px;
                input {
                    border-radius: 10px;
                    margin-right: 6px;
                    width: 10px;
                }
            }
            button {
                margin: 0;
                width: 100%;
            }
        }
        &__img {
            display: none;
        }
        &__policy {
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-size: 14px;
            margin-top: 10px;
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
@media screen and (max-width: 768px) {
    // .itego-questions {
    //     border-top: 1px solid white;
    //     &__wrapper {
    //         width: 100%;
    //         textarea {
    //             width: 100%;
    //             margin-top: 0;
    //             margin-bottom: 10px;
    //         }
    //     }
    //     &__info {
    //         width: 100%;
    //     }
    //     &__title {
    //         font-size: 18px;
    //         margin-top: 30px;
    //         margin-bottom: 10px;
    //     }
    //     &__subtitle {
    //         font-size: 8px;
    //         color: white;
    //         margin-bottom: 20px;
    //     }
    //     &__form {
    //         &-wrapper {
    //             width: 100%;
    //         }
    //         input, button {
    //             width: 100%;
    //             padding: 12px 20px;
    //             border: none;
    //             outline: none;
    //         }
    //         input::placeholder, textarea::placeholder {
    //             font-size: 10px;
    //         }
    //         &-left {
    //             display: block;
    //             width: 100%;
    //             margin: 0;
    //             &-row {
    //                 width: 100%;
    //                 display: flex;
    //                 flex-direction: column;
    //                 margin: 0;
    //                 input {
    //                     width: 100%;
    //                     margin-bottom: 10px;
    //                 }
    //             }
    //         }
    //         &-right {
    //             display: block;
    //             width: 100%;
    //             input {
    //                 width: 100%;
    //                 margin-bottom: 10px;
    //             }
    //             button {
    //                 cursor: pointer;
    //                 width: 100%;
    //                 background-color: #C7E7EF;
    //                 font-family: "Montserrat", sans-serif;
    //                 font-weight: 600;
    //             }
    //         }
    //         &-confirm {
    //             display: flex;
    //             align-items: center;
    //             margin-top: 6px;
    //             color: white;
    //             font-size: 10px;
    //             margin-bottom: 60px;
    //             input {
    //                 border-radius: 10px;
    //                 margin-right: 6px;
    //                 width: 10px;
    //             }
    //         }
    //         button {
    //             width: 100%;
    //         }
    //     }
    //     &__img {
    //         display: none;
    //     }
    //     &__policy {
    //         font-family: "Montserrat", sans-serif;
    //         font-weight: 400;
    //         font-size: 14px;
    //         margin-top: 10px;
    //         text-decoration: underline;
    //         color: #ffffff;
    //         a {
    //             color: #ffffff;
    //         }
    //     }
    //     &__error {
    //         color: red;
    //         margin-bottom: 20px;
    //         font-family: "Montserrat", sans-serif;
    //         font-weight: 400;
    //     }
    // }    
}
@media screen and (max-width: 425px) {
}
@media screen and (max-width: 320px) {
}
</style>