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
    </section>
</template>

<script>
export default {
  name: 'ItegoDignities'
}
</script>

<style lang="scss">
.itego-dignities {
    background-color: white;
    padding: 80px;
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: #1565C0;
        margin-bottom: 68px;
    }
    &__cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &__card {
        font-family: "Montserrat", sans-serif;
        border: 1px solid #1565C0;
        width: 378px;
        padding: 40px 45px;
        margin-bottom: 20px;
        box-shadow: 0 5px 3px #d4d4d4;
        &-title {
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 20px;
        }
    }
}
</style>
