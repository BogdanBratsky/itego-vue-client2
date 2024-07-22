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
        </div>

        <div class="itego-dignities__blue"></div>

        <div class="itego-dignities__btn-wrapper">
            <div class="itego-dignities__btn">Записаться на бесплатный аудит</div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ItegoDignities'
}
</script>

<style lang="scss">
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
    }
    &__btn-wrapper {
        margin-top: 20px;
        width: 100%;
    }
    &__btn {
        position: absolute;
        bottom: 130px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #1565C0;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        margin: 0 auto;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: white;
        padding: 20px 70px;
    }
}
</style>
