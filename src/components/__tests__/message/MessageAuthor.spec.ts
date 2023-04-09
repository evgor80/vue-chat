import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MessageAuthor from '@/components/message/MessageAuthor.vue'

describe('MessageAuthor', () => {
  const author = {
      username: 'author'
  }
  const wrapper = mount(MessageAuthor, { props: { author, isOnline: true } })

  it('displays author and their status', () => {
    expect(wrapper.html()).toContain('msg__author__status--online')
    expect(wrapper.get('span').text()).toBe('A')
  })
  it("changes author's status vased on prop", () => {
    const wrapper = mount(MessageAuthor, { props: { author, isOnline: false } })
    expect(wrapper.html()).toContain('msg__author__status--offline')
    expect(wrapper.get('span').text()).toBe('A')
  })
})
