<template>
    <section class="header-popup">
        <div class="container">
            <header class="header-popup__header">
                <div class="header-popup__logo">
                    <img src="../assets/images/contacts/logo.svg" alt="">
                </div>
                <div @click="$emit('close')" class="header-popup__close">
                    &#10006;
                </div>
            </header>
            <nav class="header-popup__nav">
                <div class="header-popup__nav-items">
                    <div class="header-popup__nav-item">О компании</div>
                    <div class="header-popup__nav-item">Услуги</div>
                    <div class="header-popup__nav-item">Цены</div>
                    <div class="header-popup__nav-item">Кейсы</div>
                    <div class="header-popup__nav-item">Отраслевые решения</div>
                    <div class="header-popup__nav-item">Отзывы</div>
                    <div class="header-popup__nav-item">Контакты</div>
                </div>
                <div class="header-popup__btn">Получить консультацию</div>
                <div @click="togglePhoneVisibility" class="header-popup__phone">
                    <span v-if="!isPhoneVisible">+7 (499) 348 9...</span>
                    <span v-else>
                        <a href="tel:+74993489933">
                            +7 (499) 348 99 33
                        </a>
                    </span>
                </div>
                <div class="header-popup__contacts">
                    <a href="https://t.me/itegoproinfo" target="_blank">
                        <img src="../assets/images/contacts/tg.svg" alt="">
                    </a>
                    <a href="https://www.instagram.com/itegopro/" target="_blank">
                        <img src="../assets/images/contacts/ig.svg" alt="">
                    </a>
                    <a href="https://vk.com/itegopro" target="_blank">
                        <img src="../assets/images/contacts/vk.svg" alt="">
                    </a>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ItegoPopUp',
    data() {
        return {
            isPhoneVisible: false,
        }
    },
    methods: {
        togglePhoneVisibility() {
            this.isPhoneVisible = true;
        }
    }
}
</script>

<style lang="scss">
.header-popup {
    background-color: white;
    width: 100%;
    position: absolute;
    top: 0;
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 16px;
    }
    &__logo {
        cursor: pointer;
        img {
            width: 90px;
        }
    }
    &__close {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1565C0;
        color: white;
        padding: 4px 6px;
        border-radius: 100%;
        font-size: 11px;
    }
    &__nav-item {
        margin-top: 23px;
    }
    &__btn {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: #1565C0;
        color: white;
        margin: 23px 0;
        padding: 10px 0;
        font-size: 10px;
    }
    &__phone {
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 12px;
        a {
            color: black;
        }
    }
    &__contacts {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        img {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            margin-right: 15px;
            width: 25px;
            // box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
}
</style>