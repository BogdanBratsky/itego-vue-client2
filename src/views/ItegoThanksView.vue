<template>
    thanks!
    <button @click="goBack">Назад</button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>