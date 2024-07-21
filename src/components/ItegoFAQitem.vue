<template>
    <article class="faq-item">
        <div class="faq-item__title" @click="toggleText">
            {{ title }}
            <img :class="{'rotated': isTextVisible}" src="../assets/images/plus.svg" alt="">
        </div>
        <transition name="fade">
            <div v-if="isTextVisible" class="faq-item__text">
                {{ text }}
            </div>
        </transition>
    </article>
</template>

<script>
export default {
    name: 'ItegoFAQitem',
    props: ['text', 'title'],
    data() {
        return {
            isTextVisible: false
        };
    },
    methods: {
        toggleText() {
            this.isTextVisible = !this.isTextVisible;
        }
    }
};
</script>

<style lang="scss">
.faq-item {
    padding: 20px 0;
    border-bottom: 2px solid #1565C0;
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }
    &__text {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 22px;
        overflow: hidden;
        margin: 20px 0;
    }
    .rotated {
        transform: rotate(45deg);
        transition: transform 0.3s ease;
    }
}

.fade-enter-active, .fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.fade-enter-to, .fade-leave {
    opacity: 1;
    transform: translateY(0);
}

</style>