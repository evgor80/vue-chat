import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import NewMessageContainer from '@/containers/NewMessageContainer.vue'

describe('NewMessageContainer', () => {
  const wrapper = mount(NewMessageContainer)
  it('displays textarea and handles input', async () => {
    const textarea = wrapper.get('textarea')
    expect(textarea.element.value).toBe('')
    await textarea.setValue('test')
    expect(textarea.element.value).toBe('test')
  })
  it('adds emoji to message text', async () => {
    const emojisButton = wrapper.get("button[aria-label='Выбрать эмодзи']")
    await emojisButton.trigger('click')
    const emojiBtn = wrapper.get("button[aria-label='Эмодзи: подмигивающее лицо']")
    await emojiBtn.trigger('click')
    const textarea = wrapper.get('textarea')
    expect(textarea.element.value).toBe('test😉')
  })
  it('resets textarea value and disables send button when message was sent', async () => {
    const button = wrapper.get('button[aria-label="Отправить сообщение"]')
    await button.trigger('click')
    expect(wrapper.get('textarea').element.value).toBe('')
    expect(button.attributes().disabled).toBeDefined()
  })
})
