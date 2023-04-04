import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HomeHeadSortContainer from '@/containers/HomeHeadSortContainer.vue'

describe('HomeHeadSortContainer', () => {
  it('displays/hides list on button click', async () => {
    const wrapper = mount(HomeHeadSortContainer)
    const button = wrapper.get('button')
    expect(wrapper.find('ul').exists()).toBeFalsy
    await button.trigger('click')
    expect(wrapper.find('ul').exists()).toBeTruthy
    await button.trigger('click')
    expect(wrapper.find('ul').exists()).toBeFalsy
  })
})
