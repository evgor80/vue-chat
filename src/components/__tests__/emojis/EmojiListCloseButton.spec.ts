import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import EmojiListCloseButton from '@/components/emojis/EmojiListCloseButton.vue'
import { emojisCloseKey } from '@/keys/index'

describe('EmojiListCloseButton', () => {
  const closeWindow = vi.fn()

  const wrapper = mount(EmojiListCloseButton, {
    global: {
      provide: {
        [emojisCloseKey as symbol]: closeWindow
      }
    }
  })
  it('renders button', () => {
    expect(wrapper.get('button').attributes()['aria-label']).toBe('Закрыть окно с эмодзи')
  })
  it('calls function  on click', () => {
    const button = wrapper.get('button')
    button.trigger('click')
    expect(closeWindow).toHaveBeenCalledTimes(1)
  })
})
