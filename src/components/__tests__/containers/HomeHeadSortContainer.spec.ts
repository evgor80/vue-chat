import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import HomeHeadSortContainer from '@/containers/HomeHeadSortContainer.vue'
import { sortKey } from '@/keys'

describe('HomeHeadSortContainer', () => {
  it('displays/hides list on button click', async () => {
    const wrapper = mount(HomeHeadSortContainer, {
      global: {
        provide: {
          [sortKey as symbol]: vi.fn()
        }
      }
    })
    const button = wrapper.get('button')
    expect(wrapper.find('ul').exists()).toBeFalsy
    await button.trigger('click')
    expect(wrapper.find('ul').exists()).toBeTruthy
    await button.trigger('click')
    expect(wrapper.find('ul').exists()).toBeFalsy
  })
})
