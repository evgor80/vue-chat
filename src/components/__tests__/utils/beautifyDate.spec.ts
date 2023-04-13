import { describe, expect, it } from 'vitest'
import beautifyDate from '@/utils/beautifyDate'

describe('beautifyDate', () => {
  it('returns specified date in human-friendly fomat', () => {
    let date = new Date()
    expect(beautifyDate(date.toString())).toBe('только что')
    expect(beautifyDate(new Date(date.setMinutes(date.getMinutes() - 5)).toString())).toBe('5 мин. назад')
    expect(beautifyDate(new Date(date.setHours(date.getHours() - 3)).toString())).toBe('3 час. назад')
    expect(beautifyDate(new Date(date.setDate(date.getDate() - 1)).toString())).toBe('день назад')
    expect(beautifyDate(new Date(date.setDate(date.getDate() - 8)).toString())).toBe('неделю назад')
    date = new Date()
    expect(beautifyDate(new Date(date.setDate(date.getDate() - 28)).toString())).toBe('3 недели назад')
    date = new Date()
    expect(beautifyDate(new Date(date.setDate(date.getDate() - 365)).toString())).toBe('год назад')
    date = new Date()
    expect(beautifyDate(new Date(date.setDate(date.getDate() - 400)).toString())).toBe('больше года назад')
  })
})
