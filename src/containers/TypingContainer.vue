<script setup lang="ts">
import type { Socket } from 'socket.io-client';
import { watch, ref } from 'vue';
import TypingComponent from '@/components/TypingComponent.vue';

export interface Props {
    socket?: Socket;

}
const props = defineProps<Props>()
const isTypingEvent = ref(false)
const userTyping = ref("")


watch(() => props.socket, (s) => {   
    if (s)
        props.socket?.on("user-typing", (data) => {
            isTypingEvent.value = true;
            userTyping.value = data.user;
            setTimeout(() => {
                isTypingEvent.value = false;
            }, 1000);
        });
})
</script>


<template>
    <TypingComponent v-if="isTypingEvent" :userTyping="userTyping" />
</template>