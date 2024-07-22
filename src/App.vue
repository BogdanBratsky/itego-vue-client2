<template>
  <router-view></router-view>
  <ScrollTopBtn/>
</template>

<script>
import ScrollTopBtn from './components/ScrollTopBtn.vue';

export default {
    name: 'App',
    components: {
        ScrollTopBtn
    },
    mounted() {
      document.title = 'ITEGO'
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

li {
    text-decoration: none;
    list-style: none;
}

html, body {
  height: 100%;
}

.container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}
</style>
