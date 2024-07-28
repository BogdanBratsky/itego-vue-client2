<template>
    <section class="itego-your-problem">
        <div class="container">
            <div class="itego-your-problem__title">
                Расскажите нам о своей задаче и получите коммерческое предложение <br> со скидкой 50% на 1й месяц обслуживания
            </div>
            <form action="" class="itego-your-problem__form">
                <div class="itego-your-problem__contact-data">
                    <input class="itego-your-problem__form-input" placeholder="Ваше имя" type="text">
                    <input class="itego-your-problem__form-input" placeholder="Телефон" type="text">
                </div>
                <textarea class="itego-your-problem__form-textarea" placeholder="Проблема" name="" id=""></textarea>
                <button class="itego-your-problem__form-btn">Отправить</button>
                <div class="itego-your-problem__confirm">
                    <input type="checkbox" name="" id="chkbx">
                    Согласие на обработку персональных данных
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ItegoYourProblem'
}
</script>

<style lang="scss">
.itego-your-problem {
    background-color: #1565C0;
    padding: 120px 0;
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: white;
        margin-bottom: 40px;
    }
    &__form {
        display: flex;
        flex-direction: column;
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 18px;
        &-textarea {
            width: 100%;
            height: 150px;
        }
        &-input {
            width: 575px;
        }
        &-input, &-textarea {
            border: none;
            outline: none;
            padding: 23px 36px;
        }
        &-btn {
            cursor: pointer;
            background-color: #C7E7EF;
            margin-top: 32px;
            margin-bottom: 22px;
            align-self: center;
            border: none;
            outline: none;
            padding: 23px 36px;
            font-weight: 600;
            width: 570px;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
    &__contact-data {
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;
    }
    &__confirm {
        display: flex;
        align-items: center;
        color: white;
        align-self: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 14px;
        input {
            margin-right: 6px;
            border: 1px solid white;
        }
    }
}
</style>
