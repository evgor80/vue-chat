<script setup lang="ts">

import Button from "@/components/shared/ButtonComponent.vue"
import FormInputContainer from "@/containers/FormInputContainer.vue"
import { computed, provide, ref, watch } from "vue";
import { nameKey, passwordKey } from "@/keys"
import { useAxios } from "@/composables/useAxios";
import router from "@/router";

const name = ref("")
const setName = (n: string) => {
    name.value = n.trim();
    if (error.value) error.value = ""
}
const password = ref("")
const setPassword = (p: string) => {
    password.value = p.trim();
    if (error.value) error.value = ""
}
const error = ref("")
const { response, isLoading, makeApiCall } = useAxios();


const isButtonActive =
    computed(() => name.value.length > 2 && password.value.length > 7 && !error.value && !isLoading.value)

function handleSubmit() {
    makeApiCall({
        method: "POST",
        url: "/users/login",
        data: {
            username: name.value,
            password: password.value,
        },
    });
}

watch(response, (r) => {
    if (r?.token) {
        localStorage.setItem("token", r.token);
        localStorage.setItem("user", r.user.username);
        router.push("/");
    } else if (r?.error) {
        error.value = r.error;
    }
})

provide(nameKey, [name, setName])
provide(passwordKey, [password, setPassword])

</script>

<template>
    <form class="form" @submit.prevent="handleSubmit">
        <FormInputContainer name="name" title="Имя пользователя" :error="error" :injectionKey="nameKey" />
        <FormInputContainer name="password" title="Пароль" :injectionKey="passwordKey" />
        <Button title="Войти" type="submit" isFullWidth :isActive="isButtonActive" :isLoading="isLoading"
            @click.prevent="handleSubmit" />
    </form>
</template >
    