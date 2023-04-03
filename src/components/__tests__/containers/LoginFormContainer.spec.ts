import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import LoginFormContainer from '@/containers/LoginFormContainer.vue'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

describe('LoginFormContainer', () => {
  const mock = new MockAdapter(axios)
  mock
    .onPost('http://localhost:3000/api/v1/users/login')
    .reply(401, { message: 'Неверное имя пользователя или пароль' })
  it('changes button state based on state of other elements', async () => {
    const wrapper = mount(LoginFormContainer)
    const button = wrapper.get("button[type='submit']")
    const input = wrapper.get("input[type='text']")
    const password = wrapper.get("input[type='password']")
    expect(button.attributes().disabled).toBeDefined()
    await input.setValue("test")
    await password.setValue("12345678")
    expect(button.attributes().disabled).toBeUndefined()
  })
  it('renders error for invalid credentials', async () => {
    const wrapper = mount(LoginFormContainer)
    const button = wrapper.get("button[type='submit']")
    expect(button.attributes().disabled).toBeDefined()
    const input = wrapper.get("input[type='text']")
    await input.setValue("test")
    const password = wrapper.get("input[type='password']")
    await password.setValue("12345678")
    await button.trigger('click')
    await flushPromises()
    expect(wrapper.html()).toContain('Неверное имя пользователя или пароль')
  })
  it('resets error when credentials updated', async () => {
    const wrapper = mount(LoginFormContainer)
    const button = wrapper.get("button[type='submit']")
    expect(button.attributes().disabled).toBeDefined()
    const input = wrapper.get("input[type='text']")
    await input.setValue("test")
    const password = wrapper.get("input[type='password']")
    await password.setValue("12345678")
    await button.trigger('click')
    await flushPromises()
    expect(wrapper.html()).toContain('Неверное имя пользователя или пароль')
    await input.setValue("test1")
    expect(wrapper.html()).not.toContain('Неверное имя пользователя или пароль')
  })
})
