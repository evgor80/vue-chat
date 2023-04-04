import { onBeforeUnmount, onMounted } from 'vue'

export function useClickOutside(ref: any, cb: () => void) {
  function handleClickOutside(event: any) {
    if (ref.value && !ref.value.contains(event.target)) {
      cb()
    }
  }
  onMounted(() => {
    window.addEventListener('click', handleClickOutside)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', handleClickOutside)
  })
}
