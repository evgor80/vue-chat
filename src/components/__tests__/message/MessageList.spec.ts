import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MessageList from '@/components/message/MessageList.vue'
import type { IMessage } from '@/interfaces/IMessage';


describe("MessageList", () => {
    const messages: Array<IMessage> = [
      {
        _id: "1",
        author: {
          username: "author",
        },
        type: "message",
        text: "hello",
        createdAt: new Date().toString(),
      },
      {
        _id: "2",
        author: {
          username: "author",
        },
        type: "message",
        text: "hello",
        createdAt: new Date().toString(),
      },
    ];
    const wrapper = mount(MessageList, {props: {messages}})
    it("lists messages", () => {
      expect(wrapper.findAll("li").length).toBe(2);
    });
  });