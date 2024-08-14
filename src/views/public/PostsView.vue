<template>
    <ItegoHeaderBlog/>
    <div class="container">
        <div class="wrapper">
            <router-view></router-view>
            <ItegoCategoryList/>
        </div>
    </div>
</template>

<script>
import ItegoCategoryList from '../../components/ItegoCategoryList.vue';
import ItegoHeaderBlog from '../../components/ItegoHeaderBlog.vue'

export default {
    components: {
        ItegoCategoryList,
        ItegoHeaderBlog
        // ScrollToTopBtn
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: space-between;
}
</style>