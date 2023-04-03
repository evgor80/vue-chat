import generatePassword from '@/utils/generatePassword'
import { computed, ref, watch, provide } from 'vue'
import { useAxios } from './useAxios'
import { nameKey, passwordKey, confirmPasswordKey } from '@/keys'

export function useRegistrationForm(type: 'user' | 'room') {
  const name = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const { response, isLoading, makeApiCall } = useAxios()

  watch(name, async (n) => {
    if (n.length > 2) {
      makeApiCall({
        method: 'GET',
        url: `/${type}s/name?name=${n}`
      })
    }
  })

  function handlleNameChange(n: string) {
    name.value = n
  }

  function handlleConfirmPasswordChange(p: string) {
    confirmPassword.value = p
  }

  function handllePasswordChange(p: string) {
    password.value = p
  }

  function handlePassworgGeneratorClick() {
    const newPassword = generatePassword(12)
    password.value = newPassword
    confirmPassword.value = newPassword
  }

  function register(data: Object) {
    makeApiCall({
      method: 'POST',
      url: `/${type}s`,
      data
    })
  }

  const arePasswordsMatch = computed(() => password.value === confirmPassword.value)

  const nameError = computed(() => {
    if (name.value.length > 0 && name.value.length < 3) {
      return 'Должно содержать минимум 3 символа'
    } else if (response.value?.status === 'failed') {
      return 'Это имя уже занято'
    }
    return ''
  })

  const passwordError = computed(() =>
    password.value.length > 0 && password.value.length < 8
      ? 'Пароль должен содержать минимум 8 символов'
      : ''
  )

  const confirmPasswordError = computed(() =>
    confirmPassword.value.length > 0 && !arePasswordsMatch.value ? 'Пароли не совпадают' : ''
  )

  provide(nameKey, [name, handlleNameChange])
  provide(passwordKey, [password, handllePasswordChange])
  provide(confirmPasswordKey, [confirmPassword, handlleConfirmPasswordChange])

  return {
    name,
    password,
    confirmPassword,
    response,
    handlleNameChange,
    handllePasswordChange,
    handlleConfirmPasswordChange,
    handlePassworgGeneratorClick,
    register,
    nameError,
    passwordError,
    confirmPasswordError,
    isLoading
  }
}
