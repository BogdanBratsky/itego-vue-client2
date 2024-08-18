<template>
    <button
      title="Наверх"
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top-button"
    >
        &#11014;
    </button>
</template>

<script>
export default {
  name: 'ScrollTopBtn',
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleScroll () {
      this.isVisible = window.scrollY > 1000
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
// @import '../variables.scss';

.scroll-to-top-button {
  z-index: 90;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 17px;
    background-color: #1565C0;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    border: 1px solid white;
    border-radius: 2px;
    transition: opacity 0.3s ease;
    font-size: 20px;
    color: white;
}

@media screen and (max-width: 768px) {
  .scroll-to-top-button {
    font-size: 17px;
    padding: 7px 13px;
    bottom: 5px;
    right: 5px;
  }
}
</style>
