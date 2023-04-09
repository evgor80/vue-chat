import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Link from '@/components/shared/LinkComponent.vue'
import router from '@/router'



describe('Link', () => {
  it('displays title based on prop received', () => {
    const wrapper = mount(Link, {
      props: { title: 'Hello', isActive: true, path: '/login' },
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toContain('Hello')
  })
  it('render link based on prop received', () => {
    const wrapper = mount(Link, {
      props: { title: 'Hello', path: '/login' },
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.get('a').attributes('href')).toBe('/login')
  })
  it('adds class based on prop received', () => {
    const wrapper = mount(Link, {
      props: { title: 'Hello', isActive: true, path: '/login', class: 'test' },
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.classes('test')).toBe(true)
  })
})
