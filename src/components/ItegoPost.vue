<template>
  <div class="post-card">
    <RouterLink :to="'/blog/' + article.id">
      <div class="post-card__title">{{ article.title }}</div>
    </RouterLink>

    <div class="post-card__info">
      <RouterLink :to="'/blog/categories/' + article.category">
        <div class="post-card__category">
          {{ categoryTitle || '...' }}
        </div>
      </RouterLink>
      <div class="post-card__date">
        <img src="../assets/images/interface/calendar.svg" alt="" />
        {{ formatDate(article.createdAt) }}
      </div>
    </div>
  </div>
</template>

<script>
import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.VUE_APP_PB_URL || 'https://pb.itego.pro')

// Отключаем автоотмену запросов (иначе ловим ошибку AbortError)
pb.autoCancellation(false)

export default {
  name: 'ItegoPost',
  props: {
    article: Object
  },
  data() {
    return {
      categoryTitle: ''
    }
  },
  async mounted() {
    console.log("Категория: ", this.article.category)
    console.log("typeof category:", typeof this.article.category)

    try {
      const res = await pb.collection('categories').getOne(this.article.category)
      console.log("Категория найдена:", res)
      this.categoryTitle = res.name
    } catch (err) {
      console.warn('[ItegoPost] ❌ Не удалось получить категорию:', err)
      this.categoryTitle = 'Без категории'
    }
  },
  methods: {
    formatDate(isoDate) {
      const date = new Date(isoDate)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      return `${day}.${month}.${year}, ${hours}:${minutes}`
    }
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

.post-card {
  width: 900px;
  padding: 25px;
  background-color: white;
  box-shadow: 0 0 12px #dfdfdf;
  margin-bottom: 10px;
  border-radius: 8px;
  color: #3b3b3b;

  &:active {
    box-shadow: 0 0 15px #dfdfdf;
  }

  &__title {
    color: black;
    font-size: 34px;
    margin-bottom: 20px;
    &:hover {
      color: $btnHoverCol;
      transition: 0.2s;
    }
  }

  &__text {
    margin: 20px 0;
    font-size: 17px;
  }

  &__info {
    padding-top: 20px;
    border-top: 1px solid #eeeeee;
    display: flex;
    align-items: center;
  }

  &__category {
    cursor: pointer;
    color: black;
    border: 1px solid #e7e7e7;
    box-shadow: 0 0 10px #e4e4e4;
    border-radius: 4px;
    padding: 4px 8px;
    margin-right: 20px;
    font-size: 15px;
  }

  &__date {
    display: flex;
    align-items: center;
    img {
      max-width: 14px;
      margin-right: 8px;
    }
  }
}
</style>
