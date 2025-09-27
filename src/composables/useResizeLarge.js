import { ref, onMounted, onUnmounted } from 'vue'

const isScreenLarge = ref(null)
const windowWidth = ref(null)

export function useResizeLarge() {
  onMounted(() => {
    window.addEventListener('resize', resizeHandler)
    resizeHandler()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler)
  })

  const resizeHandler = () => {
    windowWidth.value = window.innerWidth

    if (windowWidth.value <= 1023) {
      isScreenLarge.value = true
      return
    }

    isScreenLarge.value = false
  }

  return {
    isScreenLarge,
  }
}
