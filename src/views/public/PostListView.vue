<template>
  <div class="posts-list">
    <header class="posts-list__header">{{ headerTitle }}</header>

    <div v-if="loading">Загрузка…</div>
    <div v-else-if="error" style="color:#c00">{{ error }}</div>

    <ItegoPost
      v-else
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />

    <ItegoLoadMore
      v-if="!loading && !error && totalCount > articles.length"
      @click="loadArticles"
    />
  </div>
</template>

<script>
import PocketBase from 'pocketbase'
import ItegoPost from '../../components/ItegoPost.vue'
import ItegoLoadMore from '../../components/ItegoLoadMore.vue'

const PB_URL = process.env.VUE_APP_PB_URL || 'https://pb.itego.pro'
const pb = new PocketBase(PB_URL)

export default {
  name: 'PostListView',
  components: { ItegoPost, ItegoLoadMore },

  data() {
    return {
      articles: [],
      totalCount: 0,
      page: 1,
      limit: 20,
      loading: false,
      error: '',
      categoryName: ''
    }
  },

  computed: {
    categoryId() {
      return this.$route.params.id || null
    },
    headerTitle() {
      return this.categoryId ? this.categoryName || 'Категория' : 'Все записи'
    }
  },

  methods: {
    async loadArticles() {
      this.loading = true
      try {
        const options = {
          sort: '-created',
          expand: 'category',
          fields: 'id,title,content,created,category,expand.category.name'
        }

        if (this.categoryId) {
          options.filter = `category="${this.categoryId}"`
        }

        const res = await pb.collection('articles').getList(this.page, this.limit, options)

        const mapped = res.items.map(r => ({
          id: r.id,
          title: r.title ?? '',
          createdAt: r.created,
          content: r.content ?? '',
          category: r.category,
          categoryName: r.expand?.category?.name || ''
        }))

        if (this.page === 1) {
          if (this.categoryId && mapped.length) {
            this.categoryName = mapped[0].categoryName
            document.title = this.categoryName
          } else {
            document.title = 'Блог'
          }
        }

        this.articles = [...this.articles, ...mapped]
        this.totalCount = res.totalItems
        this.page++
      } catch (e) {
        console.error('[PostListView] loadArticles error:', e)
        this.error = 'Не удалось загрузить статьи'
      } finally {
        this.loading = false
      }
    },

    resetAndLoad() {
      this.articles = []
      this.page = 1
      this.totalCount = 0
      this.categoryName = ''
      this.loadArticles()
    }
  },

  mounted() {
    this.resetAndLoad()
  },

  watch: {
    '$route.params.id'() {
      this.resetAndLoad()
    }
  }
}
</script>

<style lang="scss">
.posts-list {
  &__header {
    font-size: 34px;
    font-weight: 600;
    border-radius: 8px;
    margin-bottom: 12px;
  }
}
</style>
