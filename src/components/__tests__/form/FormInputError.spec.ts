import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormInputError from '@/components/form/FormInputError.vue'

describe('FormInputError', () => {
  it('displays error based on prop received', () => {
    const wrapper = mount(FormInputError, { props: { error: 'error' } })

    expect(wrapper.html()).toContain('error')
  })
})
