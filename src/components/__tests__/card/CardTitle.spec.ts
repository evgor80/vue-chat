import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardTitle from '@/components/card/CardTitle.vue'

describe('CardTitle', () => {
  it('displays title based on prop received', () => {
    const wrapper = mount(CardTitle, {
      props: { title: 'Hello' }
    })

    expect(wrapper.html()).toContain('Hello')
  })
})
