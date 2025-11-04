<template>
    <div class="load-more">
        Загрузить ещё
    </div>
</template>

<script>
export default {
    name: 'ItegoLoadMore'
}
</script>

<style lang="scss">
.load-more {
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px;
    background-color: white;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    margin-bottom: 12px;
    font-size: 20px;
    &:hover {
        background-color: #f0f0f0;
        transition: 0.2s;
    }
}
</style>