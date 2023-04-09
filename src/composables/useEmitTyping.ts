import type IRoom from '@/interfaces/IRoom'
import type { Socket } from 'socket.io-client'
import { ref, watch, type Ref } from 'vue'

export function useEmitTyping(newMessage: Ref<string>, socket?: Socket, room?: IRoom) {
  const isUserTyping = ref(true)

  watch(newMessage, () => {
    if (newMessage.value.length) emitTypingEvent()
  })

  const emitTypingEvent = () => {
    if (isUserTyping.value === true) {
      socket?.emit('user-typing', {
        type: 'typing',
        user: localStorage.user,
        room: room?.name
      })

      isUserTyping.value = false
      setTimeout(() => {
        isUserTyping.value = true
      }, 1000)
    }
  }
}
