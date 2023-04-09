import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MessageItem from '@/components/message/MessageItem.vue'
import type { IMessage } from '@/interfaces/IMessage'
import type { IInfoMessage } from '@/interfaces/IInfoMessage'

describe('MessageItem', () => {
  const message: IMessage = {
    _id: '1',
    author: {
      username: 'author'
    },
    type: 'message',
    text: 'hello',
    createdAt: Date.now()
  }
  const leaveMessage: IInfoMessage = {
    _id: '1',
    type: 'leave',
    user: 'test'
  }
  const wrapper = mount(MessageItem, { props: { message } })
  it("renders corresponding component based on message's type", () => {
    expect(wrapper.html()).toContain('msg__message')
    expect(wrapper.html()).not.toContain('msg__notification')
    const wrapper1 = mount(MessageItem, { props: { message: leaveMessage } })
    expect(wrapper1.html()).not.toContain('msg__message')
    expect(wrapper1.html()).toContain('msg__notification')
  })
})
