import { describe, expect, it } from 'vitest'
import generatePassword from '@/utils/generatePassword'

describe('generatePassword', () => {
  it('returns password as string of specified length', () => {
    const newPassword = generatePassword(8)
    expect(typeof newPassword).toBe('string')
    expect(newPassword).toHaveLength(8)
  })
})
