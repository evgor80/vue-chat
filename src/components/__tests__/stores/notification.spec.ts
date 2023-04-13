import { useNotificationStore } from '@/stores/notification'
import { createPinia, setActivePinia } from 'pinia'
import { describe, expect, it } from 'vitest'

describe('notification store', () => {
  it('adds notification', () => {
    setActivePinia(createPinia())
    const notification = useNotificationStore()
    expect(notification.notification).toBe('')
    expect(notification.isDisplayed).toBe(false)
    expect(notification.type).toBe('warning')
    notification.addNotification('test', 'info')
    expect(notification.notification).toBe('test')
    expect(notification.isDisplayed).toBe(true)
    expect(notification.type).toBe('info')
    setTimeout(() => {
      expect(notification.isDisplayed).toBe(false)
    }, 6000)
  })
})
