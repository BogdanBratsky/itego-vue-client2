<template>
    <section class="header-popup">
        <div class="container">
            <header class="header-popup__header">
                <div class="header-popup__logo">
                    <img src="../assets/images/contacts/logo.svg" alt="">
                </div>
                <div @click="$emit('close')" class="header-popup__close">
                    x
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
                <div class="header-popup__phone">+7 (499) 348 99 33</div>
                <div class="header-popup__contacts"></div>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ItegoPopUp'
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
        justify-content: space-between;
        padding-top: 16px;
    }
    &__logo {
        cursor: pointer;
        img {
            width: 90px;
        }
    }
    &__nav-item {
        margin-top: 23px;
    }
}
</style>