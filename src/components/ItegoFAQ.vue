<template>
    <section class="itego-faq">
        <div class="container">
            <div class="itego-faq__title">
                Знаем, что Вас волнует
            </div>
            <ItegoFAQitem v-for="item in data" :title="item.title" :text="item.text"/>
        </div>
    </section>
</template>

<script>
import ItegoFAQitem from './ItegoFAQitem.vue'

export default {
    name: 'ItegoFAQ',
    data() {
        return {
            data: [
                {
                    title: 'В каких городах России Вы работаете?',
                    text: 'В Москве и ближайших городах Московской области:.....'
                },
                {
                    title: 'От чего зависит цена на IT-обслуживание?',
                    text: 'В Москве и ближайших городах Московской области:.....'
                },
                {
                    title: 'Как быстро реагируете на инциденты и проблемы?',
                    text: 'В Москве и ближайших городах Московской области:.....'
                },
                {
                    title: 'Как Вы обеспечите сохранность моих данных и доступа к ним?',
                    text: 'В Москве и ближайших городах Московской области:.....'
                },
                {
                    title: 'Как происходит масштабирование услуг при необходимости расширения бизнеса?',
                    text: 'В Москве и ближайших городах Московской области:.....'
                },
                {
                    title: 'Сколько человек будет поддерживать нашу компанию? Или это будет выделенный специалист?',
                    text: 'В Москве и ближайших городах Московской области:.....'
                },
                {
                    title: 'Вы работаете только удаленно?',
                    text: 'В Москве и ближайших городах Московской области:.....'
                },
            ]
        }
    },
    components: {
        ItegoFAQitem
    }
}
</script>

<style lang="scss">
.itego-faq {
    padding: 65px 0;
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: #1565C0;
        padding-bottom: 50px;
        border-bottom: 2px solid #1565C0;
    }
}
</style>

<style lang="scss">
@media screen and (max-width: 768px) {
    .itego-faq {
        &__title {
            font-size: 30px;
        }
    }
}
@media screen and (max-width: 425px) {
    .itego-faq {
        &__title {
            font-size: 20px;
        }
    }
}
</style>