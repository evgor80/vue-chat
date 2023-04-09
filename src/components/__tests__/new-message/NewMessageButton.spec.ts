import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import NewMessageButton from '@/components/new-message/NewMessageButton.vue'

describe('NewMessageButton', () => {
  const wrapper = mount(NewMessageButton, { props: { isActive: false } })
  it('disabled based on prop', () => {
    const button = wrapper.get('button')   
    expect(button.attributes().disabled).toBeDefined()
    expect(button.attributes().class).toContain('new-msg-form__submit-btn--disabled')
  })
  it('emits event on click', async () => {
    const wrapper1 = mount(NewMessageButton, { props: { isActive: true } })
    const button = wrapper1.get('button')
    await button.trigger('click')
    expect(wrapper1.emitted().clicked).toHaveLength(1)
  })
})
