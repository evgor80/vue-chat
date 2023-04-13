import { flushPromises, mount } from '@vue/test-utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { describe, expect, it } from 'vitest'
import HomeContainer from '@/containers/HomeContainer.vue'
import router from '@/router'
import { setActivePinia, createPinia } from 'pinia'

const rooms = [
  {
    id: '1',
    name: 'oooo',
    slug: 'oooo',
    members: 0,
    messages: 5,
    private: true,
    createdAt: '1'
  },
  {
    id: '2',
    name: 'aaa',
    slug: 'aaa',
    members: 23,
    messages: 25,
    private: false,
    createdAt: '2'
  },
  {
    id: '3',
    name: 'ffaa',
    slug: 'ffaa',
    members: 18,
    messages: 3,
    private: true,
    createdAt: '3'
  }
]

describe('HomeContainer', () => {
  setActivePinia(createPinia())
  const mock = new MockAdapter(axios)
  mock.onGet('http://localhost:3000/api/v1/rooms').reply(200, { rooms })

  it('sorts chat rooms', async () => {
    const wrapper = mount(HomeContainer, {
      global: {
        plugins: [router]
      }
    })
    await flushPromises()

    const button = wrapper.get('button')
    await button.trigger('click')
    let sortButton = wrapper
      .findAll('button')
      .filter((b) => b.text() === 'По количеству участников')[0]
    await sortButton.trigger('click')
    let list = wrapper.findAll('li')
    expect(list[0].element.innerHTML).toContain('/room/aaa')
    expect(list[1].element.innerHTML).toContain('/room/ffaa')
    expect(list[2].element.innerHTML).toContain('/room/oooo')
    await button.trigger('click')
    sortButton = wrapper.findAll('button').filter((b) => b.text() === 'По умолчанию')[0]
    await sortButton.trigger('click')
    list = wrapper.findAll('li')
    expect(list[0].element.innerHTML).toContain('/room/oooo')
    expect(list[1].element.innerHTML).toContain('/room/aaa')
    expect(list[2].element.innerHTML).toContain('/room/ffaa')
    await button.trigger('click')
    sortButton = wrapper.findAll('button').filter((b) => b.text() === 'По количеству сообщений')[0]
    await sortButton.trigger('click')
    list = wrapper.findAll('li')
    expect(list[0].element.innerHTML).toContain('/room/aaa')
    expect(list[1].element.innerHTML).toContain('/room/oooo')
    expect(list[2].element.innerHTML).toContain('/room/ffaa')
    await button.trigger('click')
    sortButton = wrapper.findAll('button').filter((b) => b.text() === 'По умолчанию')[0]
    await sortButton.trigger('click')
    await button.trigger('click')
    sortButton = wrapper.findAll('button').filter((b) => b.text() === 'По типу чата')[0]
    await sortButton.trigger('click')
    list = wrapper.findAll('li')
    expect(list[0].element.innerHTML).toContain('/room/aaa')
  })
  it("searches chat rooms based on input's value", async () => {
    const wrapper = mount(HomeContainer, {
      global: {
        plugins: [router]
      }
    })
    await flushPromises()
    const input = wrapper.get('input')
    await input.setValue('aa')
    expect(wrapper.findAll('li').length).toBe(2)
    await input.setValue('fa')
    expect(wrapper.findAll('li').length).toBe(1)
    await input.setValue('aa')
    expect(wrapper.findAll('li').length).toBe(2)
    const closeButton = wrapper.get("button[aria-label='Сбросить поиск']")
    await closeButton.trigger('click')
    expect(wrapper.findAll('li').length).toBe(3)
  })
})
