<template>
  <section class="itego-faq">
    <div class="container">
      <div class="itego-faq__title">
        Знаем, что Вас волнует
      </div>

      <div v-if="loading">Загрузка…</div>
      <div v-else-if="error" style="color:#c00">{{ error }}</div>

      <ItegoFAQitem
        v-else
        v-for="item in faqList"
        :key="item.id"
        :title="item.title"
        :text="item.text"
      />
    </div>
  </section>
</template>

<script>
import ItegoFAQitem from './ItegoFAQitem.vue'
import PocketBase from 'pocketbase'

// тот же источник URL, что и в работающем компоненте
const PB_URL = process.env.VUE_APP_PB_URL || 'https://pb.itego.pro'
const pb = new PocketBase(PB_URL)

export default {
  name: 'ItegoFAQ',
  components: { ItegoFAQitem },
  data() {
    return {
      faqList: [],
      loading: true,
      error: ''
    }
  },
  methods: {
    async fetchFaq() {
      try {
        // берём по порядку создания (по возрастанию)
        const items = await pb.collection('faq').getFullList({
          sort: 'created',
          // можно сузить поля, если хочешь:
          // fields: 'id,question,answer,created'
        })

        this.faqList = items.map(rec => ({
          id: rec.id,
          title: rec.question,
          text: rec.answer
        }))

        if (!this.faqList.length) {
          this.error = 'FAQ пока пуст'
        }
      } catch (e) {
        console.error('[ItegoFAQ] fetchFaq error:', e)
        // 404 тут чаще всего из-за неверного пути/правил/имени коллекции,
        // но раз другой компонент ходит — базовый URL норм.
        // Проверь точное имя коллекции: `faq`
        this.error = 'Не удалось загрузить FAQ'
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    this.fetchFaq()
  }
}
</script>

<style lang="scss">
.itego-faq {
  padding: 65px 0;
  &__title {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 45px;
    color: #1565C0;
    padding-bottom: 50px;
    border-bottom: 2px solid #1565C0;
  }
}
</style>

<style lang="scss">
@media screen and (max-width: 768px) {
  .itego-faq {
    &__title { font-size: 30px; }
  }
}
@media screen and (max-width: 425px) {
  .itego-faq {
    &__title { font-size: 20px; }
  }
}
</style>
