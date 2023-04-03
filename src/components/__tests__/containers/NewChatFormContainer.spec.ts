import { describe, expect, it } from 'vitest'
import NewChatFormContainer from '@/containers/NewChatFormContainer.vue'
import { flushPromises, mount } from '@vue/test-utils'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

describe('NewChatFormContainer', () => {
  const mock = new MockAdapter(axios)

  it('renders only name field for public chat rooms', () => {
    const wrapper = mount(NewChatFormContainer)
    expect(wrapper.find("input[name='name']").exists()).toBeTruthy()
    expect(wrapper.find("input[name='password']").exists()).toBeFalsy()
  })
  it('renders password fields for private chat rooms', async () => {
    const wrapper = mount(NewChatFormContainer)
    const checkbox = wrapper.get("input[type='checkbox']")
    await checkbox.setValue(true)
    expect(wrapper.find("input[name='password']").exists()).toBeTruthy()
    expect(wrapper.find("input[name='confirmPassword']").exists()).toBeTruthy()
  })
  it("changes button state depending on component's state", async () => {
    mock.onGet('http://localhost:3000/api/v1/rooms/name?name=test').reply(200)
    const wrapper = mount(NewChatFormContainer)
    const button = wrapper.get("button[type='submit'")
    expect(button.attributes().disabled).toBeDefined()
    const nameInput = wrapper.get("input[name='name']")
    await nameInput.setValue('test')
    await flushPromises()
    expect(button.attributes().disabled).toBeUndefined()
    const checkbox = wrapper.get("input[type='checkbox']")
    await checkbox.setValue(true)
    expect(button.attributes().disabled).toBeDefined()
    const password = wrapper.get("input[name='password']")
    const confirmPassword = wrapper.get("input[name='confirmPassword']")
    await password.setValue('12345678')
    await confirmPassword.setValue('12345678')
    expect(button.attributes().disabled).toBeUndefined()
    await password.setValue('1234567')
    expect(button.attributes().disabled).toBeDefined()
  })
})
