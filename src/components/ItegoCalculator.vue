<template>
    <section class="itego-calculator">
        <div class="container">
            <div class="itego-calculator__title">
                Калькулятор стоимости IT-аутсорсинга
            </div>
            <div class="itego__calculator__wrapper">
                <div class="itego-calculator__sliders"></div>
                <div class="itego-calculator__banner"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ItegoCalculator'
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
        margin-bottom: 40px;
    }
}
</style>
