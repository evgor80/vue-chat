import { mount } from '@vue/test-utils'
import HomeHeadSortItem from '@/components/home-head-sort/HomeHeadSortItem.vue'
import { describe, expect, it } from 'vitest'

describe('HomeHeadSortItem', () => {
  const wrapper = mount(HomeHeadSortItem, {
    props: { title: 'test', type: 'payload' }
  })
  const button = wrapper.get('button')
  it("renders button's title based on prop received", () => {
    expect(button.text()).toBe('test')
  })
  it('emits event with corresponding prop', async () => {
    await button.trigger('click')
    expect(wrapper.emitted().clicked).toHaveLength(1)
    expect((wrapper.emitted().clicked)).toEqual([['payload']])
  })
})
