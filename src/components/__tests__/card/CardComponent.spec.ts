import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '@/components/card/CardComponent.vue'

describe('Card', () => {
  it('renders slot', () => {
    const wrapper = mount(Card, { slots: {default: '<div data-test="test">Test</div>'} })

    expect(wrapper.get('[data-test="test"]').text()).toContain('Test')
  })
  it('define its class names based on props received', () => {
    const wrapper = mount(Card, { props: { isFullHeight: true, isFullWidth: true } })
    expect(wrapper.html()).toContain('card__body--full-height')
  })
})
