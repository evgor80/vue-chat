import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardDivider from '@/components/card/CardDivider.vue'

describe('CardDivider', () => {
  it('displays text based on prop received', () => {
    const wrapper = mount(CardDivider, { props: { isTextDisplayed: true } })
    expect(wrapper.html()).toContain('или')
  })
  it("doesn't display text without prop", () => {
    const wrapper = mount(CardDivider)
    expect(wrapper.html()).not.toContain('или')
  })
})
