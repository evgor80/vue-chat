import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MessageText from '@/components/message/MessageText.vue'

describe('MessageText', () => {
  const text = 'hello'

  const wrapper = mount(MessageText, { props: { text, isAuthor: true } })
  it('displays message text', () => {
    expect(wrapper.get('div').attributes().class).toContain('msg__text--mine')
    expect(wrapper.get('div').text()).toBe('hello')
  })
})
