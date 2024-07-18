<template>
    <section class="itego-comparisons">
        <div class="container">
            <div class="itego-comparisons__title">Превосходство IT-аутсорсинга над штатным специалистом</div>
            <table class="itego-comparisons__table">
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>9.1</td>
                        <td>Зелёная миля</td>
                        <td>1999</td>
                    </tr>
                        <tr>
                        <td>2</td>
                        <td>9.1</td>
                        <td>Побег из Шоушенка</td>
                        <td>1994</td>
                    </tr>
                        <tr>
                        <td>3</td>
                        <td>8.6</td>
                        <td>Властелин колец: Возвращение Короля</td>
                        <td>2003</td>
                    </tr>
                </tbody>
            </table>
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
        display: flex;
        justify-content: space-between;
    }
    [class$="item"]:nth-child(1n) {
        background-color: #F5F5F5;
    }
}
</style>
