import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import EmojisButton from '@/components/emojis/EmojisButton.vue'

describe('EmojisButton', () => {
  const wrapper = mount(EmojisButton, {
    props: { isWindowOpened: true }
  })
  it('renders button', () => {
    expect(wrapper.find('button').exists()).toBeTruthy()
    expect(wrapper.get('img').attributes().class).toContain('new-msg-form__emoji--active')
  })
  it('emits event on click', async () => {
    const button = wrapper.get('button')
    await button.trigger('click')
    expect(wrapper.emitted().clicked).toHaveLength(1)
  })
})
