<template>
    <section class="itego-comparisons">
        <div class="container">
            <div class="itego-comparisons__title">Превосходство IT-аутсорсинга над штатным специалистом</div>
            <table class="itego-comparisons__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Штатный специалист</th>
                        <th>Команда Itego</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="itego-comparisons__table-gray">
                        <td class="itego-comparisons__table-title">Работает без выходных, больничных и отпусков</td>
                        <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt=""></td>
                        <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt=""></td>
                    </tr>
                    <tr>
                        <td class="itego-comparisons__table-title">Работает без рабочего места и офиса</td>
                        <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt=""></td>
                        <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt=""></td>
                    </tr>
                    <tr class="itego-comparisons__table-gray">
                        <td class="itego-comparisons__table-title">Повышение квалификации берет на себя</td>
                        <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt=""></td>
                        <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt=""></td>
                    </tr>
                    <tr>
                        <td class="itego-comparisons__table-title">Готов работать за результат</td>
                        <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt=""></td>
                        <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt=""></td>
                    </tr>
                    <tr class="itego-comparisons__table-gray">
                        <td class="itego-comparisons__table-title">Устраняет проблемы в любое время 24/7</td>
                        <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt=""></td>
                        <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt=""></td>
                    </tr>
                    <tr>
                        <td class="itego-comparisons__table-title">Решает вопросы из разных областей IT</td>
                        <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt=""></td>
                        <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt=""></td>
                    </tr>
                    <tr class="itego-comparisons__table-gray">
                        <td class="itego-comparisons__table-title">Стоимость за работу в год</td>
                        <td class="itego-comparisons__table-r"><img src="../assets/images/comparisons/red.svg" alt=""></td>
                        <td class="itego-comparisons__table-g"><img src="../assets/images/comparisons/green.svg" alt=""></td>
                    </tr>
                </tbody>
            </table>
            <div class="itego-comparisons__btn-wrapper">
                <div class="itego-comparisons__btn">
                    Узнать точную стоимость
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ItegoComparisons'
}
</script>

<style lang="scss">
.itego-comparisons {
    padding: 100px 0;
    background-color: white;
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: #1565C0;
        margin-bottom: 40px;
    }
    &__table {
        width: 100%;
        border-collapse: collapse;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 18px;
        table-layout: fixed; /* Ensure the table takes the full width */
        th, td {
            padding: 20px;
            text-align: center;
        }
        th {
            // background-color: #f2f2f2;
            font-weight: bold;
        }
        &-gray {
            background-color: #F5F5F5;
        }
        &-title {
            text-align: left; /* Align title cells to the left */
        }
    }
    &__btn-wrapper {
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    &__btn {
        margin-top: 60px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: #1565C0;
        color: white;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 18px;
        padding: 17px 65px;
    }
}
</style>
