import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormPasswordGeneratorButton from '@/components/form/FormPasswordGeneratorButton.vue'

describe("FormPasswordGeneratorButton", () => {
  
    it("emit event on click", () => {
        const wrapper = mount(FormPasswordGeneratorButton)
        const button = wrapper.get("button");
        button.trigger("click");
        expect(wrapper.emitted().clicked).toHaveLength(1) 
    });
  });