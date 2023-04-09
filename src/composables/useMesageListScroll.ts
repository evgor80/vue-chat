import { ref, onUpdated, type Ref, watch } from 'vue'

export function useMessageListScroll(messages: Ref<any>, windowRef: Ref<any>) {
  const isScrolled = ref(true)
  
  onUpdated(() => {
    if (!isScrolled.value && windowRef.value) {
      windowRef.value.scrollTop = windowRef.value.scrollHeight
      isScrolled.value = true
    }
  })

  watch(messages, () => {
    isScrolled.value = false
  })
}
