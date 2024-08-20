<template>
    <section id="contacts" class="itego-footer">
        <footer class="itego-footer__footer-top">
            <div class="container">
                <nav class="itego-footer__footer-top-nav">
                    <div @click="togglePhoneVisibility" class="itego-footer__footer-top-phone">
                        <span v-if="!isPhoneVisible">+7 (499) 348 9...</span>
                        <span v-else>
                            <a href="tel:+74993489933">
                                +7 (499) 348 99 33
                            </a>
                        </span>
                    </div>
                    <a href="#" @click.prevent="toggleEmailVisibility">
                        <div class="itego-footer__footer-top-letter">
                            <img src="../assets/images/contacts/letter.svg" alt="">
                            <span v-if="!isEmailVisible">Написать письмо</span>
                            <span v-else>help@itego.pro</span>
                        </div>
                    </a>
                    <div class="itego-footer__footer-top-call">
                        <img src="../assets/images/contacts/phone.svg" alt="">
                        Позвоните мне
                    </div>
                    <a href="#questions">
                        <div class="itego-footer__footer-top-question">
                            <img src="../assets/images/contacts/question.svg" alt="">
                            Задать вопрос
                        </div>
                    </a>
                </nav>
            </div>
        </footer>
        <footer class="itego-footer__footer-bottom">
            <div class="container">
                <nav class="itego-footer__footer-bottom-nav">
                    <div class="itego-footer__footer-bottom-wrapper">
                        <div class="itego-footer__footer-bottom-logo">
                            <img src="../assets/images/contacts/logo.svg" alt="">
                        </div>
                        <div class="itego-footer__footer-bottom-column">
                            <span>О компании</span>
                            <span>Цены</span>
                            <span>Контакты</span>
                            <span>Отзывы</span>
                            <span>Вакансии</span>
                        </div>
                        <div class="itego-footer__footer-bottom-column">
                            <span>ИТ-обслуживание</span>
                            <span>ИТ-поддержка</span>
                            <span>ИТ-сопровождение</span>
                            <span>Обслуживание компьютерной техники</span>
                            <span>Стоимость ИТ аутсорсинга</span>
                        </div>
                    </div>
                    <div class="itego-footer__footer-bottom-contacts">
                        <img src="../assets/images/contacts/vk.svg" alt="">
                        <img src="../assets/images/contacts/ig.svg" alt="">
                        <img src="../assets/images/contacts/tg.svg" alt="">
                        <div @click="showForm" class="itego-footer__footer-bottom-contacts-btn">
                            Заказать звонок
                        </div>
                    </div>
                </nav>
                <div class="itego-footer__footer-other">
                    <div class="itego-footer__footer-other-top">
                        <router-link to="/privacy-policy">
                            <span>Политика конфиденциальности</span>
                        </router-link>
                        <span>Условия обработки персональных данных</span>
                    </div>
                    <div class="itego-footer__footer-other-bottom">
                        <span>&copy</span>
                        Itego.pro, 2024. Все права защищены
                    </div>
                </div>
            </div>
        </footer>
    </section>

    <ItegoModalForm v-if="isOpen" @close="showForm"/>
</template>

<script>
import ItegoModalForm from './ItegoModalForm.vue'

export default {
    name: 'ItegoFooter',
    data() {
        return {
            isPhoneVisible: false,
            isOpen: false,
            isEmailVisible: false  // Новое свойство
        }
    },
    components: {
        ItegoModalForm
    },
    methods: {
        togglePhoneVisibility() {
            this.isPhoneVisible = true;
        },
        toggleEmailVisibility() {
            this.isEmailVisible = true;
        },
        showForm() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    }
}
</script>

<style lang="scss">
.itego-footer {
    &__footer-top {
        background-color: white;
        padding: 70px 0;
        a {
            color: black;
        }
        &-question:hover {
            color: #1565C0;
            transition: 0.2s;
        }
        &-nav {
            display: flex;
            justify-content: space-between;
            font-family: "Montserrat", sans-serif;
            font-weight: 700;
            font-size: 24px;
            div {
                display: flex;
                align-items: center;
                img {
                    width: 30px;
                    margin-right: 8px;
                }
            }
        }
        &-phone {
            cursor: pointer;
            a {
                color: black;
            }
        }
    }
    &__footer-bottom {
        padding: 40px 0;
        background-color: #F5F5F5;
        &-nav {
            display: flex;
            justify-content: space-between;
            padding-bottom: 40px;
            border-bottom: 1px solid #1565C0;
        }
        &-wrapper {
            display: flex;
            justify-content: space-between;
        }
        &-logo {
        }
        &-column {
            margin-left: 90px;
            display: flex;
            flex-direction: column;
            font-family: "Montserrat", sans-serif;
            font-weight: 500;
            font-size: 14px;
            span {
                cursor: pointer;
                margin-bottom: 12px;
            }
        }
        &-contacts {
            img:not(:last-child) {
                margin-right: 16px;
            }
            &-btn {
                cursor: pointer;
                margin-top: 25px;
                width: 100%;
                background-color: #1565C0;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 8px 0;
                font-family: "Montserrat", sans-serif;
                font-weight: 500;
                font-size: 10px;
            }
        }
    }
    &__footer-other {
        &-top {
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-size: 12px;
            margin: 12px 0;
            span {
                text-decoration: underline;
                margin-right: 17px;
            }
        }
        &-bottom {
            display: flex;
            align-items: center;
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 12px;
            span {
                font-size: 18px;
                margin-right: 5px;
            }
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
    .itego-footer {
        &__footer-top {
            padding: 20px 0;
            &-nav {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-family: "Montserrat", sans-serif;
                font-weight: 700;
                font-size: 24px;
                div {
                    display: flex;
                    align-items: center;
                    img {
                        width: 30px;
                        margin-right: 8px;
                    }
                }
            }
            &-phone {
                cursor: pointer;
                a {
                    color: black;
                }
            }
        }
        &__footer-bottom {
            padding: 20px 0;
            background-color: #F5F5F5;
            &-nav {
                display: flex;
                flex-direction: column;
                padding-bottom: 40px;
                border-bottom: 1px solid #1565C0;
            }
            &-wrapper {
                display: flex;
                flex-direction: column;
            }
            &-column {
                margin-left: 0;
                display: flex;
                flex-direction: column;
                font-family: "Montserrat", sans-serif;
                font-weight: 500;
                font-size: 14px;
                span {
                    cursor: pointer;
                    margin-bottom: 12px;
                }
            }
            &-contacts {
                img:not(:last-child) {
                    margin-right: 16px;
                }
                &-btn {
                    margin-top: 25px;
                    width: 100%;
                    background-color: #1565C0;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px 0;
                    font-family: "Montserrat", sans-serif;
                    font-weight: 500;
                    font-size: 10px;
                }
            }
        }
        &__footer-other {
            &-top {
                font-family: "Montserrat", sans-serif;
                font-weight: 400;
                font-size: 12px;
                margin: 12px 0;
                span {
                    text-decoration: underline;
                    margin-right: 17px;
                }
            }
            &-bottom {
                display: flex;
                align-items: center;
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                font-size: 12px;
                span {
                    font-size: 18px;
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>