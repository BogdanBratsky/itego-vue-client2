<template>
    <section class="comparisons">
        <div 
            class="comparisons__cancel"
            @click="closeTable"
        >
            &#10006;
        </div>
        <table class="comparisons__table">
            <tr class="comparisons__table-header">
                <td class="comparisons__expenses">Расходы из рассчета за год</td>
                <td class="comparisons__employee">Штатный сотрудник</td>
                <td class="comparisons__itego">Команда itego</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Зарплата</td>
                <td>600 000</td>
                <td>500 000</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Налоги</td>
                <td>258 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Рабочее место (ПК)</td>
                <td>50 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Больничный</td>
                <td>25 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Аренда и доп. расходы сотрудника</td>
                <td>30 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>Повышение квалификации</td>
                <td>30 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-body">
                <td>ПО для удаленного доступа</td>
                <td>27 000</td>
                <td>0</td>
            </tr>
            <tr class="comparisons__table-footer">
                <td>Всего</td>
                <td>1 020 000</td>
                <td style="color: red">500 000</td>
            </tr>
        </table>
    </section>

    <div @click="closeTable" class="background"></div>
</template>

<script>
export default {
    name: 'TablePopUp',
    props: ['close'],
    methods: {
        closeTable() {
            this.$emit('closeTable');
        }
    }
}
</script>

<style lang="scss">
.background {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.6;
    width: 100%;
    height: 100vh;
}

.comparisons {
    z-index: 101;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    &__cancel {
        user-select: none;
        cursor: pointer;
        color: #ebebeb;
        position: absolute;
        top: 0;
        right: -40px;
        font-size: 30px;
        &:hover {
            color: #fff7f7;
            transition: 0.7s;
        }
    }
    &__title {
        width: 100%;
        // box-shadow: 0 -50px 30px -20px #f5f8ff inset;
        // border-radius: 15px;
        // background-color: white;
        padding: 50px 0;
        text-align: center;
        /* text-shadow: -2px -2px 1px var(--btn-hov); */
        font-size: 32px;
        margin-bottom: 10px;
        color: #3e3e3e;
    }
    &__table {
        width: 100%;
        border-radius: 14px;
        margin-bottom: 10px;
        background-color: white;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        // padding: 30px 0;
        tr:nth-child(2n) {
            background-color: #f9f9ff;
        }
        &-header {
            font-size: 30px;
            & td {
                color: #3d3d3d;
                padding: 25px;
            }
        }
        &-body {
            font-size: 22px;
            & td {
                padding: 16px 25px;
                color: grey;
            }
        }
        &-footer {
            font-size: 22px;
            & td {
                padding: 25px;
                color: grey;
            }
        }
    }
}
</style>