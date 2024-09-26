<template>
    <section class="itego-integration">
        <div class="container">
            <div class="itego-integration__title">
                Как проходит внедрение IT-аутсорсинга в бизнес
            </div>
            <div class="itego-integration__cards">
                <div class="itego-integration__cards-a-row">
                    <div class="itego-integration__a-card">
                        <div class="card-number">01</div>
                        Оставьте заявку, и наш менеджер свяжется с вами в удобное для Вас время, и ответит на все имеющиеся у Вас вопросы
                    </div>
                    <div class="itego-integration__a-card">
                        <div class="card-number">02</div>
                        Подписываем договор на сотрудничество и начинаем работы по обслуживанию и поддержке вашей инфраструктуры
                    </div>
                </div>
                <div class="itego-integration__cards-b-row">
                    <div class="itego-integration__b-card">
                        <div class="card-number">03</div>
                        Решаем текущие наболевшие проблемы
                    </div>
                    <div class="itego-integration__b-card">
                        <div class="card-number">04</div>
                        Проводим аудит всей  инфраструктуры и выявляем глубокие проблемы
                    </div>
                    <div class="itego-integration__b-card">
                        <div class="card-number">05</div>
                        Составляем подробный отчет со сметой и рекомендациями по оптимизации
                    </div>
                </div>
                <div class="itego-integration__cards-a-row">
                    <div class="itego-integration__a-card">
                        <div class="card-number">06</div>
                        Проводим обучение по системе контроля заявок ServiceDesk
                    </div>
                    <div class="itego-integration__a-card">
                        <div class="card-number">07</div>
                        Отвечаем на вопросы, консультируем по алгоритмам взаимодействия и начинаем обслуживание в штатном порядке
                    </div>
                </div>
                <div @click="showForm" class="itego-integration__btn">
                    Начать внедрение IT-аутсорсинга
                </div>
            </div>
        </div>
    </section>

    <ItegoModalForm v-if="isOpen" @close="showForm"/>
</template>

<script>
import ItegoModalForm from './ItegoModalForm.vue'

export default {
    name: 'ItegoIntegration',
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
.itego-integration {
    background-color: white;
    padding: 62px 0;
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: #1565C0;
        margin-bottom: 57px;
    }
    &__cards {
        display: flex;
        flex-direction: column;
        &-a-row, &-b-row {
            display: flex;
            justify-content: space-between;
            font-family: "Montserrat", sans-serif;
            font-weight: 500;
            margin-bottom: 40px;
            // font-size: 18px;
        }
        .card-number {
            color: #1565C0;
            font-family: "Montserrat", sans-serif;
            font-weight: 700;
            font-size: 45px;
        }
    }
    &__a-card, &__b-card {
        padding: 25px 25px 65px 25px;
        border: 3px solid #1565C0;
    }
    &__a-card {
        width: 570px;
    }
    &__b-card {
        width: 370px;
    }
    &__btn {
        cursor: pointer;
        background-color: #1565C0;
        color: white;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 18px;
        align-self: center;
        padding: 20px 38px;
    }
}
</style>

<!-- <style lang="scss">
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 425px) {
}
@media screen and (max-width: 320px) {
    .itego-integration {
        padding: 30px 0;
        &__title {
            font-size: 20px;
            color: #1565C0;
            margin-bottom: 30px;
        }
        &__cards {
            display: flex;
            flex-direction: column;
            &-a-row, &-b-row {
                display: flex;
                flex-direction: column;
                // justify-content: space-between;
                font-family: "Montserrat", sans-serif;
                font-weight: 500;
                margin-bottom: 0;
                // font-size: 18px;
            }
            .card-number {
                font-size: 24px;
                margin-bottom: 10px;
            }
        }
        &__a-card, &__b-card {
            padding: 25px;
            width: 100%;
            margin-bottom: 10px;
            font-size: 10px;
        }
        &__btn {
            font-size: 8px;
            text-align: center;
            padding: 10px 0;
            width: 100%;
        }
    }
}
</style> -->