import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Loader from '@/components/shared/LoaderComponent.vue'

describe('Loader', () => {
  it('adds classes when corresponding props received', () => {
    const wrapper = mount(Loader, { props: { isColored: true, isLarge: true } })
    expect(wrapper.text()).toContain("Загрузка...")
    expect(wrapper.classes('loader--large')).toBe(true)
    expect(wrapper.classes('loader--color')).toBe(true)
  })
  it("doesn't add classes without corresponding props", () => {
    const wrapper = mount(Loader)
    expect(wrapper.classes('loader--large')).toBe(false)
    expect(wrapper.classes('loader--color')).toBe(false)
  })
})
