<template>
  <router-link
    :to="BOOKS_PATH + `/${bookStore.readingBooks[0]?.id}`"
    :class="[
      'progressReadingBlock',
      {
        progressReadingBlock_wide: place === 'home',
      },
    ]"
  >
    <h2
      :class="[
        'progressReadingBlock__title',
        {
          progressReadingBlock__title_wide: place === 'home',
        },
      ]"
    >
      {{ title }}
    </h2>
    <div
      :class="[
        'progressReadingBlock__bookBlock',
        {
          progressReadingBlock__bookBlock_wide: place === 'home',
        },
      ]"
    >
      <BookImage
        v-if="place === 'home'"
        :place="place"
        :image="bookStore.readingBooks[0]?.image"
        :title="bookStore.readingBooks[0]?.name"
      />

      <div
        :class="[
          'progressReadingBlock__details',
          {
            progressReadingBlock__details_wide: place === 'home',
          },
        ]"
      >
        <div>
          <p
            :class="[
              'progressReadingBlock__detailsTitle',
              {
                progressReadingBlock__detailsTitle_wide: place === 'home',
              },
            ]"
          >
            {{ bookStore.readingBooks[0]?.name }}
          </p>
          <p
            :class="[
              'progressReadingBlock__detailsAuthor',
              {
                progressReadingBlock__detailsAuthor_wide: place === 'home',
              },
            ]"
          >
            {{ bookStore.readingBooks[0]?.author }}
          </p>
        </div>

        <ProgressBarDetails :progress="bookStore.readingBooks[0]?.progress" />
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { BOOKS_PATH } from '@/mock/routes'
import BookImage from '../book/BookImage.vue'
import ProgressBarDetails from './ProgressBarDetails.vue'
import { useBookStore } from '@/stores/book-store'

const bookStore = useBookStore()

const { title } = defineProps(['place', 'title'])

const isLoading = ref(false)

async function getStoreData() {
  isLoading.value = false
  try {
    isLoading.value = true
    await bookStore.loadReadingBooks()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getStoreData()
})
</script>

<style scoped>
.progressReadingBlock {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}
.progressReadingBlock_wide {
  gap: 16px;
}
.progressReadingBlock__title {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color-primary);
}
.progressReadingBlock__title_wide {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 19px;
  line-height: 28px;
}
.progressReadingBlock__bookBlock {
  display: flex;
  gap: 24px;
  width: 100%;
  background: var(--white-thirdly);
  border-radius: var(--border-radius-l);
  box-shadow: var(--shadow-thirdly);
  padding: 12px;
}
.progressReadingBlock__bookBlock_wide {
  box-shadow: var(--shadow-fourthly);
  backdrop-filter: blur(8px);
  padding: 24px;
}
.progressReadingBlock__details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.progressReadingBlock__details_wide {
  gap: 12px;
}
.progressReadingBlock__detailsTitle {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-primary);
}
.progressReadingBlock__detailsTitle_wide {
  font-size: 17px;
  line-height: 28px;
}
.progressReadingBlock__detailsAuthor {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-color-secondary);
}
.progressReadingBlock__detailsAuthor_wide {
  font-size: 16px;
  line-height: 24px;
}

@media (max-width: 767px) {
  .progressReadingBlock__bookBlock {
    gap: 12px;
  }
  .progressReadingBlock__bookBlock_wide {
    padding: 20px 10px;
  }
}
</style>
