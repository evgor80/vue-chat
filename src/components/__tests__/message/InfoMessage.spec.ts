import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import InfoMessage from '@/components/message/InfoMessage.vue'
import type { IInfoMessage } from '@/interfaces/IInfoMessage'

describe('InfoMessage', () => {
  const msg = {
    type: 'leave',
    user: 'test'
  }
  it('displays info message about user', () => {
    const wrapper = mount(InfoMessage, { props: { message: msg as IInfoMessage } })
    expect(wrapper.get('span').text()).toBe('test покидает чат')
  })
})
