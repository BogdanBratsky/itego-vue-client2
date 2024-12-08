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
                            <div @click="showForm" class="itego-banner__order-btn">
                                Заказать аудит бесплатно
                            </div>
                        </div>
                        <img id="arrow" src="../assets/images/interface0/arrow.svg" alt="">
                    </footer>
                </div>
                <div style="display: block;" class="img-block">
                    <img id="banner" src="../assets/images/interface0/banner.png" alt="">
                </div>
            </div>
        </div>
    </section>

    <ItegoModalForm v-if="isOpen" @close="showForm"/>
</template>

<script>
import ItegoModalForm from './ItegoModalForm.vue'

export default {
    name: 'ItegoBanner',
    data() {
        return {
            isOpen: false,
        }
    },
    components: {
        ItegoModalForm
    },
    methods: {
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
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
}

.itego-banner {
    background-color: #C7E7EF;
    // background-size: contain;
    &__wrapper {
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__info {
        padding-top: 63px;
        padding-bottom: 80px;
        max-width: 100%;
        // background-image: url('../assets/images/interface0/banner.svg');
        // background-repeat: no-repeat;
        // background-position: top right;
        // background-size: contain;
    }
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 45px;
        max-width: 776px;
    }
    &__subtitle {
        margin-top: 27px;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 18px;
        max-width: 671px;
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
            cursor: pointer;
            display: inline-flex;
            background-color: #1565C0;
            color: white;
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
            font-size: 18px;
            padding: 17px 76px;
        }
        #arrow {
            margin-left: 20px;
        }
    }
}
</style>

<style lang="scss">

// __subtitle
// __order-title
// __order-btn
// img-block
@media screen and (max-width: 1024px) {
    .itego-banner {
        &__info {
            padding: 27px 0 0 0;
        }
        &__title {
            font-size: 24px;
        }
        &__subtitle {
            font-size: 13px;
        }
        &__order-title {
            font-size: 14px;
        }
        &__order-btn {
            font-size: 14px;
            padding: 10px 12px;
        }
        #banner {
            width: 400px;
        }
    }
}

@media screen and (max-width: 768px) {
    .itego-banner {
        &__wrapper {
            flex-direction: column;
            justify-content: center;
            // align-items: center;
        }
        &__info {
            padding: 27px 0 0 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            text-align: center;
        }
        &__title {
            font-size: 24px;
        }
        #arrow {
            display: none;
        }
        #banner {
            width: 400px;
        }
    }
}

@media screen and (max-width: 425px) {
    .itego-banner {
        &__wrapper {
            flex-direction: column;
            justify-content: center;
            // align-items: center;
        }
        &__info {
            padding: 27px 0 0 0;
        }
        &__title {
            font-size: 20px;
        }
        #arrow {
            display: none;
        }
        #banner {
            width: 300px;
        }
        &__order {
            &-btn {
                justify-content: center;
                width: 100%;
            }
        }
    }
}
</style>