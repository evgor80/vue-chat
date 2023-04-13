<script setup lang="ts">
import { useRegistrationForm } from "@/composables/useRegistrationForm"
import Button from "@/components/shared/ButtonComponent.vue"
import FormInputContainer from "@/containers/FormInputContainer.vue"
import FormPasswordGeneratorButton from "@/components/form/FormPasswordGeneratorButton.vue"
import { nameKey, passwordKey, confirmPasswordKey } from "@/keys"
import { computed, provide, watch } from "vue";
import router from "@/router"
import { useNotificationStore } from "@/stores/notification"

const {
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
} = useRegistrationForm("user");

const { addNotification } = useNotificationStore()


const isButtonActive = computed(() => name.value.length > 2 &&
    password.value.length > 7 &&
    confirmPassword.value.length > 7 &&
    !nameError.value &&
    !passwordError.value &&
    !confirmPasswordError.value &&
    !isLoading.value)


function handleSubmit() {
    register({
        "username": name.value,
        "password": password.value
    })
}

watch(response, (r) => {
    if (r?.token) {
        localStorage.setItem("token", r.token);
        localStorage.setItem("user", r.user.username);
        addNotification("Вы зарегистрированы", 'info')
        router.push("/");
    }
})

provide(nameKey, [name, handlleNameChange])
provide(passwordKey, [password, handllePasswordChange])
provide(confirmPasswordKey, [confirmPassword, handlleConfirmPasswordChange])



</script>

<template>
    <form class="form" @submit.prevent="handleSubmit">
        <FormInputContainer title="Имя пользователя" name="name" :injectionKey="nameKey" :error="nameError" />
        <FormInputContainer title="Пароль" name="password" :injectionKey="passwordKey" :error="passwordError" />
        <FormPasswordGeneratorButton @clicked="handlePassworgGeneratorClick" />
        <FormInputContainer title="Подтвердите пароль" name="confirmPassword" :injectionKey="confirmPasswordKey"
            :error="confirmPasswordError" />
        <Button title="Зарегистрироваться" type="submit" isFullWidth :isActive="isButtonActive" :isLoading="isLoading"
            @click.prevent="handleSubmit" />
    </form>
</template>