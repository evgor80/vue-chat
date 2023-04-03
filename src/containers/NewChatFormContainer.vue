<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRegistrationForm } from "@/composables/useRegistrationForm"
import router from '@/router';
import Button from "@/components/shared/ButtonComponent.vue"
import FormInputContainer from "@/containers/FormInputContainer.vue"
import FormSwitch from "@/components/form/FormSwitch.vue"
import FormPasswordGeneratorButton from "@/components/form/FormPasswordGeneratorButton.vue"
import { nameKey, passwordKey, confirmPasswordKey } from "@/keys"


const isChecked = ref(false)

const {
    name,
    password,
    confirmPassword,
    response,
    handlePassworgGeneratorClick,
    register,
    nameError,
    passwordError,
    confirmPasswordError,
    isLoading,
} = useRegistrationForm("room");

function handleChange() {
    isChecked.value = !isChecked.value;
}

function handleSubmit() {
    register({
        name: name.value,
        password: password.value,
        private: isChecked.value,
    });
}

watch(response, (r) => {
    if (r?.room) {
        router.push("/")
    }
})

const isButtonActive = computed(() => {
    if (isChecked.value) {
        return name.value.length > 2 &&
            password.value.length > 7 &&
            confirmPassword.value.length > 7 &&
            !nameError.value &&
            !passwordError.value &&
            !confirmPasswordError.value &&
            !isLoading.value
    }
    return name.value.length > 2 && !nameError.value && !isLoading.value
})
</script>

<template>
    <form className="form" @submit.prevent="handleSubmit">
        <FormSwitch :isChecked="isChecked" @changed="handleChange" />
        <FormInputContainer title="Название чата" name="name" :injectionKey="nameKey" :error="nameError" />
        <Transition>
            <div v-if="isChecked">
                <FormInputContainer title="Пароль" name="password" :injectionKey="passwordKey" :error="passwordError" />
                <FormPasswordGeneratorButton @clicked="handlePassworgGeneratorClick" />
                <FormInputContainer title="Подтвердите пароль" name="confirmPassword" :injectionKey="confirmPasswordKey"
                    :error="confirmPasswordError" />
            </div>
        </Transition>
        <Button title="Создать" type="submit" isFullWidth :isActive="isButtonActive" @click.prevent="handleSubmit" />
    </form>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.4s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: scale(0);

}
</style>