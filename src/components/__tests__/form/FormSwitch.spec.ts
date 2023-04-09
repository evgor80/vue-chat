import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormSwitch from '@/components/form/FormSwitch.vue'

describe('FormSwitch', () => {
  it('is checked based on prop received', () => {
    const wrapper = mount(FormSwitch, { props: { isChecked: true } })

    const switchEl = wrapper.get('input')
    expect(switchEl.element.value).toBeTruthy()
  })
  it('emits event on click', () => {
    const wrapper = mount(FormSwitch, { props: { isChecked: true } })
    const switchEl = wrapper.get('input')
    switchEl.trigger('click')
    expect(wrapper.emitted().click).toHaveLength(1)
    wrapper.vm.$emit('changed')
    expect(wrapper.emitted().changed).toHaveLength(1)
  })
})
