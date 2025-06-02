<template>
    <div class="container">
        <div style="display: flex; flex-direction: column; min-height: 100vh;">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainView',
    mounted() {
        document.title = "Административная панель";
    }
}
</script>

<style lang="scss">
@import '../../variables.scss';

.container {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
}
</style>