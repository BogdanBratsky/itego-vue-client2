<template>
  <article class="itego-post">
    <div v-if="loading">Загрузка…</div>
    <div v-else-if="error" style="color:#c00">{{ error }}</div>

    <template v-else>
      <h1 class="itego-post__title">
        {{ view.title || 'Без названия' }}
      </h1>

      <div class="itego-post__meta">
        <span class="itego-post__date">{{ formatDate(view.createdAt || view.created) }}</span>
      </div>

      <div class="itego-post__content" v-html="view.content"></div>
    </template>
  </article>
</template>

<script>
import PocketBase from 'pocketbase'
const PB_URL = process.env.VUE_APP_PB_URL || 'https://pb.itego.pro'
const pb = new PocketBase(PB_URL)

export default {
  name: 'ItegoPost',
  props: {
    article: { type: Object, required: false, default: null },
    id: { type: String, required: false, default: '' }
  },
  data() {
    return {
      view: { id: '', title: '', content: '', createdAt: '' },
      loading: false,
      error: ''
    }
  },
  methods: {
    async fetchArticleById(id) {
      if (!id) {
        this.error = 'Не передан id записи'
        return
      }
      this.loading = true
      this.error = ''
      try {
        const rec = await pb.collection('articles').getOne(id, {
          fields: 'id,title,content,created'
        })
        this.view = {
          id: rec.id,
          title: rec.title ?? '',
          content: rec.content ?? '',
          createdAt: rec.created
        }
      } catch (e) {
        console.error('[ItegoPost] fetchArticle error:', e)
        this.error = 'Не удалось загрузить пост'
      } finally {
        this.loading = false
      }
    },
    formatDate(iso) {
      if (!iso) return ''
      const d = new Date(iso)
      const dd = String(d.getUTCDate()).padStart(2, '0')
      const mm = String(d.getUTCMonth() + 1).padStart(2, '0')
      const yyyy = d.getUTCFullYear()
      const hh = String(d.getUTCHours()).padStart(2, '0')
      const min = String(d.getUTCMinutes()).padStart(2, '0')
      return `${dd}.${mm}.${yyyy}, ${hh}:${min}`
    },
    initFromArticleProp() {
      const a = this.article || {}
      this.view = {
        id: a.id || '',
        title: a.title || '',
        content: a.content || a.text || a.body || '',
        createdAt: a.createdAt || a.created || ''
      }
    }
  },
  mounted() {
    if (this.article) {
      this.initFromArticleProp()
    } else if (this.id) {
      this.fetchArticleById(this.id)
    } else {
      this.error = 'Не передан id записи'
    }
  },
  watch: {
    id(newId, oldId) {
      if (!this.article && newId && newId !== oldId) {
        this.fetchArticleById(newId)
      }
    },
    article: {
      deep: true,
      handler() {
        if (this.article) this.initFromArticleProp()
      }
    }
  }
}
</script>

<style scoped>
.itego-post {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.itego-post__title {
  font-size: 32px;
  margin: 0 0 12px;
}

.itego-post__meta {
  font-size: 14px;
  opacity: 0.6;
  margin-bottom: 24px;
}

.itego-post__content {
  font-size: 16px;
  line-height: 1.7;
  word-wrap: break-word;
}

.itego-post__content h2,
.itego-post__content h3 {
  margin-top: 24px;
  margin-bottom: 12px;
}

.itego-post__content p {
  margin-bottom: 16px;
}

.itego-post__content ul {
  padding-left: 20px;
  margin-bottom: 16px;
}

.itego-post__content li {
  margin-bottom: 8px;
}

.itego-post__content a {
  color: #007BFF;
  text-decoration: underline;
}

.itego-post__content img {
  max-width: 100% !important;
  width: auto !important;
  height: auto !important;
  display: block;
  margin: 16px 0;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  object-fit: contain;
}

</style>
