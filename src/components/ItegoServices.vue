<template>
    <section id="services" class="itego-services">
        <div class="container">
            <div class="itego-services__title">Предоставляем расширенный пакет услуг для вашего бизнеса</div>
            <div class="itego-services__items">
                <div class="itego-services__item">
                    <img src="../assets/images/services/1.svg" alt="">
                    Администрирование
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/2.svg" alt="">
                    Техническая поддержка
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/5.svg" alt="">
                    Подбор оборудования
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/4.svg" alt="">
                    Ремонт компьютеров и орг. техники
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/3.svg" alt="">
                    Сервера 1С
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/7.svg" alt="">
                    Рекламные кампании Яндекс Директ
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/6.svg" alt="">
                    Аренда серверов в дата центре
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/12.svg" alt="">
                    IP-телефония
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/8.svg" alt="">
                    Антивирусная защита
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/14.svg" alt="">
                    Резервное копирование данных
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/13.svg" alt="">
                    IT-аутсорсинг
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/15.svg" alt="">
                    Видеонаблюдение
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/16.svg" alt="">
                    Миграция в облако
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/10.svg" alt="">
                    Информационная безопасность
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/9.svg" alt="">
                    Аудит инфраструктуры
                </div>
                <div class="itego-services__item">
                    <img src="../assets/images/services/11.svg" alt="">
                    Оптимизация быстродействия 1C
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ItegoServices'
}
</script>

<style lang="scss">
.itego-services {
    padding: 100px;
    background-color: #F5F5F5;
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: #1565C0;
        margin-bottom: 64px;
    }
    &__items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &__item {
        display: flex;
        align-items: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 18px;
        background-color: white;
        width: 575px;
        margin-bottom: 20px;
        padding: 13px 25px;
        img {
            width: 33px;
            margin-right: 30px;
        }
    }
}
</style>
