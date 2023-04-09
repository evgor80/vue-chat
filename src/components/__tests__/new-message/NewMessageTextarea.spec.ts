import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import NewMessageTextarea from '@/components/new-message/NewMessageTextarea.vue'

describe('NewMessageTextarea', () => {
  const wrapper = mount(NewMessageTextarea, { props: { value: 'test' } })
  it('renders textarea for new message', () => {   
    expect(wrapper.get('textarea').element.value).toBe('test')
  })
  it('emits event on input', async () => {
    const textarea = wrapper.get('textarea')
    await textarea.setValue('new')
    expect(wrapper.emitted().changed[0]).toEqual(['new'])
  })
})
