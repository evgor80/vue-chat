import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import RoomItem from '@/components/room/RoomItem.vue'
import router from '@/router'

describe('RoomItem', () => {
  const room = {
    id: '1',
    name: 'name',
    slug: 'slug',
    members: 0,
    messages: 5,
    private: true,
    createdAt: 'today'
  }

  const wrapper = mount(RoomItem, {
    props: { room },
    global: {
      plugins: [router]
    }
  })
  it('renders room info based on prop received', () => {
    const link = wrapper.get('a')
    expect(link.attributes().href).toBe('/room/slug')
    expect(wrapper.html()).toContain('name')
    expect(wrapper.html()).toContain('0')
    expect(wrapper.html()).toContain('5')
    expect(wrapper.html()).toContain('fa-user-lock')
    expect(wrapper.html()).toContain('Закрытый')
  })
})
