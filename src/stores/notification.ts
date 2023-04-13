import { defineStore } from 'pinia'

export const useNotificationStore = defineStore({
  id: 'notification',
  state: () => ({
    notification: '',
    isDisplayed: false,
    type: 'warning'
  }),
  actions: {
    addNotification(n: string, type: 'warning' | 'info') {
      this.type = type
      this.notification = n
      this.isDisplayed = true
      setTimeout(() => (this.isDisplayed = false), 5000)
    }
  }
})
