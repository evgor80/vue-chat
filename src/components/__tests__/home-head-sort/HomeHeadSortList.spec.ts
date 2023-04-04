import { describe, expect, it, vi } from 'vitest'
import HomeHeadSortList from '@/components/home-head-sort/HomeHeadSortList.vue'
import { mount } from '@vue/test-utils'
import { sortKey } from '@/keys'

describe('HomeHeadSortList', () => {
  const options = [
    { title: 'По умолчанию', type: 'default' },
    { title: 'По количеству участников', type: 'members' },
    { title: 'По количеству сообщений', type: 'messages' },
    { title: 'По типу чата', type: 'type' }
  ]
  const onChange = vi.fn()
  const wrapper = mount(HomeHeadSortList, {
    global: {
      provide: {
        [sortKey as symbol]: onChange
      }
    }
  })
  const buttons = wrapper.findAll('button')
  it('renders list of buttons', () => {
    buttons.forEach((b, i) => expect(b.text()).toBe(options[i].title))
  })
  it('calls function with corresponding argument', async () => {
    for (const b of buttons) {
      await b.trigger('click')
    }
    onChange.mock.calls.forEach((c, i) => expect(c[0]).toBe(options[i].type))
  })
  it('emits event on click', async () => {
    const wrapper = mount(HomeHeadSortList, {
      global: {
        provide: {
          [sortKey as symbol]: onChange
        }
      }
    })
    const buttons = wrapper.findAll('button')
    await buttons[0].trigger('click')
    expect(wrapper.emitted().clicked).toHaveLength(1)
  })
})
