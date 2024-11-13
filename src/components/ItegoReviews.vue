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
                <div class="itego-reviews__item">
                    <!-- <iframe src="https://swdgts.ru/147857e20fdc0f34dd20991d5c68d47e" width="100%" height="700" frameborder="0"></iframe> -->
                    <!-- <div ref="reviewWidgetContainer"></div> -->
                    <iframe src="https://yandex.ru/maps-reviews-widget/115364482120?comments" width="1200px" height="1200" frameborder="0"></iframe>
                </div>
                <!-- <div style="width:100%;height:800px;overflow:hidden;position:relative;"><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/115364482120?comments"></iframe><a href="https://yandex.ru/maps/org/aytego/115364482120/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Айтэго на карте Москвы — Яндекс Карты</a></div> -->
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