<template>
    <div class="container">
      <div class="itego-thanks">
        <nav class="itego-thanks__nav">
          Спасибо, что оставили заявку!
          <img src="../assets/images/interface/success.svg" alt="" class="itego-thanks__img"> 
          <button class="itego-thanks__btn" type="submit" @click="goBack">
            Обратно
          </button>    
        </nav>
      </div>
    </div>
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

<style lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
}

.itego-thanks {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  // box-shadow: 0 6px 12px rgba(0, 0, 0, 0.04);
  padding: 30px 40px;
  border-radius: 8px;
  &__img {
    width: 400px;
  }
  &__nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__btn {
    margin-top: 8px;
    cursor: pointer;
    background-color: inherit;
    border: none;
    outline: none;
    text-decoration: underline;
    color: #1565C0;
    font-size: 20px;
  }
}
</style>