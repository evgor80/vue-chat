<script setup lang="ts">
import { computed, onBeforeMount, provide, ref } from "vue";
import CardTitle from "@/components/card/CardTitle.vue"
import CardDivider from "@/components/card/CardDivider.vue"
import FormInputContainer from "@/containers/FormInputContainer.vue"
import Button from "@/components/shared/ButtonComponent.vue"
import { passwordKey } from '@/keys';
import type IRoom from "@/interfaces/IRoom";
import type { Socket } from "socket.io-client";

export interface Props {
    room?: IRoom,
    socket?: Socket,
    isLoading: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['loading'])
const password = ref("")
const passwordError = ref("")

const isButtonActive = computed(() => password.value.length > 7 && !passwordError.value && !props.isLoading)


const handllePasswordChange = (str: string) => {
    password.value = str;
    if (passwordError.value) {
        passwordError.value = ""
    }
}

const handleSubmit = () => {
    emit('loading', true)
    props.socket?.emit("user-join", {
        room: props.room?.name,
        password: password.value,
        token: localStorage.token,
    });
}

onBeforeMount(() => {
    props.socket?.on("access-denied", () => {
        emit('loading', false)
        passwordError.value = "Неверный пароль";
    });
})

provide(passwordKey, [password, handllePasswordChange])

</script>

<template>
    <CardTitle title="Доступ в этот чат защищен паролем" />
    <CardDivider />
    <form @submit.prevent="handleSubmit">
        <FormInputContainer title="Пароль" name="password" :injectionKey="passwordKey" :error="passwordError" />
        <Button title="Войти" type="submit" isFullWidth :isActive="isButtonActive" :isLoading="isLoading" />
    </form>
</template>