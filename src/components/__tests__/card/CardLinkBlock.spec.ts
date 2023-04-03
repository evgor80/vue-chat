import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import CardLinkBlock from '@/components/card/CardLinkBlock.vue'
import { createRouter, createWebHistory, type Router } from 'vue-router'

let router: Router
beforeEach(() => {
  const routes = [
    {
      path: '/login',
      name: 'login',
      component: CardLinkBlock
    },
    {
      path: '/signup',
      name: 'signup',
      component: CardLinkBlock
    }
  ]
  router = createRouter({
    history: createWebHistory(),
    routes
  })
})

describe('CardLinkBlock', () => {
  it("renders signup link if path is '/login'", async () => {
    router.push('/login')
    await router.isReady()
    const wrapper = mount(CardLinkBlock, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.html()).not.toContain('href="/login"')
    expect(wrapper.html()).toContain('href="/signup"')
  })

  it("renders login link if path is not '/login'", async () => {
    router.push('/signup')
    await router.isReady()
    const wrapper = mount(CardLinkBlock, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.html()).toContain('href="/login"')
    expect(wrapper.html()).not.toContain('href="/signup"')
  })
})
