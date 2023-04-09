import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormPasswordVisibilityButton from '@/components/form/FormPasswordVisibilityButton.vue'


describe("FormPasswordVisibilityButton", () => {
  
    it("sets label and classname based on prop received", () => {
      const wrapper = mount(FormPasswordVisibilityButton, {props: {isVisible: true}})

      const button = wrapper.get("button");
      expect(button.attributes()["aria-label"]).toBe("Скрыть пароль");
      expect(wrapper.html()).toContain("fa-eye-slash");
    });
    it("changes label and classname if prop changed", () => {
        const wrapper = mount(FormPasswordVisibilityButton, {props: {isVisible: false}})
        const button = wrapper.get("button");
        expect(button.attributes()["aria-label"]).toBe("Показать пароль");
        expect(wrapper.html()).not.toContain("fa-eye-slash");
    });
    it("emits event on click", () => {
        const wrapper = mount(FormPasswordVisibilityButton, {props: {isVisible: true}})
        const button = wrapper.get("button");
        button.trigger("click");
        expect(wrapper.emitted().clicked).toHaveLength(1)        
    
    });
  });