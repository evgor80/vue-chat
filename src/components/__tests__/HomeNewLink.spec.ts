import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HomeNewLink from '@/components/HomeNewLink.vue'
import router from '@/router'

describe('HomeNewLink', () => {
  it('render link to new page', () => {

    const wrapper = mount(HomeNewLink, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.find('a').exists()).toBeTruthy()
    expect(wrapper.find('a').attributes().href).toBe('/new-chat')
  })
})
