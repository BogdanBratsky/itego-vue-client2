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
                            <img src="../assets/images/contacts/letter.png" alt="">
                            <span v-if="!isEmailVisible">Написать письмо</span>
                            <span v-else>help@itego.pro</span>
                        </div>
                    </a>
                    <div @click="showPhoneForm" class="itego-footer__footer-top-call">
                        <img src="../assets/images/contacts/phone.png" alt="">
                        <a>
                            Позвоните мне
                        </a>
                    </div>
                    <a href="#questions">
                        <div class="itego-footer__footer-top-question">
                            <img src="../assets/images/contacts/question.png" alt="">
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
                        <div class="itego-footer__footer-bottom-contacts-images">
                            <a href="https://vk.com/itegopro" target="_blank">
                                <img src="../assets/images/contacts/vk.svg" alt="">
                            </a>
                            <a href="https://www.instagram.com/itegopro/" target="_blank">
                                <img src="../assets/images/contacts/ig.svg" alt="">
                            </a>
                            <a href="https://t.me/itegoproinfo" target="_blank">
                                <img src="../assets/images/contacts/tg.svg" alt="">
                            </a>
                        </div>
                        <div @click="showPhoneForm" class="itego-footer__footer-bottom-contacts-btn">
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
    <ItegoPhoneForm v-if="isOpen2" @close="showPhoneForm"/>
</template>

<script>
import ItegoModalForm from './ItegoModalForm.vue'
import ItegoPhoneForm from './ItegoPhoneForm.vue'

export default {
    name: 'ItegoFooter',
    data() {
        return {
            isPhoneVisible: false,
            isOpen: false,
            isOpen2: false,
            isEmailVisible: false  // Новое свойство
        }
    },
    components: {
        ItegoModalForm,
        ItegoPhoneForm
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
        },
        showPhoneForm() {
            this.isOpen2 = !this.isOpen2;
            if (this.isOpen2) {
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
            cursor: pointer;
            color: black;
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
            a:hover {
                color: #1565C0;
            }
        }
        &-phone {
            cursor: pointer;
            a {
                color: black;
            }
            &:hover {
                color: #1565C0;
            }
        }
        &-call {
            cursor: pointer;
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
            img {
                width: 106px;
            }
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
            &-images {
                display: flex;
                justify-content: space-between;
            }
            &-btn {
                cursor: pointer;
                margin-top: 25px;
                width: 140px;
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
        a {
            color: black;
        }
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

<!-- <style lang="scss">
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
</style> -->