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
    try {
      const res = await pb.collection('categories').getOne(this.article.category)
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
  padding: 25px 0;
  // background-color: white;
  // box-shadow: 0 0 12px #dfdfdf;
  margin-bottom: 10px;
  color: #3b3b3b;
  border-top: 1px solid #eeeeee;

  &__title {
    color: black;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 22px;
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
    // padding: 12px 0;
    // border-top: 1px solid #eeeeee;
    display: flex;
    align-items: center;
  }

  &__category {
    cursor: pointer;
    color: black;
    border: 1px solid #e7e7e7;
    box-shadow: 0 0 4px #f3f3f3;
    border-radius: 4px;
    padding: 4px 8px;
    margin-right: 10px;
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

<style scoped>
/* ====== АДАПТИВ КАРТОЧКИ ПОСТА ====== */

@media (max-width: 1024px) {
  .post-card {
    width: 100%;
    padding: 22px 0;
  }

  .post-card__title {
    font-size: 22px;
    padding-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .post-card {
    padding: 20px 0;
  }

  .post-card__title {
    font-size: 20px;
    padding-bottom: 16px;
  }

  .post-card__info {
    flex-wrap: wrap;
    gap: 10px;
  }

  .post-card__category {
    font-size: 14px;
    padding: 3px 7px;
  }

  .post-card__date {
    font-size: 14px;

    img {
      max-width: 12px;
      margin-right: 6px;
    }
  }
}

@media (max-width: 480px) {
  .post-card {
    padding: 18px 0;
  }

  .post-card__title {
    font-size: 18px;
    padding-bottom: 14px;
  }

  .post-card__category {
    font-size: 13px;
    padding: 3px 6px;
    margin-right: 6px;
  }

  .post-card__date {
    font-size: 13px;
  }
}

</style>