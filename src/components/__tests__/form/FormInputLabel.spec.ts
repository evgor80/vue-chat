import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormInputLabel from '@/components/form/FormInputLabel.vue'

describe('FormInputLabel', () => {
  it('displays label based on props received', () => {
    const wrapper = mount(FormInputLabel, { props: { title: 'Email', name: 'test' } })

    expect(wrapper.html()).toContain('Email')
    expect(wrapper.get('label').attributes('for')).toBe("test")
  })
})
