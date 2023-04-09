import { describe, expect, it } from 'vitest'
import beautifyDate from '@/utils/beautifyDate'

describe('beautifyDate', () => {
  it('returns specified date in human-friendly fomat', () => {
    let date = new Date()
    expect(beautifyDate(Date.now())).toBe('только что')
    expect(beautifyDate(date.setMinutes(date.getMinutes() - 5))).toBe('5 мин. назад')
    expect(beautifyDate(date.setHours(date.getHours() - 3))).toBe('3 час. назад')
    expect(beautifyDate(date.setDate(date.getDate() - 1))).toBe('день назад')
    expect(beautifyDate(date.setDate(date.getDate() - 8))).toBe('неделю назад')
    date = new Date()
    expect(beautifyDate(date.setDate(date.getDate() - 28))).toBe('3 недели назад')
    date = new Date()
    expect(beautifyDate(date.setDate(date.getDate() - 365))).toBe('год назад')
    date = new Date()
    expect(beautifyDate(date.setDate(date.getDate() - 400))).toBe('больше года назад')
  })
})
