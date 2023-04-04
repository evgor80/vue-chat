import { describe, expect, it } from 'vitest'
import HomeHeadSearchInput from '@/components/home-head-search/HomeHeadSearchInput.vue'
import { mount } from '@vue/test-utils'
describe('HomeHeadSearchInput', () => {
  it('renders value given via prop', async () => {
    const wrapper = mount(HomeHeadSearchInput, {
      props: { value: 'test' }
    })

    const input = wrapper.get('input')
    expect(input.element.value).toBe('test')
  })
  it('emits event on input change', async () => {
    const wrapper = mount(HomeHeadSearchInput, {
      props: { value: 'test' }
    })

    const input = wrapper.get('input')
    await input.setValue('test1')
    expect(wrapper.emitted().changed).toHaveLength(1)
  })
})
