import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import RoomList from '@/components/room/RoomList.vue'
import router from '@/router'

describe('RoomList', () => {
  it('displays message about network error', () => {
    const wrapper = mount(RoomList, { props: { isLoading: false } })
    expect(wrapper.html()).toContain('Не удалось получить данные с сервера')
  })
  it('displays message if array of rooms is empty', () => {
    const wrapper = mount(RoomList, { props: { list: [], isLoading: false } })
    expect(wrapper.html()).toContain('Нет чатов')
  })
  it('renders loader while loading list', () => {
    const wrapper = mount(RoomList, { props: { isLoading: true } })
    expect(wrapper.html()).toContain('Загрузка...')
  })
  it('renders list of rooms if any', () => {
    const room = {
      id: '1',
      name: 'name',
      slug: 'slug',
      members: 0,
      messages: 5,
      private: true,
      createdAt: 'today'
    }
    const list = Array(4)
      .fill('')
      .map(() => ({ ...room, id: Math.random().toString() }))

    const wrapper = mount(RoomList, {
      props: { list, isLoading: false },
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findAll('li').length).toBe(4)
  })
})
