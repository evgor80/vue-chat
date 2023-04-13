import router from '@/router'
import { useNotificationStore } from '@/stores/notification'
import axios from 'axios'
import { ref } from 'vue'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

axios.interceptors.request.use(function (config) {
  if (localStorage.token) {
    config.headers!.Authorization = `Bearer: ${localStorage.token}`
  }
  return config
})

export function useAxios() {
  const response = ref<any>(undefined)
  const isLoading = ref(false)
  const { addNotification } = useNotificationStore()

  const makeApiCall = async (params: any) => {
    isLoading.value = true
    try {
      const result = await axios.request(params)
      response.value = result.data
    } catch (error: any) {
      if (!error.response) {
        addNotification('Сервер не отвечает', 'warning')
      } else if (error.response?.status === 401) {
        //if invalid credentials on login page
        if (error.response?.data?.message === 'Неверное имя пользователя или пароль') {
          response.value = { error: error.response?.data?.message }
          //if token is expired or broken
        } else {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          router.push('/enter')
        }
        //if username or chat room name is occupied
      } else if (error.response?.status === 409) {
        response.value = { status: 'failed' }
      } else if (error.response?.data?.message === 'Чат не найден') {
        addNotification('Чат не найден', 'warning')
        router.push('/')
      } else {
        //any other error from server
        addNotification('Ошибка на стороне сервера', 'warning')
      }
    } finally {
      isLoading.value = false
    }
  }

  return { response, isLoading, makeApiCall }
}
