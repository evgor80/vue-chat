import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import EmojiList from '@/components/emojis/EmojiList.vue'
import emojis from '@/utils/emojis';
import { emojiKey, emojisCloseKey } from '@/keys'

describe("EmojiList", () => {
  const addEmoji = vi.fn()
  const closeWindow = vi.fn()
    it("renders list of emojis", () => {
        const wrapper = mount(EmojiList, {
          global: {
            provide: {
              [emojiKey as symbol]: addEmoji,
              [emojisCloseKey as symbol]: closeWindow
            }
          }
        })
      expect(wrapper.find("ul").exists()).toBeTruthy();
      expect(wrapper.findAll("button").length === emojis.length).toBeTruthy();
    });
  });