import { describe, expect, it, vi } from 'vitest'
import HomeHeadSearchContainer from '@/containers/HomeHeadSearchContainer.vue'
import { searchKey } from '@/keys'
import { mount } from '@vue/test-utils'

describe('HomeHeadSearchContainer', () => {
  const onChange = vi.fn()
  const wrapper = mount(HomeHeadSearchContainer, {
    global: {
      provide: {
        [searchKey as symbol]: ['test', onChange]
      }
    }
  })
  const input = wrapper.get('input')

  it('renders input with corresponding value', () => {
    expect(input.element.value).toBe('test')
  })
  it("renders reset button if input's value is not empty", () => {
    expect(wrapper.find('button').exists).toBeTruthy()
  })
  it('calls method on input change with corresponding argument', async () => {
    await input.setValue('new')
    expect(onChange.mock.calls[0]).toEqual(['new'])
  })
  it('resets input value on button click', async () => {
    await wrapper.get('button').trigger('click')
    expect(onChange.mock.calls[1]).toEqual([''])
  })
  it("hides button if input's value is empty", () => {
    const wrapper = mount(HomeHeadSearchContainer, {
      global: {
        provide: {
          [searchKey as symbol]: ['', onChange]
        }
      }
    })
    expect(wrapper.find('button').exists()).toBeFalsy()
  })
})
