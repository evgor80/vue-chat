import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import RoomHead from '@/components/RoomHead.vue'

describe('RoomHead', () => {
  const room = {
    id: '1',
    name: 'name',
    slug: 'slug',
    members: 2,
    messages: 10,
    private: true,
    createdAt: 'today'
  }
  const wrapper = mount(RoomHead, { props: { room, msgNum: 5 } })
  it("displays chat room's info based on room props receivied", () => {
    expect(wrapper.get("div[class='chat__name']").element.innerHTML).toContain('name')
    expect(wrapper.get("div[class='chat__info']").element.innerHTML).toContain('2')
    expect(wrapper.get("div[class='chat__info']").element.innerHTML).toContain('5')
  })
  it("calculates number of members based on members prop", () => {
    const wrapper1 = mount(RoomHead, { props: { room, msgNum: 5, members: ['1', '2', '3'] } })
    expect(wrapper1.get("div[class='chat__info']").element.innerHTML).toContain('3')
  })
})
