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
const msgBodyclassName = computed(() => isAuthor.value ? "msg__body--mine" : "")

</script>

<template>
    <div :class="['msg__message', className]">
        <MessageAuthor :author="message.author" :isOnline="isOnline" />
        <div :class="['msg__body', msgBodyclassName]">
            <MessageText :text="message.text" :isAuthor="isAuthor" />
            <MessageTime :createdAt="message.createdAt"/>
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
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 0 10px;

    &--mine {
        justify-content: right;
    }
}
</style>