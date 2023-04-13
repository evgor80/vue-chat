import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MessageComponent from '@/components/message/MessageComponent.vue'
import type { IMessage } from '@/interfaces/IMessage'

describe('MessageComponent', () => {
  const message: IMessage = {
    _id: '1',
    author: {
      username: 'author'
    },
    type: 'message',
    text: 'hello',
    createdAt: new Date().toString()
  }
  const wrapper = mount(MessageComponent, { props: { message } })
  it('displays message', () => {
    expect(wrapper.html()).toContain('hello')
  })
})
