<template>
    <section class="itego-expert">
        <div class="container">
            <div class="itego-expert__wrapper">
                <div class="itego-expert__info">
                    <div class="itego-expert__info-title">
                        Прямая линия с экспертом
                    </div>
                    <div class="itego-expert__info-desc">
                        У Вас есть “горящие” проблемы? Филиалы, склады, бухгалтерия на удаленке? “Тормозят” сервера или сбоят сетевые принтеры?
                    </div>
                    <div class="itego-expert__info-help">
                        Мы Вам поможем!
                    </div>
                    <div class="itego-expert__info-consultation">
                        Обратитесь к нашему эксперту за консультацией в любой день с 9:00 до 23:00
                    </div>
                    <div @click="togglePhoneVisibility" class="itego-expert__info-phone">
                        <img src="../assets/images/phone.svg" alt="">
                        <span v-if="!isPhoneVisible">+7 (499) 348 9...</span>
                        <span v-else>
                            <a href="tel:+74993489933">
                                +7 (499) 348 99 33
                            </a>
                        </span>
                    </div>
                    <div class="itego-expert__info-call">
                        За 10 минут разговора Вы узнаете больше, чем за несколько дней <br> поиска ответов Сети
                    </div>
                </div>
                <img class="itego-expert__img" src="../assets/images/expert.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ItegoExpert',
  data() {
    return {
        isPhoneVisible: false,
    }
  },
  methods: {
    togglePhoneVisibility() {
        this.isPhoneVisible = true;
    },
  }
}
</script>

<style lang="scss">
.itego-expert {
    position: relative;
    background-color: #1565C0;
    // margin: 130px 0;
    &__wrapper {
        display: flex;
        justify-content: space-between;
    }
    &__info {
        font-family: "Montserrat", sans-serif;
        color: white;
        &-title {
            margin-top: 132px;
            font-weight: 700;
            font-size: 45px;
            margin-bottom: 30px;
        }
        &-desc {
            font-weight: 300;
            font-size: 22px;
            margin-bottom: 30px;
        }
        &-help {
            font-weight: 600;
            font-size: 28px;
            margin-bottom: 30px;
        }
        &-consultation {
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 50px;
        }
        &-phone {
            cursor: pointer;
            margin-bottom: 30px;
            margin-top: 22px;
            display: flex;
            align-items: center;
            font-weight: 600;
            font-size: 35px;
            img {
                width: 43px;
                margin-right: 19px;
            }
            a {
                color: white;
            }
        }
        &-call {
            font-weight: 400;
            font-size: 18px;
        }
    }
    &__img {
        position: relative;
        bottom: 0;
    }
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
    .itego-expert {
        &__info {
            font-family: "Montserrat", sans-serif;
            color: white;
            max-width: 700px;
        }
        &__img {
            width: 250px;
            position: relative;
            bottom: 0;
            right: 0;
        }
    }
}
@media screen and (max-width: 768px) {
    .itego-expert {
        &__info {
            max-width: 600px;
            &-title {
                width: 200px;
                margin-top: 30px;
                font-size: 22px;
                margin-bottom: 20px;
            }
            &-desc {
                font-size: 12px;
                margin-bottom: 10px;
            }
            &-help {
                font-size: 12px;
                margin-bottom: 10px;
            }
            &-consultation {
                font-size: 12px;
                margin-bottom: 15px;
            }
            &-phone {
                margin-bottom: 11px;
                font-size: 14px;
                img {
                    width: 11px;
                    margin-right: 6px;
                }
            }
            &-call {
                font-weight: 400;
                font-size: 5px;
                margin-bottom: 50px;
            }
        }
        &__img {
            // display: none;
            max-width: 200px;
            position: relative;
            bottom: 0;
            right: 0;
        }
    }
}
@media screen and (max-width: 425px) {
    .itego-expert {
        &__info {
            width: 120px;
            &-title {
                width: 200px;
                margin-top: 30px;
                font-size: 18px;
                margin-bottom: 20px;
            }
            &-desc {
                font-size: 8px;
                margin-bottom: 10px;
            }
            &-help {
                font-size: 8px;
                margin-bottom: 10px;
            }
            &-consultation {
                font-size: 8px;
                margin-bottom: 15px;
            }
            &-phone {
                margin-bottom: 11px;
                font-size: 10px;
                img {
                    width: 11px;
                    margin-right: 6px;
                }
            }
            &-call {
                font-weight: 400;
                font-size: 5px;
                margin-bottom: 50px;
            }
        }
        &__img {
            max-width: 179px;
        }
    }
}
@media screen and (max-width: 320px) {
    .itego-expert {
        position: relative;
        &__wrapper {
            display: flex;
            justify-content: space-between;
        }
        &__info {
            width: 120px;
            &-title {
                width: 200px;
                margin-top: 30px;
                font-size: 18px;
                margin-bottom: 20px;
            }
            &-desc {
                font-size: 8px;
                margin-bottom: 10px;
            }
            &-help {
                font-size: 8px;
                margin-bottom: 10px;
            }
            &-consultation {
                font-size: 8px;
                margin-bottom: 15px;
            }
            &-phone {
                margin-bottom: 11px;
                font-size: 10px;
                img {
                    width: 11px;
                    margin-right: 6px;
                }
                a {
                    color: white;
                }
            }
            &-call {
                font-weight: 400;
                font-size: 5px;
                margin-bottom: 50px;
            }
        }
        &__img {
            // display: none;
            width: 179px;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
}
</style>