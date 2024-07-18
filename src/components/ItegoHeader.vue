<template>
    <header class="header">
        <div class="container">
            <nav class="header__contact-nav">
                <div class="header__logo">
                    <img src="../assets/images/contacts/logo.svg" alt="">
                </div>
                <div class="header__contacts">
                    <div class="header__phone">
                        <img src="../assets/images/contacts/phone.svg" alt="">
                        +7 (499) 348 99 33
                    </div>
                    <div class="header__btn">
                        Получить консультацию
                    </div>
                    <div class="header__social-networks">
                        <img src="../assets/images/contacts/wa.svg" alt="">
                        <img src="../assets/images/contacts/tg.svg" alt="">
                        <img src="../assets/images/contacts/vk.svg" alt="">
                        <img src="../assets/images/contacts/ig.svg" alt="">
                    </div>
                </div>
            </nav>
            <nav class="header__nav">
                <div class="header__nav-item">О компании</div>
                <div class="header__nav-item">Услуги</div>
                <div class="header__nav-item">Цены</div>
                <div class="header__nav-item">Кейсы</div>
                <div class="header__nav-item">Отраслевые решения</div>
                <div class="header__nav-item">Отзывы</div>
                <div class="header__nav-item">Контакты</div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: 'ItegoHeader'
}
</script>

<style lang="scss">
.header {
    padding-top: 35px;
    &__contact-nav {
        display: flex;
        justify-content: space-between;
    }
    &__logo {
        cursor: pointer;
        img {
            width: 106px;
        }
    }
    &__phone {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 20px;
        margin-right: 49px;
    }
    &__btn {
        cursor: pointer;
        font-size: 12px;
        background-color: #1565C0;
        color: white;
        padding: 10px 15px;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 11px;
        border-radius: 1px;
        margin-right: 20px;
    }
    &__contacts {
        display: flex;
        align-items: center;
    }
    &__social-networks {
        display: flex;
        align-items: center;
        img {
            cursor: pointer;
            // width: 24px;
            // height: 24px;
            margin-left: 9px;
        }
    }
    &__nav {
        margin-top: 42px;
        display: flex;
        align-items: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 15px;
        &-item {
            cursor: pointer;
            margin-right: 20px;
        }
    }
}
</style>
