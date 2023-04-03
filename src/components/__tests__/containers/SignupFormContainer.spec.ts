import SignupFormContainerVue from '@/containers/SignupFormContainer.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

describe('SignupFormContainer', () => {
  const mock = new MockAdapter(axios)

  it("changes button state depending on component's state", async () => {
    mock.onGet('http://localhost:3000/api/v1/users/name?name=test').reply(200)
    const wrapper = mount(SignupFormContainerVue)
    const button = wrapper.get("button[type='submit'")
    expect(button.attributes().disabled).toBeDefined()
    const input = wrapper.get("input[type='text']")
    const password = wrapper.get("input[name='password']")
    const confirmPassword = wrapper.get("input[name='confirmPassword']")
    await input.setValue("test")
    await password.setValue("12345678")
    await confirmPassword.setValue("12345678")
    expect(button.attributes().disabled).toBeUndefined()
    await password.setValue("1234567")
    expect(button.attributes().disabled).toBeDefined()
  })
})
