<template>
    <section class="itego-form">
        <div class="itego-form__title-bkg">
            <div class="container">
                <div class="itego-form__wrapper">
                    <div class="itego-form__title">
                        Закажите <br> бесплатный аудит всей инфраструктуры предприятия
                    </div>
                    <form action="" class="itego-form__form">
                        <input placeholder="Ваше имя" type="text">
                        <input placeholder="Ваш e-mail" type="text">
                        <input placeholder="Телефон" type="text">
                        <button>Отправить</button>
                        <div class="itego-form__form-confirm">
                            <input type="checkbox" name="" id="chkbx">
                            Согласие на обработку персональных данных
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ItegoForm'
}
</script>

<style lang="scss">
.itego-form {
    background-color: white;
    padding-bottom: 206px;
    &__title-bkg {
        padding-top: 85px;
        padding-bottom: 106px;
        background-color: #1565C0;
    }
    &__wrapper {
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: white;
        width: 553px;
    }
    &__form {
        position: absolute;
        top: -34px;
        right: 0;
        padding: 32px;
        background-color: #C7E7EF;
        width: 560px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 5px #b8b8b8;
        input {
            border: 3px solid #1565C0;
            outline: none;
            margin-bottom: 25px;
            padding: 20px 30px;
            &::placeholder {
                font-family: "Montserrat", sans-serif;
                font-weight: 400;
                // font-size: 18px;
                color: black;
            }
        }
        button {
            background-color: #1565C0;
            font-family: "Montserrat", sans-serif;
            font-weight: 300;
            color: white;
            padding: 24px 0;
            outline: none;
            border: none;
            margin-bottom: 13px;
            box-shadow: 0 5px 5px #b8b8b8;
        }
        &-confirm {
            color: #434343;
            font-family: "Montserrat", sans-serif;
            font-weight: 300;
            font-size: 14px;
            input {
                margin: 0;
                margin-right: 6px;
            }
        }
    }
}
</style>
