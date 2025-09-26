<template>
  <div class="page">
    <ItegoHeaderBlog />
    <div class="container">
      <div class="wrapper">
        <router-view></router-view>
        <ItegoCategoryList />
      </div>
    </div>
    <ItegoFooter />
  </div>
</template>

<script>
import ItegoCategoryList from '../../components/ItegoCategoryList.vue';
import ItegoHeaderBlog from '../../components/ItegoHeaderBlog.vue';
import ItegoFooter from '../../components/ItegoFooter.vue';

export default {
  components: {
    ItegoCategoryList,
    ItegoHeaderBlog,
    ItegoFooter,
  },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* растянуть на всю высоту экрана */
}

.container {
  flex: 1; /* забирает всё свободное место */
}

.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
