import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import EmojiItem from '@/components/emojis/EmojiItem.vue'
import { emojiKey, emojisCloseKey } from '@/keys/index'

describe('EmojiItem', () => {
  const addEmoji = vi.fn()
  const closeWindow = vi.fn()
  const wrapper = mount(EmojiItem, {
    props: { emoji: { name: 'подмигивающее лицо', alt: '😉' }, index: 1 },
    global: {
      provide: {
        [emojiKey as symbol]: addEmoji,
        [emojisCloseKey as symbol]: closeWindow
      }
    }
  })
  it('renders button with corresponding aria-label', () => {
    expect(wrapper.get('button').attributes()['aria-label']).toBe('Эмодзи: подмигивающее лицо')
  })
  it('calls function to handle click', async () => {
    await wrapper.get('button').trigger('click')
    expect(addEmoji).toHaveBeenCalledTimes(1)
    expect(addEmoji.mock.calls[0]).toEqual(['😉'])
    expect(closeWindow).toHaveBeenCalledTimes(1)
  })
})
