import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MessageTime from '@/components/message/MessageTime.vue'

describe('MessageTime', () => {
  const createdAt = Date.now()

  it('displays time message was created in human-friendly format', () => {
    const wrapper = mount(MessageTime, { props: { createdAt, isAuthor: true } })
    expect(wrapper.get('div').attributes().class).toContain('msg__time--mine')
    expect(wrapper.get('span').text()).toBe('только что')
  })
})
