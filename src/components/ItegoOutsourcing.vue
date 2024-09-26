<template>
    <section id="about" class="itego-outsourcing-blocks">
        <div class="container">
            <nav class="itego-outsourcing-blocks__items">
                <div class="itego-outsourcing-blocks__item">ИТ-обслуживание</div>
                <div class="itego-outsourcing-blocks__item">Аренда серверов</div>
                <div class="itego-outsourcing-blocks__item">Поддержка 1с</div>
                <div class="itego-outsourcing-blocks__item">Резервное копирование данных</div>
                <div class="itego-outsourcing-blocks__item">ИТ-аутсорсинг</div>
            </nav>
        </div>
    </section>
    <section class="itego-outsourcing">
        <div class="container">
            <div class="itego-outsourcing__title">
                Когда нужен IT-аутсорсинг
            </div>
            <div class="itego-outsourcing__wrap">
                <div class="itego-outsourcing__list">
                    <ul>
                        <li>Не хватает квалифицированных сотрудников внутри компании</li>
                        <li>Персонал часто жалуется на плохую работу техники и ПО, а системный администратор не справляется</li>
                        <li>Ограничен бюджет на найм и содержание компетентного IT-отдела</li>
                        <li>Отсутствует возможность быстрого реагирования на изменения в технологиях</li>
                        <li>Нет времени и ресурсов на постоянный контроль качества работы IT-отдела и его оптимизацию</li>
                        <li>Возникли сложности с масштабированием IT-инфраструктуры</li>
                        <li>У сотрудников не хватает специализированных знаний в определенных областях IT</li>
                        <li>Повышение риска утечки конфиденциальной информации из-за несанкционированного доступа</li>
                        <li>Недостаточная защита от кибератак и вредоносного программного обеспечения</li>
                    </ul>
                </div>
                <div class="itego-outsourcing__cards">
                    <div class="first-column">
                        <div class="itego-outsourcing__card">Сис-админ куда-то делся</div>
                        <div class="itego-outsourcing__card">1С не загружается</div>
                        <div class="itego-outsourcing__card">Wi-Fi отваливается</div>
                        <div class="itego-outsourcing__card">Программы зависают</div>
                        <div class="itego-outsourcing__card">Компьютер не включается</div>
                    </div>
                    <div class="second-column">
                        <div class="itego-outsourcing__card">Сервер зашифровался</div>
                        <div class="itego-outsourcing__card">Кто настроит почту</div>
                        <div class="itego-outsourcing__card">Отчет не отправился</div>
                        <div class="itego-outsourcing__card">Телефония глючит</div>
                        <div class="itego-outsourcing__card">Принтер не печатает</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ItegoOutsourcing'
}
</script>

<style lang="scss">
.itego-outsourcing-blocks {
    background-color: #C7E7EF;
    padding: 65px 0;
    &__items {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
    }
    &__item {
        background-color: #1565C0;
        padding: 22px 30px;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 14px;
    }
}
.itego-outsourcing {
    margin: 56px 0;
    &__title {
        width: 100%;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: #1565C0;
        margin-bottom: 61px;
    }
    &__wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__list {
        max-width: 517px;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 18px;
        li {
            margin-bottom: 20px;
            &::before {
                content: '●';
                margin-right: 10px;
            }
        }
    }
    &__cards {
        display: flex;
    }
    &__card {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px;
        margin-bottom: 20px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 12px;
    }
    .first-column {
        margin-top: 20px;
        margin-right: 21px;
        .itego-outsourcing__card:last-child {
            background: linear-gradient(to bottom,
                white 0%,
                white 40%,
                #9FC9F8 80%,
                #9FC9F8 100%
            );
        }
    }
    .second-column {
        .itego-outsourcing__card:first-child {
            background: linear-gradient(to top,
                white 0%,
                white 40%,
                #9FC9F8 80%,
                #9FC9F8 100%
            );
        }
    }
}
</style>

<!-- <style lang="scss">
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .itego-outsourcing-blocks {
        padding: 0;
        padding-bottom: 10px;
        &__items {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            // justify-content: space-between;
            color: white;
        }
        &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            padding: 22px 30px;
            font-size: 10px;
            text-align: center;
        }
    }
}
@media screen and (max-width: 425px) {
}
@media screen and (max-width: 320px) {
    .itego-outsourcing {
        // margin: 56px 0;
        &__title {
            font-weight: 700;
            font-size: 20px;
            color: #1565C0;
            margin-bottom: 12px;
        }
        &__wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            // justify-content: space-between;
            // align-items: center;
        }
        &__list {
            font-size: 13px;
        }
        &__cards {
            display: flex;
            flex-direction: column;
        }
        &__card {
            padding: 20px;
            width: 100%;
            margin-bottom: 20px;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            font-family: "Montserrat", sans-serif;
            font-weight: 500;
            font-size: 12px;
        }
        // .first-column {
        //     margin-top: 20px;
        //     margin-right: 21px;
        // }
    }
}
</style> -->