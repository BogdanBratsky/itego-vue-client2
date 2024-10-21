<template>
    <header class="header">
        <div class="container">
            <nav class="header__contact-nav">
                <div class="header__wrap">
                    <div class="header__logo">
                        <img src="../assets/images/contacts/logo.svg" alt="">
                    </div>
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
                    <div @click="showForm" class="header__btn">
                        Получить консультацию
                    </div>
                    <div class="header__social-networks">
                        <a href="https://t.me/itegoproinfo" target="_blank">
                            <img src="../assets/images/contacts/tg.svg" alt="">
                        </a>
                        <a href="https://www.instagram.com/itegopro/" target="_blank">
                            <img src="../assets/images/contacts/ig.svg" alt="">
                        </a>
                        <a href="https://vk.com/itegopro" target="_blank">
                            <img src="../assets/images/contacts/vk.svg" alt="">
                        </a>
                    </div>
                </div>
                <div class="header__burger">
                    &#9776;	
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
                    <router-link to="/blog" class="header__nav-item">Блог</router-link>
                    <a href="#contacts" class="header__nav-item">Контакты</a>
                </div>
            </div>
        </nav>
    </header>

    <ItegoModalForm v-if="isOpen" @close="showForm"/>
</template>

<script>
import ItegoModalForm from './ItegoModalForm.vue'

export default {
    name: 'ItegoHeader',
    data() {
        return {
            isPhoneVisible: false,
            isFixed: false,
            isHidden: false,
            lastScrollTop: 0,
            isOpen: false,
        }
    },
    components: {
        ItegoModalForm
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
        showForm() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
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

<style lang="scss" scoped>
.container {
    margin: 0 auto;
}

.header {
    margin: 0 auto;
    &__contact-nav {
        padding: 16px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    &__wrap {
        display: flex;
        align-items: center;
    }
    &__logo {
        cursor: pointer;
        img {
            width: 106px;
        }
    }
    &__blog {
        padding: 7px 14px;
        background-color: #1565C0;
        border-radius: 2px;
        color: white;
        margin-left: 20px;
        font-size: 12px;
        font-weight: 600;
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
        padding: 7px 14px;
        background-color: #1565C0;
        border-radius: 2px;
        color: white;
        margin: 0 20px;
        font-size: 12px;
        font-weight: 600;
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
            margin-left: 15px;
            width: 25px;
            // box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
    &__nav {
        background-color: #C7E7EF;
        padding-top: 20px;
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
            padding: 22px 0;
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
            &:hover {
                text-decoration: underline;
            }
        }
    }
    &__burger {
        display: none;
        font-size: 24px;
        color: #1565C0;
    }
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
    // .container {
    //     width: 768px;
    // }
    .header__logo {
        display: none;
    }
}
</style>

<!-- <style lang="scss" scoped>
@media screen and (max-width: 1024px) {
    .container {
        display: flex;
        justify-content: center;
    }
}

@media screen and (max-width: 768px) {
    .header {
        margin: 0 auto;
        &__logo {
            img {
                width: 78px;
            }
        }
        &__contacts {
            display: none;
        }
        &__blog {
            font-size: 12px;
        }
        &__burger {
            display: block;
        }
        &__nav {
            display: none;
        }
    }
}
@media screen and (max-width: 320px) {
    .header {
        &__blog {
            display: none;
        }
    }
}
</style> -->