import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HomeHeadSortButton from '@/components/home-head-sort/HomeHeadSortButton.vue'

describe('HomeHeadSortButton', () => {
  it('emits event on click', () => {
    const wrapper = mount(HomeHeadSortButton)
    const button = wrapper.get('button')
    button.trigger('click')
    expect(wrapper.emitted().clicked).toHaveLength(1)        
  })
})
