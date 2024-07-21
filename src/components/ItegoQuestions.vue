<template>
    <section class="itego-questions">
        <div class="container">
            <div class="itego-questions__wrapper">
                <div class="itego-questions__info">
                    <div class="itego-questions__title">Остались вопросы?</div>
                    <div class="itego-questions__subtitle"><b>Оставьте заявку</b>, и мы ответим!</div>
                    <form action="" class="itego-questions__form">
                        <div class="itego-questions__form-wrapper">
                            <div class="itego-questions__form-left">
                                <div class="itego-questions__form-left-row">
                                    <input type="text" placeholder="Имя">
                                    <input type="text" placeholder="E-mail">
                                </div>
                                <input type="text" placeholder="Пожелания">
                            </div>
                            <div class="itego-questions__form-right">
                                <input type="text" placeholder="Телефон">
                                <button>Оставить заявку</button>
                            </div>
                        </div>
                        <div class="itego-questions__form-confirm">
                            <input type="checkbox">
                            Согласие на обработку персональных данных
                        </div>
                    </form>
                </div>
                <img class="itego-questions__img" src="../assets/images/men.svg">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ItegoQuestions'
}
</script>

<style lang="scss">
.itego-questions {
    background-color: #1565C0;
    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: white;
        margin-bottom: 40px;
    }
    &__subtitle {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 24px;
        color: white;
        margin-bottom: 40px;
    }
    &__form {
        &-wrapper {
            display: flex;
        }
        input, button {
            padding: 12px 20px;
            border: none;
            outline: none;
        }
        input::placeholder {
            font-family: "Montserrat", sans-serif;
            font-weight: 300;
        }
        &-left {
            display: flex;
            flex-direction: column;
            width: 444px;
            margin-right: 10px;
            &-row {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                input {
                    width: 217px;
                }
            }
        }
        &-right {
            width: 216px;
            input {
                width: 100%;
                margin-bottom: 10px;
            }
            button {
                width: 100%;
                background-color: #C7E7EF;
                font-family: "Montserrat", sans-serif;
                font-weight: 600;
            }
        }
        &-confirm {
            font-family: "Montserrat", sans-serif;
            font-weight: 300;
            margin-top: 14px;
            color: white;
            input {
                border-radius: 10px;
            }
        }
    }
}
</style>