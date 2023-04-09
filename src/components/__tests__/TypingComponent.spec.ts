import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TypingComponent from '@/components/TypingComponent.vue'

describe('TypingComponent', () => {
  it('displays info about typing user', () => {
    const wrapper = mount(TypingComponent, { props: { userTyping: 'test' } })
    expect(wrapper.get('span').text()).toBe('test печатает')
  })
})
