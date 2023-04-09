import type IRoom from '@/interfaces/IRoom'
import router from '@/router'
import { io, Socket } from 'socket.io-client'
import type { Ref } from 'vue'

export function useSocket(
  room: IRoom,
  socket: Ref<Socket | undefined>,
  isLoading: Ref<boolean>,
  messages: Ref<Array<any> | undefined>,
  members: Ref<Array<string> | undefined>
) {
  socket.value = io('ws://localhost:3000')
  socket.value.io.on('reconnect', () => {
    socket.value!.emit('user-join', {
      room: room.name,
      token: localStorage.token
    })
  })
  socket.value.on('401', () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/enter')
  })
  socket.value.on('welcome', (data) => {
    isLoading.value = false
    messages.value = data.messages
    members.value = data.members
  })
  socket.value.on('user-join', (data) => {
    members.value = data.members
    const ID = 'join-' + Date.now()
    messages.value = messages.value?.concat({ ...data.message, _id: ID })
  })
  socket.value.on('user-leave', (data) => {
    const ID = 'leave-' + Date.now()
    messages.value = messages.value?.concat({ ...data.message, _id: ID })
    members.value = data.members
  })
  socket.value.on('message-broadcast', (data) => {
    const ID = 'msg-' + Date.now()
    messages.value = messages.value?.concat({ ...data, _id: ID })
  })

  if (!room.private) {
    isLoading.value = true
    socket.value.emit('user-join', {
      room: room.name,
      token: localStorage.token
    })
  }
}
