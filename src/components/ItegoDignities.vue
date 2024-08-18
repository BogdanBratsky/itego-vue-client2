<template>
    <section class="itego-dignities">
        <div class="container">
            <div class="itego-dignities__title">
                Почему нас ценят и выбирают клиенты
            </div>
            <div class="itego-dignities__cards">
                <div class="itego-dignities__card">
                    <div class="itego-dignities__card-title">
                        Реакция на заявку 20 минут 24/7
                    </div>
                    Оперативно отвечаем и решаем проблему. Если заявка приходит вне рабочего времени, наши инженеры все равно ответят и помогут
                </div>
                <div class="itego-dignities__card">
                    <div class="itego-dignities__card-title">
                        Заявки принимаем через ServiceDesk
                    </div>
                    Это система автоматизации работы техподдержки с клиентскими обращениями. Все заявки и работа по ним под вашим контролем
                </div>
                <div class="itego-dignities__card">
                    <div class="itego-dignities__card-title">
                        Непрерывная оптимизация
                    </div>
                    Постоянно анализируем заявки и планируем, как в будущем быстрее и лучше их решать или не допускать повторения проблемы
                </div>
                <div class="itego-dignities__card">
                    <div class="itego-dignities__card-title">
                        Полный аудит бесплатно
                    </div>
                    На старте проводим полный аудит, и предоставляем документ, где описаны все выявленные проблемы и пути их решения
                </div>
                <div class="itego-dignities__card">
                    <div class="itego-dignities__card-title">
                        Надежный удаленный доступ
                    </div>
                    Используем только платное ПО, которое прошло проверку качества и безопасности, и гарантирует стабильную работу и защиту данных пользователей
                </div>
                <div class="itego-dignities__card">
                    <div class="itego-dignities__card-title">
                        Зашифрованная БД паролей
                    </div>
                    Все пароли и учетные записи клиентов хранятся в зашифрованной системе хранения БД. Доступ есть у клиента и ответственного лица
                </div>
            </div>
            <div @click="showForm" class="itego-dignities__btn">Записаться на бесплатный аудит</div>
        </div>

        <div class="itego-dignities__blue"></div>

    </section>

    <ItegoModalForm v-if="isOpen" @close="showForm"/>
</template>

<script>
import ItegoModalForm from './ItegoModalForm.vue'

export default {
    name: 'ItegoDignities',
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
    display: flex;
    flex-direction: column;
}

.itego-dignities {
    position: relative;
    background-color: white;
    padding-top: 80px;
    padding-bottom: 268px;
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: #1565C0;
        margin-bottom: 68px;
    }
    &__cards {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &__card {
        z-index: 10;
        background-color: white;
        font-family: "Montserrat", sans-serif;
        border: 1px solid #1565C0;
        width: 378px;
        padding: 40px 45px;
        margin-bottom: 20px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        &-title {
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 20px;
        }
    }
    &__blue {
        position: absolute;
        top: 32%;
        left: -35%;
        // z-index: 0;
        background-color: #1565C0;
        width: 100%;
        height: 438px;
        z-index: 1;
    }
    &__btn {
        align-self: center;
        z-index: 20;
        cursor: pointer;
        // position: absolute;
        // bottom: 130px;
        // left: 50%;
        // transform: translateX(-50%);
        background-color: #1565C0;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 120px;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: white;
        padding: 20px 70px;
    }
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 425px) {
}
@media screen and (max-width: 320px) {
    .itego-dignities {
        position: relative;
        background-color: white;
        padding-top: 30px;
        padding-bottom: 30px;
        &__title {
            font-family: "Montserrat", sans-serif;
            font-weight: 700;
            font-size: 18px;
            color: #1565C0;
            margin-bottom: 30px;
        }
        &__cards {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        &__card {
            z-index: 10;
            background-color: white;
            font-family: "Montserrat", sans-serif;
            font-size: 8px;
            border: 1px solid #1565C0;
            width: 280px;
            padding: 20px 29px;
            margin-bottom: 10px;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            &-title {
                font-weight: 700;
                font-size: 10px;
                margin-bottom: 10px;
            }
        }
        &__blue {
            position: absolute;
            top: 32%;
            left: -35%;
            // z-index: 0;
            background-color: #1565C0;
            width: 100%;
            height: 180px;
        }
        &__btn-wrapper {
            margin-top: 20px;
            width: 100%;
        }
        &__btn {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #1565C0;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            margin-top: 0;
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
            font-size: 8px;
            color: white;
            width: 280px;
            padding: 10px;
        }
    }
}
</style>