import router from '@/router'
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
  const makeApiCall = async (params: any) => {
    isLoading.value = true
    try {
      const result = await axios.request(params)
      response.value = result.data
    } catch (error: any) {
      if (!error.response) {
        console.log('Сервер не отвечает')
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
        //any other error from server
      } else {
        console.log('Ошибка на стороне сервера')
      }
    } finally {
      isLoading.value = false
    }
  }

  return { response, isLoading, makeApiCall }
}
