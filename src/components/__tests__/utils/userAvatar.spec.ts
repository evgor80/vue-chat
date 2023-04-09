import { describe, expect, it } from 'vitest'
import userAvatar from '@/utils/userAvatar'

describe('userAvatar', () => {
  it('returns style object with color based on username', () => {
    expect(userAvatar('test')).toBe('backgroundColor: #a366ff')
  })
})
