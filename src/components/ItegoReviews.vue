<template>
    <section id="reviews" class="itego-reviews">
        <div class="container">
            <div class="itego-reviews__title">
                Клиенты доверяют и делятся результатами
            </div>
            <!-- <nav class="itego-reviews__nav">
                <img src="../assets/images/yandex.svg" alt="">
            </nav> -->
            <div class="itego-reviews__items">
                <iframe src="https://swdgts.ru/1e82b9bab66ed511bee067179a3c5d51" width="100%" height="700" frameborder="0"></iframe>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ItegoReviews'
}
</script>

<style lang="scss">
.itego-reviews {
    background-color: #F5F5F5;
    padding: 35px 0;
    &__title {
        width: 100%;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: #1565C0;
        margin-bottom: 40px;
    }
}
</style>

<style lang="scss">
@media screen and (max-width: 768px) {
    .itego-reviews {
        &__title {
            font-size: 18px;
            margin-bottom: 50px;
        }
    }
}
</style>