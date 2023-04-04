import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HomeHeadSearchResetButton from '@/components/home-head-search/HomeHeadSearchResetButton.vue'

describe('HomeHeadSearchResetButton', () => {
  it('emits event on click', () => {
    const wrapper = mount(HomeHeadSearchResetButton)
    const button = wrapper.get('button')
    button.trigger('click')
    expect(wrapper.emitted().clicked).toHaveLength(1)
  })
})
