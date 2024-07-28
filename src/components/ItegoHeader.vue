<template>
    <header class="header">
        <div class="container">
            <nav class="header__contact-nav">
                <div class="header__logo">
                    <img src="../assets/images/contacts/logo.svg" alt="">
                </div>
                <div class="header__contacts">
                    <div @click="togglePhoneVisibility" class="header__phone">
                        <img src="../assets/images/contacts/phone.svg" alt="">
                        <span v-if="!isPhoneVisible">+7 (499) 348 9...</span>
                        <span v-else>
                            <a href="tel:+74993489933">
                                +7 (499) 348 99 33
                            </a>
                        </span>
                    </div>
                    <div class="header__btn">
                        Получить консультацию
                    </div>
                    <div class="header__social-networks">
                        <img src="../assets/images/contacts/wa.svg" alt="">
                        <img src="../assets/images/contacts/tg.svg" alt="">
                        <img src="../assets/images/contacts/vk.svg" alt="">
                        <img src="../assets/images/contacts/ig.svg" alt="">
                    </div>
                </div>
            </nav>
        </div>
        <nav :class="{'header__nav': true, 'header__nav--fixed': isFixed, 'header__nav--hidden': isHidden}">
            <div class="container">
                <div class="header__nav-items">
                    <a href="#about" class="header__nav-item">О компании</a>
                    <a href="#services" class="header__nav-item">Услуги</a>
                    <a href="#prices" class="header__nav-item">Цены</a>
                    <a href="#cases" class="header__nav-item">Кейсы</a>
                    <a href="#industry-solutions" class="header__nav-item">Отраслевые решения</a>
                    <a href="#reviews" class="header__nav-item">Отзывы</a>
                    <a href="#contacts" class="header__nav-item">Контакты</a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'ItegoHeader',
  data() {
    return {
        isPhoneVisible: false,
        isFixed: false,
        isHidden: false,
        lastScrollTop: 0,
    }
  },
  methods: {
    togglePhoneVisibility() {
        this.isPhoneVisible = true;
    },
    handleScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > this.lastScrollTop && currentScroll > 50) {
            this.isHidden = true;
        } else {
            this.isHidden = false;
        }

        this.isFixed = currentScroll > 100;
        this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    },
    scrollToSection(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
          behavior: 'smooth',
        });
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.querySelectorAll('.header__nav-item').forEach(item => {
      item.addEventListener('click', this.scrollToSection);
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    document.querySelectorAll('.header__nav-item').forEach(item => {
      item.removeEventListener('click', this.scrollToSection);
    });
  },
}
</script>

<style lang="scss">
.header {
    padding-top: 35px;
    &__contact-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__logo {
        cursor: pointer;
        img {
            width: 106px;
        }
    }
    &__phone {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 20px;
        margin-right: 49px;
        a {
            color: black;
        }
    }
    &__btn {
        cursor: pointer;
        font-size: 12px;
        background-color: #1565C0;
        color: white;
        padding: 10px 15px;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 11px;
        border-radius: 1px;
        margin-right: 20px;
    }
    &__contacts {
        display: flex;
        align-items: center;
    }
    &__social-networks {
        display: flex;
        align-items: center;
        img {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            margin-left: 9px;
        }
    }
    &__nav {
        margin-top: 42px;
        // display: flex;
        // align-items: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 15px;
        transition: top 0.3s ease-in-out;
        a {
            color: black;
        }
        &--fixed {
            margin-top: 0;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 30px 0;
            z-index: 50;
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
            border-bottom: 1px solid #e2e2e2;
        }
        &--hidden {
            // top: -100px;
        }
        &-items {
            display: flex;
            align-items: center;
        }
        &-item {
            cursor: pointer;
            margin-right: 20px;
        }
    }
}
</style>
