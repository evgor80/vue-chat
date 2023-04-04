import { onBeforeUnmount, onMounted } from 'vue'

export default function useBlurHandle(ref: any, cb: () => void) {
  function handleClickOutside(event: any) {
    if (ref.value && !ref.value.contains(event.target)) {
      cb()
    }
  }
  onMounted(() => {
    window.addEventListener('keyup', handleClickOutside)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('keyup', handleClickOutside)
  })
}
