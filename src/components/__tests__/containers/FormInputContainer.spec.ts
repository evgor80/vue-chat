import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FormInputContainer from '@/containers/FormInputContainer.vue'
import { nameKey, passwordKey } from '@/keys'

describe('FormInputContainer', () => {
  it('renders password input with password visibility button based on corresponding prop', () => {
    const wrapper = mount(FormInputContainer, {
      props: { name: 'password', title: 'password', injectionKey: passwordKey },
      global: {
        provide: {
          [passwordKey as symbol]: ['hello', vi.fn()]
        }
      }
    })
    const input = wrapper.get('input')
    expect(input.attributes().name).toBe('password')
    expect(input.attributes().id).toBe('password')
    expect(input.attributes().type).toBe('password')
    expect(wrapper.get('button')).toBeTruthy()
  })
  it('renders only text input based on corresponding prop', () => {
    const wrapper = mount(FormInputContainer, {
      props: { name: 'test', title: 'test', injectionKey: nameKey },
      global: {
        provide: {
          [nameKey as symbol]: ['hello', vi.fn()]
        }
      }
    })
    const input = wrapper.get('input')
    expect(input.attributes().type).toBe('text')
    expect(wrapper.find('button').exists()).toBeFalsy()
  })
  it('changes input type when password visibility button clicked', async () => {
    const wrapper = mount(FormInputContainer, {
      props: { name: 'password', title: 'password', injectionKey: passwordKey },
      global: {
        provide: {
          [passwordKey as symbol]: ['hello', vi.fn()]
        }
      }
    })
    const input = wrapper.get('input')
    expect(input.attributes().type).toBe('password')
    const button = wrapper.find('button')
    expect(button.attributes()['aria-label']).toBe('Показать пароль')
    expect(wrapper.html()).not.toContain('fa-eye-slash')
    await button.trigger('click')
    expect(input.attributes().type).toBe('text')
    expect(button.attributes()['aria-label']).toBe('Скрыть пароль')
    expect(wrapper.html()).toContain('fa-eye-slash')
  })
})
