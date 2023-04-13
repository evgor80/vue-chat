import { useAxios } from '@/composables/useAxios'
import { describe, expect, it } from 'vitest'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { setActivePinia, createPinia } from 'pinia'

describe('useAxios', () => {
  setActivePinia(createPinia())
  const mock = new MockAdapter(axios)
  it('makes requests to server and changes response respectively', async () => {
    const { response, makeApiCall } = useAxios()
    mock
      .onPost('http://localhost:3000/api/v1/users/login')
      .reply(401, { message: 'Неверное имя пользователя или пароль' })
    await makeApiCall({
      method: 'POST',
      url: '/users/login',
      data: {
        username: 'test',
        password: 'test'
      }
    })
    expect(response.value.error).toBeDefined()

    mock.onGet('http://localhost:3000/api/v1/users').reply(200, {
      users: [{ id: 1, name: 'John Smith' }]
    })
    await makeApiCall({
      method: 'GET',
      url: '/users'
    })
    expect(response.value.users.length).toBe(1)
  })
  it('changes isLoading value depending on request state', async () => {
    const { isLoading, makeApiCall } = useAxios()

    expect(isLoading.value).toBeFalsy()
    makeApiCall({
      method: 'POST',
      url: '/users/login',
      data: {
        username: 'test',
        password: 'test'
      }
    })
    expect(isLoading.value).toBeTruthy()
    await makeApiCall({
      method: 'POST',
      url: '/users/login',
      data: {
        username: 'test',
        password: 'test'
      }
    })
    expect(isLoading.value).toBeFalsy()
  })
})
