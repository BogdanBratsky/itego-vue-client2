<template>
    <section class="itego-banner">
        <div class="container">
            <div class="itego-banner__wrapper">
                <div class="itego-banner__info">
                    <div class="itego-banner__title">
                        Комплексное IT-обслуживание компаниий с реакцией <br> 20 минут на обращение
                    </div>
                    <div class="itego-banner__subtitle">
                        Решим любую IT- задачу от ремонта компьютеров до поддержки серверов
                    </div>
                    <footer class="itego-banner__order">
                        <div class="itego-banner__order-wrap">
                            <div class="itego-banner__order-title">
                                Закажите бесплатный аудит <br> IT-инфраструктуры вашей компании
                            </div>
                            <div class="itego-banner__order-btn">
                                Заказать аудит бесплатно
                            </div>
                        </div>
                        <img src="../assets/images/interface/arrow.svg" alt="">
                    </footer>
                </div>
                <!-- <img src="../assets/images/interface/banner.svg" alt="" class="itego-banner__img"> -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ItegoBanner'
}
</script>

<style lang="scss">
.itego-banner {
    // margin-top: 63px;
    &__wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__info {
        padding-top: 63px;
        padding-bottom: 80px;
        width: 100%;
        background-image: url('../assets/images/interface/banner.svg');
        background-repeat: no-repeat;
        background-position: top right;
        background-size: contain;
    }
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 45px;
        width: 776px;
    }
    &__subtitle {
        margin-top: 27px;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 18px;
        width: 671px;
    }
    &__order {
        display: flex;
        align-items: center;
        margin-top: 44px;
        &-title {
            font-family: "Montserrat", sans-serif;
            font-weight: 500;
            font-size: 16px;
            // width: 420px;
            margin-bottom: 12px;
        }
        &-btn {
            display: inline-flex;
            background-color: #1565C0;
            color: white;
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
            font-size: 18px;
            padding: 17px 76px;
        }
        img {
            margin-left: 20px;
        }
    }
    &__img {
        // position: absolute;
        // right: 0;
        // max-width: 394px;
    }
}
</style>
