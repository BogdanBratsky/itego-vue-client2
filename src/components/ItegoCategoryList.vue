<template>
  <div>
    <aside class="category-list">
      <!-- <label class="category-list__title">Выбор категории</label> -->

      <router-link
        :to="`/blog`"
      >
        <div class="category-list__item">Все записи</div>
      </router-link>
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="`/blog/categories/${category.id}`"
      >
        <div class="category-list__item">{{ category.name }}</div>
      </router-link>

      <div v-if="loading">Загрузка категорий…</div>
      <div v-else-if="error" style="color:#c00">{{ error }}</div>
      <div v-else-if="!categories.length" class="category-list__empty">
        Нет категорий с постами
      </div>
    </aside>
  </div>
</template>

<script>
import PocketBase from 'pocketbase'

const PB_URL = process.env.VUE_APP_PB_URL || 'https://pb.itego.pro'
const pb = new PocketBase(PB_URL)

// отключаем автоотмену (иначе при смене маршрутов могут рваться запросы)
pb.autoCancellation(false)

export default {
  name: 'ItegoCategoryList',
  data() {
    return {
      categories: [],
      loading: false,
      error: ''
    }
  },
  methods: {
    async loadCategories() {
      this.loading = true
      this.error = ''
      try {
        // подгружаем связанные статьи через expand
        const res = await pb.collection('categories').getList(1, 200, {
          sort: 'created',
          expand: 'articles_via_category', // ⚠️ подставь имя relation из PB
          fields: 'id,name,expand.articles_via_category'
        })

        // оставляем только категории, где есть статьи
        this.categories = res.items.filter(
          (cat) => cat.expand?.articles_via_category?.length > 0
        )
      } catch (e) {
        console.error('[ItegoCategoryList] loadCategories error:', e)
        this.error = 'Не удалось загрузить категории'
      } finally {
        this.loading = false
      }
    }
  },
  created() {
    this.loadCategories()
  },
  watch: {
    $route() {
      this.loadCategories()
    }
  }
}
</script>

<style lang="scss">
.category-list {
  display: flex;
  flex-direction: column;
  // box-shadow: 0 0 12px #dfdfdf;
  border-radius: 8px 8px 2px 2px;

  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    padding: 12px;
    background-color: white;
    box-shadow: 0 6px 12px #dfdfdf;
    border-radius: 8px;
  }

  &__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 17px;
    padding: 12px 0;
    border-radius: 9px;
    width: 260px;
    color: #808080;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      padding: 12px 18px;
      background-color: #f0f7ff;
      transition: 0.4s;
    }
  }

  &__empty {
    font-size: 14px;
    color: #999;
    padding: 12px;
    text-align: center;
  }
}
</style>
