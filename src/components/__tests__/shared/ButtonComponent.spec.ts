import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '@/components/shared/ButtonComponent.vue'


describe("Button", () => {
    it("renders button based on props received", () => {
      const wrapper = mount(Button, {
        props: {title: 'test',  type: 'submit', isActive: false, isFullWidth: true }
      })
      const button = wrapper.find('button');
      expect(button.exists()).toBe(true);
      expect(button.attributes().disabled).toBeDefined();
      expect(button.classes("button--half-width")).toBe(false);
    });
    it("renders loader while loading data", () => {
      const wrapper = mount(Button, {
        props: {title: 'Test',  type: 'submit',  isLoading: true }
      })
      expect(wrapper.html()).not.toContain("Test")
      expect(wrapper.html()).toContain("Загрузка...")
    });
  });