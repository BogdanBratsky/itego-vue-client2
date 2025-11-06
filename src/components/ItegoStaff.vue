<template>
  <section class="itego-staff">
    <div class="container">
      <div class="itego-staff__title">
        Собственный штат высококвалифицированных IT-специалистов
      </div>

      <div class="itego-staff__subtitle">
        Сложные задачи решают уверенно и эффективно
      </div>

      <div v-if="loading">Загрузка…</div>
      <div v-else-if="error" style="color:#c00">{{ error }}</div>

      <ItegoStaffPerson
        v-else-if="staffList.length"
        :key="currentPerson.id"
        :name="currentPerson.name"
        :post="currentPerson.post"
        :superpower="currentPerson.superpower"
        :facts="currentPerson.facts"
        :photo="currentPerson.photo"
      />
      
      <div class="itego-staff__controls" v-if="!loading && !error && staffList.length">
        <button class="itego-staff__circle-btn" @click="prevPerson">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div class="itego-staff__dots">
          <span
            v-for="(person, index) in staffList"
            :key="person.id || index"
            :class="['itego-staff__dot', { active: index === currentIndex }]"
            @click="currentIndex = index"
          ></span>
        </div>

        <button class="itego-staff__circle-btn" @click="nextPerson">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ItegoStaffPerson from './ItegoStaffPerson.vue'
import PocketBase from 'pocketbase'

const PB_URL = process.env.VUE_APP_PB_URL || 'https://pb.itego.pro'
const pb = new PocketBase(PB_URL)

export default {
  name: 'ItegoStaff',
  components: { ItegoStaffPerson },
  data() {
    return {
      currentIndex: 0,
      touchStartX: 0,
      touchEndX: 0,
      staffList: [],
      loading: true,
      error: ''
    }
  },
  computed: {
    currentPerson() {
      return this.staffList[this.currentIndex] || {
        name: '',
        post: '',
        superpower: '',
        facts: [],
        photo: ''
      }
    }
  },
  methods: {
    async fetchEmployees() {
      try {
        const items = await pb.collection('employees').getFullList({
          sort: 'created'
        })
        this.staffList = items.map((rec) => ({
          id: rec.id,
          name: rec.name,
          post: rec.job,
          superpower: rec.superpower,
          facts: Array.isArray(rec.list) ? rec.list : [],
          photo: pb.files.getUrl(rec, rec.img, { thumb: '800x0' })
        }))
        if (!this.staffList.length) {
          this.error = 'Сотрудники пока не добавлены'
        }
      } catch (e) {
        console.error('[ItegoStaff] fetchEmployees error:', e)
        this.error = 'Не удалось загрузить сотрудников'
      } finally {
        this.loading = false
      }
    },
    nextPerson() {
      if (!this.staffList.length) return
      this.currentIndex = (this.currentIndex + 1) % this.staffList.length
    },
    prevPerson() {
      if (!this.staffList.length) return
      this.currentIndex = (this.currentIndex - 1 + this.staffList.length) % this.staffList.length
    },
    onTouchStart(e) {
      this.touchStartX = e.changedTouches[0]?.screenX || 0
    },
    onTouchEnd(e) {
      this.touchEndX = e.changedTouches[0]?.screenX || 0
      this.handleSwipe()
    },
    handleSwipe() {
      const diff = this.touchEndX - this.touchStartX
      if (Math.abs(diff) > 50) {
        diff < 0 ? this.nextPerson() : this.prevPerson()
      }
    }
  },
  mounted() {
    window.addEventListener('touchstart', this.onTouchStart, { passive: true })
    window.addEventListener('touchend', this.onTouchEnd, { passive: true })
    this.fetchEmployees()
  },
  beforeUnmount() {
    window.removeEventListener('touchstart', this.onTouchStart)
    window.removeEventListener('touchend', this.onTouchEnd)
  }
}
</script>

<style lang="scss" scoped>
.itego-staff {
  padding: 30px 0;
  background-color: #ffffff;
  text-align: center;

  &__title {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 45px;
    color: #1565C0;
    margin-bottom: 15px;
  }

  &__subtitle {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 41px;
  }

  &__controls {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  &__circle-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid #1565C0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #1565C0;
      svg { stroke: white; }
    }

    svg { stroke: #1565C0; }
  }

  &__dots {
    display: flex;
    gap: 10px;
  }

  &__dot {
    width: 10px;
    height: 10px;
    background: #ccc;
    border-radius: 50%;
    cursor: pointer;

    &.active { background: #1565C0; }
  }
}

@media screen and (max-width: 768px) {
  .itego-staff {
    &__title { font-size: 18px; }
    &__subtitle { font-size: 14px; }
  }
}

@media screen and (max-width: 425px) {
  .itego-staff {
    &__circle-btn { width: 36px; height: 36px; }
    &__subtitle { font-size: 12px; }
  }
}
</style>
