import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Link from '@/components/shared/LinkComponent.vue'
import { createRouter, createWebHistory, type Router } from 'vue-router'

let router: Router
beforeEach(() => {
  const routes = [
    {
      path: '/',
      component: Link
    }
  ]
  router = createRouter({
    history: createWebHistory(),
    routes
  })
})

describe('Link', () => {
  it('displays title based on prop received', () => {
    const wrapper = mount(Link, {
      props: { title: 'Hello', isActive: true, path: '/test' },
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toContain('Hello')
  })
  it('render link based on prop received', () => {
    const wrapper = mount(Link, {
      props: { title: 'Hello', path: '/test' },
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.get('a').attributes('href')).toBe('/test')
  })
  it('adds class based on prop received', () => {
    const wrapper = mount(Link, {
      props: { title: 'Hello', isActive: true, path: '/test', className: 'test' },
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.classes('test')).toBe(true)
  })
})
