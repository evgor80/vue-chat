import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardLinkWrapper from '@/components/card/CardLinkWrapper.vue'

describe('CardLinkWrapper', () => {
  it('renders slot', () => {
    const wrapper = mount(CardLinkWrapper, {
      slots: { default: '<div data-test="test">Test</div>' }
    })

    expect(wrapper.get('[data-test="test"]').text()).toContain('Test')
  })
})
