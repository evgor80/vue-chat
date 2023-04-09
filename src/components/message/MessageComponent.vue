<script setup lang="ts">
import { computed } from 'vue';
import MessageAuthor from "@/components/message/MessageAuthor.vue"
import MessageText from "@/components/message/MessageText.vue"
import MessageTime from "@/components/message/MessageTime.vue"
import type { IMessage } from '@/interfaces/IMessage';

export interface Props {
    message: IMessage;
    members?: Array<string>
}
const props = defineProps<Props>()

const user = localStorage.user;
const isOnline = computed(() => props.members ? props.members.includes(props.message.author.username) : false)
const isAuthor = computed(() => props.message.author.username === user)
const className = computed(() => isAuthor.value ? "msg__message--mine" : "")
</script>

<template>
    <div :class="['msg__message', className]">
        <MessageAuthor :author="message.author" :isOnline="isOnline" />
        <div class="msg__body">
            <MessageText :text="message.text" :isAuthor="isAuthor" />
            <MessageTime :createdAt="message.createdAt" :isAuthor="isAuthor" />
        </div>
    </div>
</template>

<style lang="scss">
.msg__message {
    display: flex;
    align-items: center;
    margin: 30px 10px;

    &--mine {
        flex-direction: row-reverse;
    }
}

.msg__body {
    margin: 0 10px;
}
</style>