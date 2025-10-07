import { ref } from 'vue'

export function useStatus(progress) {
  const isStatusPlanned = ref(null)
  const isStatusReading = ref(null)
  const isStatusDone = ref(null)

  if (progress === 0) isStatusPlanned.value = 'Запланировано'
  if (progress > 0 && progress < 100) isStatusReading.value = 'Читаю'
  if (progress === 100) isStatusDone.value = 'Прочитано'

  return { isStatusPlanned, isStatusReading, isStatusDone }
}
