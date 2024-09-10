<template>
    <section class="itego-calculator">
        <div class="container">
            <div class="itego-calculator__title">
                Калькулятор стоимости IT-аутсорсинга
            </div>
            <div class="itego-calculator__wrapper">
                <div class="itego-calculator__sliders">
                    <div class="itego-calculator__slider-wrapper">
                        <header class="itego-calculator__slider-header">
                            <p class="itego-calculator__slider-title">Количество компьютеров</p>
                            <div class="itego-calculator__counter">{{ computerValue }}</div>
                        </header>
                        <input class="itego-calculator__slider" type="range" v-model="computerValue" :min="min" :max="max">
                    </div>
                    <div class="itego-calculator__slider-wrapper">
                        <header class="itego-calculator__slider-header">
                            <p class="itego-calculator__slider-title">Количество серверов</p>
                            <div class="itego-calculator__counter">{{ serverValue }}</div>
                        </header>
                        <input class="itego-calculator__slider" type="range" v-model="serverValue" :min="min" :max="max">
                    </div>
                </div>
                <div class="itego-calculator__banner">
                    <div class="itego-calculator__header">
                        <div class="itego-calculator__banner-title">
                            Стоимость обслуживания:
                        </div>
                        <div class="itego-calculator__banner-price">
                            {{ totalPrice }} руб в месяц
                        </div>
                    </div>
                    <div class="itego-calculator__banner-description">
                        Получите подробное КП, учитывая ваши уникальные задачи
                    </div>
                    <div class="itego-calculator__banner-btn">
                        Получить КП
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ItegoCalculator',
    data() {
        return {
            computerValue: 0, // Значение для ползунка компьютеров
            serverValue: 0,   // Значение для ползунка серверов
            min: 0,            // Минимальное значение ползунка
            max: 50,           // Максимальное значение ползунка
            priceOfComputer: 1450,  // Стоимость одного компьютера
            priceOfServer: 3300     // Стоимость одного сервера
        };
    },
    computed: {
        totalPrice() {
            return (this.priceOfComputer * this.computerValue) + (this.priceOfServer * this.serverValue);
        }
    }
}
</script>

<style lang="scss">
.itego-calculator {
    background-color: #F5F5F5;
    padding: 60px 0;
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: #1565C0;
        margin-bottom: 50px;
    }
    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__sliders {
        width: 625px;
    }
    &__slider-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 45px;
    }
    &__counter {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        width: 55px;
        height: 30px;
        background-color: rgba(9, 68, 135, 1);
        color: white;
    }
    &__slider {
        margin-bottom: 70px;
        width: 625px;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 18px;
        &-title {
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-size: 18px;
        }
    }
    &__banner {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        width: 462px;
        background-color: white;
        padding: 50px 0;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        &-title {
            font-family: "Montserrat", sans-serif;
            font-weight: 700;
            font-size: 18px;
            margin-bottom: 10px;
        }
        &-price {
            font-family: "Montserrat", sans-serif;
            font-weight: 700;
            font-size: 35px;
            color: #1565C0;
            margin-bottom: 75px;
        }
        &-description {
            width: 355px;
            font-family: "Montserrat", sans-serif;
            font-weight: 500;
            font-size: 18px;
        }
        &-btn {
            cursor: pointer;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 90%;
            background-color: #1565C0;
            color: white;
            width: 400px;
            height: 57px;
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
            font-size: 18px;
        }
    }
}
</style>
