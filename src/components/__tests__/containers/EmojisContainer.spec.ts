import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import EmojisContainer from '@/containers/EmojisContainer.vue'
import { emojiKey } from '@/keys'

describe('EmojisContainer', () => {
  const addEmoji = vi.fn()

  const wrapper = mount(EmojisContainer, {
    global: {
      provide: {
        [emojiKey as symbol]: addEmoji,
      }
    }
  })
  it('displays and hides list of emojis by button click', async () => {
    const emojisButton = wrapper.get("button[aria-label='Выбрать эмодзи']")
    expect(wrapper.find("ul").exists()).toBeFalsy()
    await emojisButton.trigger('click')
    expect(wrapper.find("ul").exists()).toBeTruthy()
    await emojisButton.trigger('click')
    expect(wrapper.find("ul").exists()).toBeFalsy()
  })
  it('closes list on emoji button click and handles click', async () => {
    const emojisButton = wrapper.get("button[aria-label='Выбрать эмодзи']")
    await emojisButton.trigger('click')
    const emojiBtn = wrapper.get("button[aria-label='Эмодзи: подмигивающее лицо']")
    await emojiBtn.trigger('click')
    expect(wrapper.find("ul").exists()).toBeFalsy()
    expect(addEmoji).toHaveBeenCalledTimes(1)
    expect(addEmoji.mock.calls[0]).toEqual(['😉'])
  })
})
