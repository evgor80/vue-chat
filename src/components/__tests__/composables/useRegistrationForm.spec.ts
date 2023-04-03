import { useRegistrationForm } from '@/composables/useRegistrationForm'
import { describe, expect, it } from 'vitest'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { flushPromises } from '@vue/test-utils'

describe('useRegistrationForm', () => {
  it('changes values respectively', () => {
    const {
      name,
      password,
      confirmPassword,
      handlleNameChange,
      handllePasswordChange,
      handlleConfirmPasswordChange,
      handlePassworgGeneratorClick
    } = useRegistrationForm('room')

    expect(name.value).toBe('')
    handlleNameChange('name')
    expect(name.value).toBe('name')
    expect(password.value).toBe('')
    handllePasswordChange('password')
    expect(password.value).toBe('password')
    expect(confirmPassword.value).toBe('')
    handlleConfirmPasswordChange('confirmPassword')
    expect(confirmPassword.value).toBe('confirmPassword')
    handlePassworgGeneratorClick()
    expect(password.value === confirmPassword.value).toBeTruthy()
  })
  it('generates errors based on field values', () => {
    const {
      handlleNameChange,
      handllePasswordChange,
      handlleConfirmPasswordChange,
      nameError,
      passwordError,
      confirmPasswordError
    } = useRegistrationForm('room')

    expect(nameError.value).toBe('')
    handlleNameChange('1')
    expect(nameError.value).toBe('Должно содержать минимум 3 символа')
    handlleNameChange('123')
    expect(nameError.value).toBe('')
    expect(passwordError.value).toBe('')
    handllePasswordChange('1')
    expect(passwordError.value).toBe('Пароль должен содержать минимум 8 символов')
    handllePasswordChange('12345678')
    expect(passwordError.value).toBe('')
    expect(confirmPasswordError.value).toBe('')
    handlleConfirmPasswordChange('1')
    expect(confirmPasswordError.value).toBe('Пароли не совпадают')
    handlleConfirmPasswordChange('12345678')
    expect(confirmPasswordError.value).toBe('')
    handllePasswordChange('1234567')
    expect(passwordError.value).toBe('Пароль должен содержать минимум 8 символов')
    expect(confirmPasswordError.value).toBe('Пароли не совпадают')
  })

  it('generates error if name is occupied', async () => {
    const { nameError, handlleNameChange } = useRegistrationForm('room')
    const mock = new MockAdapter(axios)
    mock.onGet('http://localhost:3000/api/v1/rooms/name?name=test').reply(409)
    handlleNameChange('test')
    await flushPromises()
    expect(nameError.value).toBe('Это имя уже занято')
  })
})
