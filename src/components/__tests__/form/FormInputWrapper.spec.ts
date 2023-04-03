import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormInputWrapper from '@/components/form/FormInputWrapper.vue'

describe('FormInputWrapper', () => {
  it('renders slot', () => {
    const wrapper = mount(FormInputWrapper, {
      slots: { default: '<div data-test="test">Test</div>' }
    })

    expect(wrapper.get('[data-test="test"]').text()).toContain('Test')
  })
})
