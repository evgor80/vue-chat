import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormInput from '@/components/form/FormInput.vue'
import { nameKey } from '@/keys'
import { vi } from 'vitest'

describe('FormInput', () => {
  it('renders input based on props received', async () => {
    const wrapper = mount(FormInput, {
      props: { name: 'test', isPasswordField: true, injectionKey: nameKey },
      global: {
        provide: {
          [nameKey as symbol]: ['hello', vi.fn()]
        }
      }
    })

    const input = wrapper.get('input')
    expect(input.attributes().name).toBe('test')
    expect(input.attributes().id).toBe('test')
    expect(input.attributes().type).toBe('password')
  })
  it('renders value given via prop', async () => {
    const wrapper = mount(FormInput, {
      props: { name: 'test', isPasswordField: true, injectionKey: nameKey },
      global: {
        provide: {
          [nameKey as symbol]: ['hello', vi.fn()]
        }
      }
    })

    const input = wrapper.get('input')
    expect(input.element.value).toBe('hello')
  })

  it('calls function to handle value change', async () => {
    const onChange = vi.fn()
    const wrapper = mount(FormInput, {
      props: { name: 'test', isPasswordField: true, injectionKey: nameKey },
      global: {
        provide: {
          [nameKey as symbol]: ['', onChange]
        }
      }
    })

    const input = wrapper.get('input')
    await input.setValue("1")
    await input.setValue("2")
    expect(onChange).toHaveBeenCalledTimes(2)
  })
})
